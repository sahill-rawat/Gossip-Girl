import React, {useEffect, useState} from 'react';
import { Text, HStack, Input, VStack, Image } from '@chakra-ui/react';
import { useStore } from '../../Store';
import img from '../../images/img.jpg';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState(""); 
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const { findUserByName, selectUser } = useStore();

  useEffect(()=> {
    console.log(user);
  }, [user]);

  const handleKey = async (e) => { 
    if (e.code === "Enter") {
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

  const handleSelect = async () => {
    await selectUser(user);
    setUser(null);
    setSearchQuery("");
  };

  return (
    <VStack w='98%'>
        <Input placeholder='Find a user' type="text" onKeyDown={handleKey} value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />

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
