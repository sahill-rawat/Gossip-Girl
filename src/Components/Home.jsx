import Footer from "./Footer";
import bg from "../images/bg.jpg";
import { useAuth } from "../Auth";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Image,
  Input,
  Stack,
  useDisclosure,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import MetaData from "./Metadata";
import { useStore } from "../Store";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Home = () => {
  const { currentUser } = useAuth();
  const {post} = useStore();
  const [width, setWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  const handlesPost = async (e) => {
    if ((text === null || text.trim() === "") && file === null) return;
    const res = await post(text, file);
    setFile(null);
    setText(null);
    console.log(res);
  };

  const [posts, setPosts] = useState([
    {
      image: "https://64.media.tumblr.com/cba11899c60e343c63ea68fb495c0dd4/5dd5a93c6df071c3-97/s1280x1920/3f6af39620169cdfe0b3498150d7aca63dc9110a.png",
      text: "spotted : Georgina in a coffee shop with Serena Van Der Woodsen. What are this two girls doing together? Is Dan aware that his wife is with his ex, and formerly best friend?",
    },
    {
      image: "https://64.media.tumblr.com/890e666053c95b0552df4f0bd70feb40/1e882090d32c9081-5a/s1280x1920/a6b021b3c07a9de98816833011b0cf073730201d.png",
      text: "serena van der woodsen having an unsual fight (who am i kidding) with her bestie blair waldorf. i thought you only fought tuesdays and saturdays, let’s add a friday too.",
    },
    {
      image: "https://64.media.tumblr.com/e5d9c57fe76deebe064b8a9e08105cf1/a784be97ca02202c-73/s500x750/5c6f76ad0a2dffc0ed10e171308774dfb81b58b2.png",
      text: "Lonely Boy headed Upper East, looking formal with Nate Archibald, have a new bromance just started? I think so. But what will Serena Van der Woodsen think about this? Her two options being friends makes it even more hard to choose. Dan or Nate? What a hard decision!",
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getPosts = () => {
      const unsubscribe = onSnapshot(
        doc(db, "posts", "all"),
        (doc) => {
            const data = doc.data();
            console.log(data);
            if (data)   setPosts(data.posts);
        }
      );

      return () => unsubscribe();
    };
    getPosts();
  }, []);

  // const posts = [
  //   {
  //     link: "https://64.media.tumblr.com/cba11899c60e343c63ea68fb495c0dd4/5dd5a93c6df071c3-97/s1280x1920/3f6af39620169cdfe0b3498150d7aca63dc9110a.png",
  //     text: "spotted : Georgina in a coffee shop with Serena Van Der Woodsen. What are this two girls doing together? Is Dan aware that his wife is with his ex, and formerly best friend?",
  //   },
  //   {
  //     link: "https://64.media.tumblr.com/890e666053c95b0552df4f0bd70feb40/1e882090d32c9081-5a/s1280x1920/a6b021b3c07a9de98816833011b0cf073730201d.png",
  //     text: "serena van der woodsen having an unsual fight (who am i kidding) with her bestie blair waldorf. i thought you only fought tuesdays and saturdays, let’s add a friday too.",
  //   },
  //   {
  //     link: "https://64.media.tumblr.com/e5d9c57fe76deebe064b8a9e08105cf1/a784be97ca02202c-73/s500x750/5c6f76ad0a2dffc0ed10e171308774dfb81b58b2.png",
  //     text: "Lonely Boy headed Upper East, looking formal with Nate Archibald, have a new bromance just started? I think so. But what will Serena Van der Woodsen think about this? Her two options being friends makes it even more hard to choose. Dan or Nate? What a hard decision!",
  //   },
  // ];

  return (
    <Box>
      <MetaData title={"GossipGirl"} />
      <VStack
        h="90vh"
        bgImage={bg}
        justify="center"
        textAlign="center"
        bgPosition="center"
        objectFit="contain"
        bgRepeat="no-repeat"
        backgroundSize="contain"
      ></VStack>

      {currentUser && (
        <VStack bg="blackAlpha.900" mt="10vh">
          <VStack h="40vh" bg="white" w="100vw" p="4">
            <HStack justify='space-between' h="10vh" w={["90%", '70%', '40%']}>
              <Image
                h="8vh"
                w="8vh"
                objectFit="cover"
                borderRadius="50%"
                src={currentUser.photoURL}
              />
              <Input
                h="8vh"
                w="90%"
                textAlign="left"
                borderRadius='25px'
                onChange={(e)=>setText(e.target.value)}
                value={text}
                placeholder={`What's on your mind, ${currentUser.displayName}`}
              />
            </HStack>

            <HStack borderRadius='35px' h="10vh" w={["90%", '70%', '40%']} bg='blackAlpha.900' justify='center' gap='4' pl='3' pr='3'>
              <Button onClick={onOpen}>Image</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Upload Image</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      p="1"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      {" "}
                      Done{" "}
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setFile(null);
                        onClose();
                      }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Button onClick={handlesPost}>
                Post
              </Button>
            </HStack>
          </VStack>

          {posts && posts?.map((post, index) => (
            <Stack
              key={index}
              pt="10"
              pb="10"
              flexDir={width >= 700 ? "row" : "column"}
              justify="space-evenly"
              align={"center"}
              spacing="5"
              h="75vh"
              w="80vw"
            >
              <Stack
                h={width >= 700 ? "70%" : "60%"}
                w={width >= 700 ? "20%" : "50%"}
                borderRadius="15px"
                bg="white"
                justify={"center"}
                align="center"
              >
                <Image
                  borderRadius="5px"
                  h={width >= 700 ? "85%" : "75%"}
                  w={width >= 700 ? "90%" : "95%"}
                  objectFit={"contain"}
                  src={post.image}
                ></Image>
              </Stack>
              <VStack
                w={width >= 700 ? "40%" : "80%"}
                h={width >= 700 ? "40%" : "35%"}
                align={"flex-start"}
                color="white"
              >
                <Heading>e-blast</Heading>
                <Text
                  css={{ "&::-webkit-scrollbar": { display: "none" } }}
                  overflowY={"auto"}
                  fontSize="max('1rem', '19cqi')"
                  fontWeight="medium"
                  align={"left"}
                >
                  {post.text}
                </Text>
              </VStack>
            </Stack>
          ))}
        </VStack>
      )}

      <Footer />
    </Box>
  );
};

export default Home;
