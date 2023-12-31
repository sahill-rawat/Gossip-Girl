import {
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoArrowUpCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <VStack bg='whiteAlpha.900' h='20vh' w='100vw' justify={'center'}>

      <HStack h='10vh' p='4' w={'100vw'} align='center' justify={'space-between'}>
      <Text fontWeight='black' textAlign='center'>
        You know
        you love me.<br/> XOXO <br/> Gossip Girl
      </Text>
      <Button display={'flex'} h='10vh' w='10vh' borderRadius={'50%'} variant='unstyled' bg='none' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><IoArrowUpCircle size='10vh' /></Button>
      </HStack>
    </VStack>
  );
};

export default Footer;
