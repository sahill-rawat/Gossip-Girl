import { Heading, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import Friends from './Friends'
import SearchBar from './SearchBar'
import img from '../../images/img.jpg';

const SideBar = ({flexR,setDisplay}) => {
  const display = (flexR >= 1) ? "flex" : "none";

  return (
    <VStack display={display} color="white" flex={flexR} h='100%' bg='black'>
        <HStack border='none' borderBottom='1px solid white' h='10%' w='100%' pl='4' pr='4' justify={'space-between'}>
            <Heading fontSize={'md'}>Message</Heading>
            <HStack h='100%' w='80%' justify={'right'}>
                <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={img}/>
                <Heading fontSize={'large'}>Sahil</Heading>
            </HStack>
        </HStack>
        <SearchBar/>
        <Friends setDisplay={setDisplay}/>
    </VStack>
  )
}

export default SideBar