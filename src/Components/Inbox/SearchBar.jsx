import React, {useEffect, useState} from 'react';
import { Text, HStack, Input, VStack, Image, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  useDisclosure} from '@chakra-ui/react';
import { useStore } from '../../Store';
import AllUsersModal from './AllUsersModal';
import { GoSearch } from "react-icons/go";

const SearchBar = ({setDisplay}) => {

  const [searchQuery, setSearchQuery] = useState(""); 
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const { findUserByName, selectUser, getAllUsers } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(()=> {
    console.log(user);
  }, [user]);

  const handleKey = async (e, pass) => { 
    if (e.code === "Enter" || pass) {
      console.log(searchQuery.trim());
      if (searchQuery.trim() === "") {
        console.log('as');
        setUser(null);
        return;
      }
      const userData = await findUserByName(searchQuery.trim());
      if (userData !== null)  setUser(userData);
      else  {
        setUser(null); 
        alert('No User Found');
      }
    }
  }; 

  user && console.log(user);


  const handleAllUser = async() => {
    const res = await getAllUsers();
    setAllUsers(res);
    onOpen();
  }

  const handleSelect = async () => {
    await selectUser(user);
    setUser(null);
    setSearchQuery("");
  };

  return (
    <VStack w='98%'>
      <HStack w='100%'>
        <Input w='90%' placeholder='Find a user by email' type="text" onKeyDown={(e)=>handleKey(e, false)} value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        <Button onClick={(e)=>handleKey(e, true)}><GoSearch/> </Button>
        </HStack>
        <Button w='100%' onClick={handleAllUser}>See All Users</Button>
        {allUsers && <AllUsersModal users={allUsers} setDisplay={setDisplay} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
}
        { user &&
        (<HStack onClick={handleSelect} pl='1' pr='1' h='8vh' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={user.photoURL} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>{user.displayName}</Text>
            </VStack>
        </HStack>) }
    </VStack>
  )
}

export default SearchBar
