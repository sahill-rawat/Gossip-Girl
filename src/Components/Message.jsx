import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../Auth";
import { RiArrowGoBackFill } from "react-icons/ri";

const Message = () => {
  const [display, setDisplay] = useState(true);
  const { currentUser } = useAuth();
  const [friend, setFriend] = useState("");
  const [text, setText] = useState("");
  const options = ["Sahil", "Rawat", "David", "Tenzin"];
  const messages = [
    {
      name: "Sahil",
      text: "Hii Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et sed ducimus maxime error assumenda perspiciatis quis inventore, vel nostrum totam animi quas laborum molestiae, placeat, vitae quisquam ab! Pariatur!",
    },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width <= 450 && !display) {
      window.scrollTo(0, window.innerHeight);
    }
    else if (display) {
      window.scrollTo(0, 0);
    }
  }, [display]);

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
    <HStack w="100vw" h="90vh" maxH="90vh" spacing={0}>
      <VStack
        overflowY="auto"
        h="100%"
        w={width <= 450 ? "100vw" : "35vw"}
        bg="blackAlpha.900"
        textAlign="left"
        display={width <= 450 ? (display ? "flex" : "none") : "flex"}
      >
        <HStack w="100%" minH="7vh" pl="4" bg="blackAlpha.900">
          {" "}
          <Text fontSize="larger" color="white" fontWeight="extrabold">
            {" "}
            Messages{" "}
          </Text>{" "}
        </HStack>
        {options.map((name, index) => (
          <HStack key={index} w="95%" h="5vh" mb="2" justify="space-between">
            <Box h="5vh" w="5vh" bg="white" borderRadius="50%"></Box>
            <Button
              bg="white"
              onClick={() => {
                setFriend(name);
                if (width <= 450) {
                  setDisplay((prev) => !prev);
                }
              }}
              w="85%"
              justifyContent="flex-start"
            >
              {name}
            </Button>
          </HStack>
        ))}
      </VStack>

      <VStack
        justifyContent='flex-start'
        gap='0'
        h='90vh'
        maxH="90vh"
        w="100vw"
        textAlign="left"
        display={width <= 450 ? (!display ? "flex" : "none") : "flex"}
      >
        {friend !== "" ? (
          <>
            <HStack
              w="100%"
              h='8vh'
              maxH="8vh"
              pl="4"
              pr="4"
              bg="blackAlpha.900"
              justify={"space-between"}
            >
              {" "}
              <Text fontSize="larger" color="white" fontWeight="extrabold">
                {" "}
                {friend}{" "}
              </Text>{" "}
              <Button variant='unstyled' bg='white' 
                h='5vh'
                w='5vh'
                borderRadius={'50%'}
                display={'flex'}
                align='center'
                onClick={() => {
                  setFriend("");
                  setDisplay((prev) => !prev);
                }}><RiArrowGoBackFill size='4vh' /></Button>
              
            </HStack>
            <VStack overflowY="auto" h='72vh'>
              {messages.map((value, index) => (
                <HStack
                  key={index}
                  justifyContent={
                    currentUser.displayName === value.name ? "right" : "left"
                  }
                  spacing="2"
                  p="1"
                  w="100%"
                >
                  {currentUser.displayName !== value.name && (
                    <Box h="5vh" w="5vh" bg="black" borderRadius="50%"></Box>
                  )}

                  <Box
                    maxW={"55%"}
                    bg="blackAlpha.900"
                    color="white"
                    borderRadius="15px"
                    p="2"
                  >
                    <Text>{value.text}</Text>
                  </Box>

                  {currentUser.displayName === value.name && (
                    <Box h="5vh" w="5vh" bg="black" borderRadius="50%"></Box>
                  )}
                </HStack>
              ))}
            </VStack>
            <HStack h={"10vh"} gap='0.5' w="100%">
              <Textarea
                h='100%'
                m='0'
                name="message"
                overflowY="auto"
                alignItems="left"
                bg="blackAlpha.900"
                color="white"
                w="79%"
                border='0'
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></Textarea>
              <Button
                border={"5px solid black"}
                bg="white"
                fontWeight="black"
                w="20%"
                h="10vh"
              >
                Send
              </Button>
            </HStack>
          </>
        ) : (
          <VStack
            borderLeft="1px solid white"
            bg="blackAlpha.900"
            color="white"
            h="90vh"
            pt="30vh"
            w="70vw"
          >
            <Heading>Your Messages</Heading>
            <Text fontWeight="medium">
              Send private gossips to your gossip girl and talk to your friends!
            </Text>
          </VStack>
        )}
      </VStack>
    </HStack>
  );
};

export default Message;
