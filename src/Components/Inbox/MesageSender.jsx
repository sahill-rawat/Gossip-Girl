import { Button, HStack, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react';

const MesageSender = () => {

    const [text, setText] = useState("");

  return (
    <HStack bg='whiteAlpha.800' h='10%' w='100%'>
        <form 
            onSubmit={(e)=> { e.preventDefault(); setText(""); }}
            style={{width: '100%', height:'100%'}} >
            <Input
            h="100%"
            m="0"
            name="message"
            overflowY="auto"
            alignItems="left"
            color="white"
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
            Send
            </Button>
        </form>
    </HStack>
  )
}

export default MesageSender
