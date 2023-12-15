import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  VStack,
  Image,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useStore } from "../../Store";

const AllUsersModal = ({ users, isOpen, onOpen, onClose }) => {
  const { selectUser } = useStore();

  const handleSelect = async (user) => {
    await selectUser(user);
  };

  console.log(users);
  users.map((user) => {
    console.log(user.displayName);
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Found your friend?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack h="30vh">
              {users &&
                users.map((user, index) => (
                  <HStack
                    overflowY="auto"
                    css={{
                      "&::-webkit-scrollbar": {
                        display: "none",
                        scrollBehavior: "smooth",
                      },
                    }}
                    cursor="pointer"
                    borderRadius="5px"
                    align="center"
                    justify="space-evenly"
                    bg="blackAlpha.900"
                    color="white"
                    key={index}
                    onClick={() => {
                        handleSelect(user);
                    }}
                    h="10vh"
                    w="100%"
                  >
                    <HStack justify="center" flex="1">
                      <Image
                        h="5vh"
                        w="5vh"
                        borderRadius="50%"
                        objectFit="cover"
                        src={user.photoURL}
                      />
                    </HStack>
                    <Box flex="5">
                      <Text fontWeight="black">{user.displayName}</Text>
                    </Box>
                  </HStack>
                ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button bg='blackAlpha.900' color='white'  mr={2} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AllUsersModal;
