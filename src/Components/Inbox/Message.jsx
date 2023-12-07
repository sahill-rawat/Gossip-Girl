import { HStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react';
import SideBar from './SideBar';
import ChatBox from './ChatBox';
import { useState } from 'react';

const Message = () => {

    const [display, setDisplay] = useState(1); 
    const sidebarFlex = useBreakpointValue({ base: display, sm:1, md: 1 });
    const chatboxFlex = useBreakpointValue({ base: (display === 0 ? 1 : 0), sm:2, md: 2 });

    console.log(!display);
  return (
    <HStack h='90vh' w='100vw' backgroundColor='black' gap={0}>
        <SideBar flexR={sidebarFlex} setDisplay={setDisplay} />
        <ChatBox flexR={chatboxFlex} setDisplay={setDisplay} />
    </HStack>
  )
}

export default Message