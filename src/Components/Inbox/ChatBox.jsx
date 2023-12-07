import { Heading, HStack, VStack, Image, Button } from '@chakra-ui/react'
import React from 'react';
import img from '../../images/img.jpg'
import { RiArrowGoBackFill } from "react-icons/ri";
import Chat from './Chat';
import MesageSender from './MesageSender';

const ChatBox = ({flexR, setDisplay}) => {

  const display = (flexR >= 1) ? "flex" : "none";
  const handleClick = () => setDisplay(prev=>(prev === 1 ? 0 : 1) );

  return (
    <VStack gap='0' display={display} color="white" flex={flexR} h='100%' bg='black'>
      <HStack border='none' borderLeft='1px solid white' borderBottom='1px solid white' h='10%' w='100%' pl='4' pr='4' justify={'space-between'}>
            <HStack h='100%' w='80%' justify={'left'}>
                <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
                <Heading fontSize={'large'}>Tenzin</Heading>
            </HStack>
            <Button
                variant='unstyled'
                h="5vh" w="5vh"
                borderRadius={"50%"}
                display={"flex"}
                align="center"
                onClick={handleClick}
              >
                <RiArrowGoBackFill size="5vh" />
              </Button>
        </HStack>
        <Chat/>
        <MesageSender/>
    </VStack>
  )
}

export default ChatBox
