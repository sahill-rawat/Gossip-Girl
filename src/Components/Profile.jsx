import React from 'react';
import { useAuth } from '../Auth';
import MetaData from './Metadata';
import { Link } from 'react-router-dom';
import { Button, Heading, HStack, Image, VStack } from '@chakra-ui/react';

const Profile = () => {

    const {currentUser} = useAuth();

  return (
    <VStack justify='center' bg='blackAlpha.900' color='white' h='90vh' w='100vw'>
        <MetaData title={currentUser.displayName} />
        <Image h='20vh' w='20vh' borderRadius='50%' objectFit='cover' src={currentUser.photoURL} />
        <Heading>{currentUser.displayName}</Heading>
        <HStack h='10vh' align={'center'} justify='center'>
            <Link to='/'><Button>Home</Button></Link>
            <Link to='/message'><Button>Inbox</Button></Link>
        </HStack>
    </VStack>
  )
}

export default Profile