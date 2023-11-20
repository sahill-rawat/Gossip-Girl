import {
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack bg='blackAlpha.900'>
      <HStack h='5vh' w='100vw' bg='white'></HStack>
      <Text color='white' fontWeight='black' textAlign='center'>
        Gossip Girl here, <br/> your one and only <br/>source into the scandalous lives of <br/>
        Manhattan's elite.<br/> Who am I? <br/>That's one secret I'll never tell. <br/>You know
        you love me.<br/> XOXO <br/> Gossip Girl
      </Text>
      <HStack h='5vh' w='100vw' bg='white'></HStack>
    </VStack>
  );
};

export default Footer;
