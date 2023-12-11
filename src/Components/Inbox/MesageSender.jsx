import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { Button, HStack, Input } from '@chakra-ui/react'
import { useStore } from '../../Store';

const MesageSender = () => {

  const {userState,sendMessage} = useStore();
  const [text, setText] = useState("");

  return (
    <HStack bg='whiteAlpha.800' h='10%' w='100%' p='1'>
        <form
            onSubmit={(e)=> {
              e.preventDefault(); 
              if(text.trim() !== "")  sendMessage(userState, text); 
              setText(""); 
            }}
            style={{width: '100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between' }} >
            <Input
            h="100%"
            m="0"
            name="message"
            overflowY="auto"
            alignItems="left"
            color="black"
            w="74%"
            border="0"
            onChange={(e) => setText(e.target.value)}
            value={text}
            />
            <Button
            bg="black"
            color='whiteAlpha.900'
            fontWeight="black"
            w={["25%","20%"]}
            h="98%"
            type='submit'
            >
            <FaPaperPlane/>
            </Button>
        </form>
    </HStack>
  )
}

export default MesageSender
