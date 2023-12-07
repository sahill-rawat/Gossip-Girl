import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../Auth";
import { RiArrowGoBackFill } from "react-icons/ri";
import UserFinder from "./UserFinder";
import { useStore } from "../Store";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";

const Message = () => {

  const [key, setKey] = useState(null); 
  const chatBoxRef = useRef();
  const { currentUser } = useAuth();
  const { sendMessage, getMessage, findFriends } = useStore();
  const [text, setText] = useState("");
  const [friend, setFriend] = useState(null);
  const [display, setDisplay] = useState(true);
  const [chat, setChat] = useState(null);
  const [friends, setFriends] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width <= 450 && !display) {
      window.scrollTo(0, window.innerHeight);
    } else if (display) {
      window.scrollTo(0, 0);
    }
  }, [display]);

  useEffect(() => {
      if (width <= 450) {
        setDisplay((prev) => !prev);
      }
      if (friend !== null) {
        const key = [friend.uid, currentUser.uid].sort().join("");
        setKey(key);
       getMessage(friend.uid).then((data)=> {
        if (data)  { 
          // console.log(data);
          data.sort((a, b)=>a.time-b.time);
          setChat(data);
        }
        else  console.log(data);
       });
      }
      
  }, [friend]);

  useEffect(()=> {
    findFriends(currentUser.uid).then((data)=>setFriends(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(()=>{
    if (key) {
      const q = query(collection(db, "chats", key, "chat"), orderBy('time')); 
    const unsubscribe = onSnapshot(q, (snap)=>{
      const chats = snap.docs.map((item)=>item.data()).sort((a,b)=>a.time-b.time);
      setChat(chats);
    })
    return ()=> {
      unsubscribe();
    }
  }
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollIntoView({behaviour: "smooth"});
    }
  }, [chat]);

  return (
    <HStack w="100vw" h="90vh" maxH="90vh" spacing={0}>
      <VStack
      css={{"&::-webkit-scrollbar":{display:"none"}}}
        overflowY="auto"
        h="100%"
        w={width <= 450 ? "100vw" : "35vw"}
        bg="blackAlpha.900"
        textAlign="left"
        display={width <= 450 ? (display ? "flex" : "none") : "flex"}
      >
        <HStack
          justify={"space-between"}
          w="100%"
          minH="7vh"
          pl="4"
          pr="4"
          bg="blackAlpha.900"
        >
          {" "}
          <Text fontSize="larger" color="white" fontWeight="extrabold">
            {" "}
            Messages{" "}
          </Text>{" "}
          <UserFinder setFriend={setFriend} />
        </HStack>
        {friends && friends.map((fren, index) => (
          <HStack key={index} w="95%" h="5vh" mb="2" justify="space-between">
            <Box h="5vh" w="5vh" bg="white" borderRadius="50%"></Box>
            <Button
              bg="white"
              onClick={() => {
                setFriend(fren);
              }}
              w="85%"
              justifyContent="flex-start"
            >
              {fren.name}
            </Button>
          </HStack>
        ))}
      </VStack>

      <VStack
        justifyContent="flex-start"
        gap="0"
        h="90vh"
        maxH="90vh"
        w="100vw"
        textAlign="left"
        display={width <= 450 ? (!display ? "flex" : "none") : "flex"}
      >
        {friend !== null ? (
          <>
            <HStack
              w="100%"
              h="8vh"
              maxH="8vh"
              pl="4"
              pr="4"
              bg="blackAlpha.900"
              justify={"space-between"}
            >
              {" "}
              <Text fontSize="larger" color="white" fontWeight="extrabold">
                {" "}
                {friend ? friend.name : ""}{" "}
              </Text>{" "}
              <Button
                variant="unstyled"
                bg="white"
                h="5vh"
                w="5vh"
                borderRadius={"50%"}
                display={"flex"}
                align="center"
                onClick={() => {
                  setFriend(null);
                }}
              >
                <RiArrowGoBackFill size="4vh" />
              </Button>
            </HStack>
            <VStack css={{"&::-webkit-scrollbar":{display:"none"}}} overflowY="auto" h="72vh" w='100%' p='2' >
              {chat && chat.map((value, index) => (
                <HStack
                  key={index}
                  justifyContent={
                    currentUser.uid === value.sender ? "right" : "left"
                  }
                  spacing="2"
                  p="1"
                  w="100%"
                >
                  {currentUser.uid !== value.sender && (
                    <Box h="5vh" w="5vh" bg="black" borderRadius="50%"></Box>
                  )}

                  <Box
                    maxW={"55%"}
                    bg="blackAlpha.900"
                    color="white"
                    borderRadius="15px"
                    p="2"
                  >
                    <Text>{value.text}</Text>
                  </Box>

                  {currentUser.uid === value.sender && (
                    <Box h="5vh" w="5vh" bg="black" borderRadius="50%"></Box>
                  )}
                </HStack>
              ))}
              <div ref={chatBoxRef}></div>
            </VStack>
            
            <HStack h={"10vh"} gap="0.5" w="100%">
              <form onSubmit={(e)=> {
                e.preventDefault();
                sendMessage(text, friend.uid); 
                setText("");  
              }}
              style={{width: '100%'}} >
              <Textarea
                h="100%"
                m="0"
                name="message"
                overflowY="auto"
                alignItems="left"
                bg="blackAlpha.900"
                color="white"
                w="79%"
                border="0"
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></Textarea>
              <Button
                border={"5px solid black"}
                bg="white"
                fontWeight="black"
                w="20%"
                h="10vh"
                type='submit'
              >
                Send
              </Button>
              </form>
            </HStack>
          </>
        ) : (
          <VStack
            borderLeft="1px solid white"
            bg="blackAlpha.900"
            color="white"
            h="90vh"
            pt="30vh"
            w="70vw"
          >
            <Heading>Your Messages</Heading>
            <Text fontWeight="medium">
              Send private gossips to your gossip girl and talk to your friends!
            </Text>
          </VStack>
        )}
      </VStack>
    </HStack>
  );
};

export default Message;
