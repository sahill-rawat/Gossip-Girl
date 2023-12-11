import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import MetaData from './Metadata';
  import { useAuth } from '../Auth.js';
  import { toast } from 'react-hot-toast';
  import React, { useEffect, useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  
  const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login, resetPassword } = useAuth();

    const handleForgetPassword = (e) => {
      e.preventDefault();
      if (email.trim() === "")  toast.error('Enter the email first');
      else {
        resetPassword(email);
        toast.success("Reset Email sent. Check your mail!");
      }
    }
  
  
    const loginSubmit = (e) => {
      e.preventDefault();
      login(email, password).then(()=>{
        navigate('/');
        toast.success('Logged In successfully');
      }).catch((error) => {
        toast.error(error.message);
      })
    };
  
  
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
  
    return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <MetaData title='Login'/>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>LogIn</Heading>
  
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'black'}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'black'}
            onChange={(e)=>setPassword(e.target.value)}
          />
  
          <Button variant={'link'} alignSelf={'flex-end'} onClick={handleForgetPassword}>
            <Link>Forget Password?</Link>
          </Button>
  
          <Button bg='black' color='white' type={'submit'} onClick={loginSubmit} >
            Log In
          </Button>
  
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} color='black'>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
    );
  };
  
  export default Login;