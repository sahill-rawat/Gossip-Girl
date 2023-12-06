import React, { createContext, useContext, useState, useEffect } from "react";
import { db, app, auth } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const addUser = async (name) => {
    const user = auth.currentUser;
    const allData = {
      name: name,
      email: user.email,
      uid: user.uid,
      img: user.photoURL,
      friends: [],
    };

    try {
      const docRef = await addDoc(collection(db, "users"), allData);
      console.log(docRef);
    } catch (e) {
      console.log(e.message);
    }
  };

  const sendMessage = async (message, receiverUID, receiverEmail) => {
    const key = [receiverUID, currentUser.uid].sort().join("");
    const chatRef = collection(db, "chats", key, "chat");

    try {
      const existingChat = await getDocs(chatRef);

      if (existingChat.empty) {
        console.log("trueeeee");
        await addFriend(currentUser.uid, receiverUID);
        await addFriend(receiverUID, currentUser.uid);
      }

      const newMessageRef = await addDoc(collection(db, "chats", key, "chat"), {
        sender: currentUser.uid,
        text: message,
        time: new Date().getTime(),
      });

      console.log("New message added:", newMessageRef.id);
    } catch (e) {
      console.error("Error sending message:", e);
    }
  };

  const findFriends = async (uid) => {
    // console.log(uid);
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const all = userData.friends.map((friend) => friend);
        const friendPromises = all.map((fren) => findUserByUID(fren));

        try {
          const friends = await Promise.all(friendPromises);
          return friends;
        } catch (error) {
          console.error("Error fetching friends:", error);
          return null;
        }
        return null;;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error finding user by email:", error);
      return null;
    }
  };

  const findUserByEmail = async (email) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        return userData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error finding user by email:", error);
      return null;
    }
  };

  const findUserByUID = async (uid) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      //   console.log(querySnapshot);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        return userData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error finding user by email:", error);
      return null;
    }
  };

  //   tenzindickyi@gmail.com

  const addFriend = async (targetUID, friendUID, email) => {
    try {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(
        query(usersRef, where("uid", "==", targetUID))
      );

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          const userRef = doc.ref;
          const userData = doc.data();

          const updatedFriends = [
            ...userData.friends,
            { uid: friendUID, email: email },
          ]; // Add friendUID to the friends array

          await updateDoc(userRef, { friends: updatedFriends });
          console.log("Friends array updated successfully");
        });
      } else {
        console.log("No user found with the specified UID");
      }
    } catch (error) {
      console.error("Error updating friends array:", error);
    }
  };

  const getMessage = async (receiverUID) => {
    try {
      const key = [receiverUID, currentUser.uid].sort().join("");
      const chatRef = collection(db, "chats", key, "chat");
      
      const querySnapshot = await getDocs(chatRef);
  
      if (!querySnapshot.empty) {
        const messagesData = querySnapshot.docs.map((doc) => doc.data());
        // console.log(messagesData);
        return messagesData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      return null;
    }
  };
  

  useEffect(() => {
    //returns function through which we can unsubscribe from onAuthStateChanged event
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    addUser,
    sendMessage,
    getMessage,
    findUserByUID,
    findFriends,
    findUserByEmail
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
