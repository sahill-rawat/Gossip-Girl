import Footer from "./Footer";
import bg from "../images/bg.jpg";
import { useAuth } from "../Auth";
import React, { useState, useEffect } from "react";
import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import MetaData from "./Metadata";

const Home = () => {
  const { currentUser } = useAuth();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const posts = [
    {
      link: "https://64.media.tumblr.com/cba11899c60e343c63ea68fb495c0dd4/5dd5a93c6df071c3-97/s1280x1920/3f6af39620169cdfe0b3498150d7aca63dc9110a.png",
      text: "spotted : Georgina in a coffee shop with Serena Van Der Woodsen. What are this two girls doing together? Is Dan aware that his wife is with his ex, and formerly best friend?",
    },
    {
      link: "https://64.media.tumblr.com/890e666053c95b0552df4f0bd70feb40/1e882090d32c9081-5a/s1280x1920/a6b021b3c07a9de98816833011b0cf073730201d.png",
      text: "serena van der woodsen having an unsual fight (who am i kidding) with her bestie blair waldorf. i thought you only fought tuesdays and saturdays, let’s add a friday too.",
    },
    {
      link: "https://64.media.tumblr.com/e5d9c57fe76deebe064b8a9e08105cf1/a784be97ca02202c-73/s500x750/5c6f76ad0a2dffc0ed10e171308774dfb81b58b2.png",
      text: "Lonely Boy headed Upper East, looking formal with Nate Archibald, have a new bromance just started? I think so. But what will Serena Van der Woodsen think about this? Her two options being friends makes it even more hard to choose. Dan or Nate? What a hard decision!"
    },
  ];

  return (
    <Box>
      <MetaData title={'GossipGirl'}/>
      <VStack
        h="90vh"
        bgImage={bg}
        bgRepeat="no-repeat"
        bgPosition="center"
        objectFit="contain"
        textAlign="center"
        justify="center"
        backgroundSize="contain"
      ></VStack>

      {currentUser && (
        <VStack bg="blackAlpha.900" mt="10vh">
          {posts.map((post, index) => (
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
                  objectFit={'contain'}
                  src={post.link}
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
                  css={{"&::-webkit-scrollbar":{display:"none"}}}
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
