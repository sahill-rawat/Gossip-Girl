import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import img from '../../images/img.jpg';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useStore } from '../../Store';
import { useAuth } from '../../Auth';

const Chat = ({messages}) => {

    const {userState} = useStore();
    const {currentUser} = useAuth();
    const scrollRef = useRef();
    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({behaviour: "smooth"});
        }
      });

      console.log(messages);

  return (
    <VStack css={{"&::-webkit-scrollbar":{display: 'hidden', scrollBehavior:'smooth'}}} overflowY={'auto'} p='4' border='none' borderLeft='1px solid white' h='80%' width='100%'>
        {
            messages && messages.length &&
        messages.map((message, index)=>(
        <HStack key={index} align={'flex-start'} justifyContent={message?.sendersID === currentUser?.uid ? "right" : "left"} spacing="2" p="1" w="100%">
            {message?.sendersID !== currentUser?.uid && <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>}
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>{message.text}</Text></Box>
            {message?.sendersID === currentUser?.uid && <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>}
        </HStack>
        ))}
        <div ref={scrollRef}></div>
    </VStack>
  )
}

export default Chat
