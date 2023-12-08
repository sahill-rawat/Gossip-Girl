import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { db, app, auth } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();

  const stateInit = {
    user: null,
    chatID: null
  };

  const chatReducer = (state, action) => {
    switch(action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatID: currentUser.uid > action.payload.uid
          ? currentUser.uid + action.payload.uid
          : action.payload.uid + currentUser.uid
        };
        case "RESET_USER_STATE":
          return {
            user : null,
            chatID: null
          }
        default:
          return state;
    }
  };

  const [userState, dispatch] = useReducer(chatReducer, stateInit);

  const findUserByName = async (name) => {
    console.log(name);
    const usersRef = collection(db, "users");
    const q1 = query(usersRef, where("displayName", "==", name));
    const q2 = query(usersRef, where("email", "==", name));

    try {
      const querySnapshot1 = await getDocs(q1);
      const userData1 = querySnapshot1.docs[0]?.data();
      if (userData1)  return userData1;

      const querySnapshot2 = await getDocs(q2);
      const userData2 = querySnapshot2.docs[0]?.data();
      if (userData2)  return userData2;

      return null;
      
      } catch (err) {
        console.error(err);
        return null;
      }
  };

  const createDoc = async (collectionName, key, data)=> {
    const res = await getDoc(doc(db, collectionName, key));
    if (!res.exists()) {
      await setDoc(doc(db, collectionName, key), data);
    }
  };

  const selectUser = async (user) => {

    const key =  
    currentUser.uid > user.uid
    ? currentUser.uid + user.uid
    : user.uid + currentUser.uid;
    try {

      await createDoc("chats", key, {message: []});

      await updateDoc(doc(db, "userChats", user.uid), {
        [key] : {
          "userInfo": {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          'data': serverTimestamp(),
        }
      });

    await updateDoc(doc(db, "userChats", currentUser.uid),  {
      [key]: {
         "userInfo": {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      "date": serverTimestamp(),
    }
    });
     
    //   await createDoc("userChats", user.uid, {
    //     [key + ".userInfo"]: {
    //       uid: currentUser.uid,
    //       displayName: currentUser.displayName,
    //       photoURL: currentUser.photoURL === null ? "" : currentUser.photoURL,
    //     },
    //     [key+'.data']: serverTimestamp()
    //   });

    // await createDoc("userChats", currentUser.uid,  {
    //   [key + ".userInfo"]: {
    //     uid: user.uid,
    //     displayName: user.name,
    //     photoURL: user.img === null ? "" : user.img,
    //   },
    //   [key + ".date"]: serverTimestamp(),
    // });
  }
  catch (e) {
    console.error(e);
    return null;
  }
  };


  const sendMessage = async (data, message) => {

    try {
      await updateDoc(doc(db, 'chats', data.chatID), {
        message: arrayUnion({
          text: message,
          sendersID: currentUser.uid,
          date: Timestamp.now()
        })
      })
      console.log("New message added:");
    } catch (e) {
      console.error("Error sending message:", e);
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
    sendMessage,
    findUserByName,
    selectUser,
    userState,
    dispatch
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
