import React from 'react'
import Friends from './Friends'
import SearchBar from './SearchBar'
import { Heading, HStack, Image, VStack } from '@chakra-ui/react'
import { useAuth } from '../../Auth';
import { useNavigate } from 'react-router-dom';

const SideBar = ({flexR,setDisplay}) => {

  const navigate = useNavigate();
  const {currentUser} = useAuth();
  const getFirstName = (name) => {
    let firstName = "";
    for (let i=0; i<name.length; i++) {
      if (name[i] === ' ') return firstName;
      firstName += name[i];
    }
    return firstName;
  }
  const display = (flexR === 1) ? "flex" : flexR === 0 ? "none" : "flex";
  const handleClick = () => setDisplay(prev=>( (flexR <= 1 && prev === 1) ? 0 : 1));

  return (
    <VStack display={display} color="white" flex={flexR} h='100%' bg='black'>
        <HStack border='none' borderBottom='1px solid white' h='10%' w='100%' pl='4' pr='4' justify={'space-between'}>
            <Heading fontSize={'md'}>Message</Heading>
            <HStack h='100%' w='80%' justify={'right'} onClick={()=>navigate('/profile')}>
                <Image h='6vh' w='6vh' borderRadius='50%' objectFit='cover' src={currentUser.photoURL}/>
                <Heading fontSize={'large'}>{getFirstName(currentUser?.displayName)}</Heading>
            </HStack>
        </HStack>
        <SearchBar setDisplay={setDisplay} />
        <Friends setDisplay={setDisplay}/>
    </VStack>
  )
}

export default SideBar