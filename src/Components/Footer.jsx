import {
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoArrowUpCircle } from "react-icons/io5";
import React from "react";

const Footer = () => {
  return (
    <VStack bg='whiteAlpha.900' h='20vh' w='100vw' justify={'center'}>

      <HStack h='10vh' p='4' w={'100vw'} align='center' justify={'space-between'}>
      <Text fontWeight='black' textAlign='center'>
        You know
        you love me.<br/> XOXO <br/> Gossip Girl
      </Text>
      <Button display={'flex'} h='10vh' w='10vh' borderRadius={'50%'} variant='unstyled' bg='none' onClick={()=>window.scrollTo(0, 0)}><IoArrowUpCircle size='10vh' /></Button>
      </HStack>
    </VStack>
  );
};

export default Footer;
