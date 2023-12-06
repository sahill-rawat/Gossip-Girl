import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';
import { useStore } from '../Store';

const UserFinder = ({setFriend}) => {

    const [email, setEmail] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { findUserByEmail } = useStore();

    const handleSearch = () => {
        const uid = findUserByEmail(email).then((data)=> {
            console.log(data);
            if (data !== null)   setFriend(data);
            else    alert('User not found.');
        })
    }

  return (
    <>
      <Button borderRadius={"50%"} onClick={onOpen}>+</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)} placeholder='xyz.@provider.com' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=> {handleSearch(); onClose(); }} >
              Search
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserFinder;