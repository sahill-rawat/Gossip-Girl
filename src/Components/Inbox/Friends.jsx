import { db } from "../../firebase";
import { useAuth } from "../../Auth";
import img from "../../images/img.jpg";
import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useStore } from "../../Store";

const Friends = ({ setDisplay }) => {

const { dispatch } = useStore();
  const { currentUser } = useAuth();
  const handleClick = () => setDisplay((prev) => (prev === 1 ? 0 : 1));
  const [chats, setChats] = useState([]);

  const handleUserChange = (u)=>  {
    dispatch({type:"CHANGE_USER", payload:u})
  }
  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc) => {
            const data = doc.data();
            console.log(data);
            if (data)   setChats(Object.entries(data));
        }
      );

      return () => unsubscribe();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  chats && console.log(chats);

  return (
    <VStack
      w="100%"
      h="80%"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": { display: "none", scrollBehavior: "smooth" },
      }}
    >
      {chats &&
        chats
          ?.sort((a, b) => b[1].data - a[1].data)
          .map((chat) => (
            <HStack
              key={chat[0]}
              onClick={()=>{handleUserChange(chat[1].userInfo); handleClick();}}
              pl="1"
              pr="1"
              h="12%"
              w="100%"
              justifyContent="flex-start"
            >
              <VStack  h="100%" flex="1" align="center">
                <Image
                  m="auto"
                  h="5vh"
                  w="5vh"
                  borderRadius="50%"
                  objectFit="cover"
                  src={
                    chat[1].userInfo.photoURL === ""
                      ? { img }
                      : chat[1].userInfo.photoURL
                  }
                />
              </VStack>
              <VStack
                flex="5"
                pl="2"
                pr="2"
                gap="0"
                h="100%"
                overflow="hidden"
                align="flex-start"
                justifyContent="flex-start"
              >
                <Text fontWeight="black">{chat[1].userInfo.displayName}</Text>
                <Text fontWeight="lighter" lineHeight="2" overflow="hidden">
                  {chat[1].lastMessage?.text}
                </Text>
              </VStack>
            </HStack>
          ))}
    </VStack>
  );
};

export default Friends;
