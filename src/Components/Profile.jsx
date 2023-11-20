import { Button, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth';

const Profile = () => {

    const {currentUser} = useAuth();

  return (
    <VStack justify='center' bg='blackAlpha.900' color='white' h='90vh' w='100vw'>
        <Heading>{currentUser.displayName}</Heading>
        <HStack>
            <Link to='/'><Button>Home</Button></Link>
            <Link to='/message'><Button>Inbox</Button></Link>
        </HStack>
    </VStack>
  )
}

export default Profile