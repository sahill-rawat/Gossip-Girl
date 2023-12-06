import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAuth } from "../Auth";
import bg from "../images/bg.jpg";
import Footer from "./Footer";

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
      link: "https://akns-images.eonline.com/eol_images/Entire_Site/202334/rs_1024x759-230404112608-1024-taylor-momsen-chace-crawford-spl139674_004.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      text: "spotted : hdhuwfbwef wegfqwhe wqefhgqwejdn qwejgfwqejdfwejfwegd wejgfwedweghedfwegdb wegfdwegdcwefewtgdbwegfihqwe dweqqgfw fwejfhgqwefh  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorem at similique, vel excepturi neque repellat ipsum. Ullam sed culpa voluptatem, exercitationem molestiae animi excepturi necessitatibus aliquam consectetur accusamus possimus.",
    },
    {
      link: "https://akns-images.eonline.com/eol_images/Entire_Site/202334/rs_1024x759-230404112608-1024-taylor-momsen-chace-crawford-spl139674_004.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      text: "spotted : hdhuwfbwef wegfqwhe wqefhgqwejdn qwejgfwqejdfwejfwegd wejgfwedweghedfwegdb wegfdwegdcwefewtgdbwegfihqwe dweqqgfw fwejfhgqwefh  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorem at similique, vel excepturi neque repellat ipsum. Ullam sed culpa voluptatem, exercitationem molestiae animi excepturi necessitatibus aliquam consectetur accusamus possimus.",
    },
    {
      link: "https://akns-images.eonline.com/eol_images/Entire_Site/202334/rs_1024x759-230404112608-1024-taylor-momsen-chace-crawford-spl139674_004.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      text: "spotted : hdhuwfbwef wegfqwhe wqefhgqwejdn qwejgfwqejdfwejfwegd wejgfwedweghedfwegdb wegfdwegdcwefewtgdbwegfihqwe dweqqgfw fwejfhgqwefh  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorem at similique, vel excepturi neque repellat ipsum. Ullam sed culpa voluptatem, exercitationem molestiae animi excepturi necessitatibus aliquam consectetur accusamus possimus.",
    },
  ];

  return (
    <Box>
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
                w={width >= 700 ? "40%" : "80%"}
                borderRadius="15px"
                bg="white"
                justify={"center"}
                align="center"
              >
                <Image
                  borderRadius="5px"
                  h="auto"
                  w={width >= 700 ? "80%" : "90%"}
                  objectFit={"contain"}
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
