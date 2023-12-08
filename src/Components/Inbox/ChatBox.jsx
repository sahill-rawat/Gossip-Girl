import React, { useEffect } from 'react';
import Chat from './Chat';
import dp from "../../images/dp.png";
import MesageSender from './MesageSender';
import { RiArrowGoBackFill } from "react-icons/ri";
import { Heading, HStack, VStack, Image, Button, Text } from '@chakra-ui/react'
import { useStore } from '../../Store';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase';


const ChatBox = ({flexR, setDisplay}) => {

  const {userState, dispatch} = useStore();
  const [messages, setMessages] = useState([]);
  const display = (flexR === 1) ? "flex" : flexR === 0 ? "none" : "flex";
  const handleClick = ()  => { 
    setDisplay(prev=>( (flexR <= 1 && prev === 1) ? 0 : 1));
    dispatch({type:'RESET_USER_STATE'});
  }

  useEffect(()=>{
    if (userState?.chatID) {
      const unsubscribe = onSnapshot(doc(db, 'chats', userState.chatID), (snap) => {
        snap.exists() && setMessages(snap.data());
      });
      return () => unsubscribe();
    }
  },[userState?.chatID]);

  return (
  
    <VStack gap='0' display={display} color="white" flex={flexR} h='100%' bg='black'>
      { userState?.user ?
      <>
      <HStack border='none' borderLeft='1px solid white' borderBottom='1px solid white' h='10%' w='100%' pl='4' pr='4' justify={'space-between'}>
            <HStack h='100%' w='80%' justify={'left'}>
                <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={userState?.user?.photoURL === null ? dp : userState?.user?.photoURL}/>
                <Heading fontSize={'large'}>{userState?.user?.displayName}</Heading>
            </HStack>
            <Button
                variant='unstyled'
                h="5vh" w="5vh"
                borderRadius={"50%"}
                display={"flex"}
                align="center"
                onClick={handleClick}
              >
                <RiArrowGoBackFill size="3vh" />
              </Button>
        </HStack>
        <Chat messages={messages?.message}/>
        <MesageSender/>
        </>
        :
        <VStack h='100%' pt='20%' >
          <Heading>Your Messages</Heading>
          <Text fontWeight="medium">
            Send private gossips to your gossip girl and talk to your friends!
          </Text>
        </VStack>
      }
    </VStack>
  )
}

export default ChatBox
