import {
  Button,
  Heading,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useAuth } from '../Auth';
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(window.innerWidth);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(()=>{
      navigate('/');
    })
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HStack justifyContent={"space-between"} h="10vh" pl='2'>
      <HStack >
        <Heading onClick={()=>navigate('/')}>GossipGirl</Heading>
      </HStack>
      {width >= 450 ? (
        currentUser ? (
          <HStack>
            <Link to={"/"}>
              <Button variant={"ghost"}>Home</Button>
            </Link>
            <Link to={"/message"}>
              <Button variant={"ghost"}>Message</Button>
            </Link>
            <Link to="/profile">
              <Button variant={"ghost"}>Me</Button>
            </Link>
            <Link to={"/"}>
                <Button
                  onClick={() => {
                    onClose();
                    handleLogout();
                    navigate("/");
                    toast.success("LoggedOut Successfully!");
                  }}
                  bg='#FBCD44'
                >
                  Logout
                </Button>
                </Link>
          </HStack>
        ) : (
          <HStack mr='1'>
            <Link to={"/"}>
              <Button variant={"ghost"}>Home</Button>
            </Link>
            <Link to={"/login"}>
              <Button bg='black' color='white' variant={"ghost"}>Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button bg='black' color='white' variant={"ghost"}>Signup</Button>
            </Link>
          </HStack>
        )
      ) : (
        <>
          <Button
            p="0"
            w="10"
            h="10"
            borderRadius={"full"}
            position={"absolute"}
            top={4}
            right={4}
            bg="black"
            color={"white"}
            onClick={onOpen}
            zIndex="100"
          >
            <BiMenuAltLeft size={"20"} />
          </Button>
          <Drawer zIndex="1000" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader color="#FBCD44" bg="white">
              GossipGirl
              </DrawerHeader>
              <DrawerBody bg="white">
                <HStack width={"full"} justifyContent="space-between">
                {
        currentUser ? (
          <VStack>
            <Link to={"/"}>
              <Button onClick={onClose} variant={"ghost"}>Home</Button>
            </Link>
            <Link to={"/message"}>
              <Button onClick={onClose} variant={"ghost"}>Message</Button>
            </Link>
            <Link to="/profile">
              <Button onClick={onClose} variant={"ghost"}>Me</Button>
            </Link>
            <Link to={"/"}>
                <Button
                  onClick={() => {
                    onClose();
                    handleLogout();
                    navigate("/");
                    toast.success("LoggedOut Successfully!");
                  }}
                  bg='#FBCD44'
                >
                  Logout
                </Button>
                </Link>
          </VStack>
        ) : (
          <VStack>
            <Link to={"/"}>
              <Button onClick={onClose} variant={"ghost"}>Home</Button>
            </Link>
            <Link to={"/login"}>
              <Button onClick={onClose} bg='black' color='white' variant={"ghost"}>Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button onClick={onClose} bg='black' color='white' variant={"ghost"}>Signup</Button>
            </Link>
          </VStack>
        )
        }
                </HStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>{" "}
        </>
      )}
    </HStack>
  );
};

export default Header;
