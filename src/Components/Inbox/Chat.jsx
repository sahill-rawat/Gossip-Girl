import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import img from '../../images/img.jpg';

const Chat = () => {
    const scrollRef = useRef();
    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({behaviour: "smooth"});
        }
      });

  return (
    <VStack css={{"&::-webkit-scrollbar":{display: 'hidden', scrollBehavior:'smooth'}}} overflowY={'auto'} p='4' border='none' borderLeft='1px solid white' h='80%' width='100%'>
        <HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack>
        <HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack><HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack><HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack><HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack><HStack align={'flex-start'} justifyContent='left' spacing="2" p="1" w="100%">
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
        </HStack>
        <HStack align={'flex-start'} justifyContent='right' spacing="2" p="1" w="100%">
            <Box w={['75%', '60%']} bg='whiteAlpha.800' borderRadius='12px' color='black' p='2' textAlign='left' ><Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quas voluptate error itaque, quos eveniet possimus voluptatem laboriosam assumenda ut nihil unde dicta numquam modi eum debitis consequatur nesciunt officia.</Text></Box>
            <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
        </HStack>
        <div ref={scrollRef}></div>
    </VStack>
  )
}

export default Chat
