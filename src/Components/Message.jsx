import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useAuth } from "../Auth";

const Message = () => {
  const { currentUser } = useAuth();
  const [friend, setFriend] = useState("");
  const [text, setText] = useState("");

  console.log(currentUser);

  const options = ["Sahil", "Rawat", "David", "Tenzin"];
  const messages = [
    { name: "Sahil", text: "Hii" },
    { name: "Tenzin", text: "Hello" },
  ];
  return (
    <HStack spacing={0}>
      <VStack
        overflowY="auto"
        h="90vh"
        maxH="90vh"
        w="30vw"
        bg="blackAlpha.900"
        textAlign="left"
      >
        <HStack w="100%" minH="7vh" pl="4" bg="blackAlpha.900">
          {" "}
          <Text fontSize="larger" color="white" fontWeight="extrabold">
            {" "}
            Messages{" "}
          </Text>{" "}
        </HStack>
        {options.map((name, index) => (
          <HStack key={index} w="95%" h="5vh" mb="2">
            <Button
              bg="white"
              onClick={() => setFriend(name)}
              w="30vw"
              justifyContent="flex-start"
            >
              {name}
            </Button>
          </HStack>
        ))}
      </VStack>
      <VStack h="90vh" w="70vw" textAlign="left">
        {friend !== "" ? (
          <>
            <HStack w="100%" h="7vh" pl="4" bg="blackAlpha.900">
              {" "}
              <Text fontSize="larger" color="white" fontWeight="extrabold">
                {" "}
                {friend}{" "}
              </Text>{" "}
            </HStack>
            <VStack overflowY="auto" h="73vh" maxH="80vh" w="70vw">
              {messages.map((value) => (
                <HStack
                  justifyContent={
                    currentUser.displayName === value.name ? "right" : "left"
                  }
                  spacing="2"
                  p="2"
                  w="100%"
                >
                  <Box bg="blackAlpha.900" color="white" borderRadius="35%" p="3">
                    <Text>{value.text}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
            <HStack
              spacing="0"
              borderLeft="1px solid white"
              w="100%"
              // h="4vh"
            >
              <Textarea
              // height={'3vh'}
              overflowY="auto"
                alignItems="left"
                bg="blackAlpha.900"
                color="white"
                w="80%"
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></Textarea>
              <Button bg="white" fontWeight="black" w="20%" h="100%"  >
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
