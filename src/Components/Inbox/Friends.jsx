import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import img from '../../images/img.jpg';

const Friends = ({setDisplay}) => {

    const handleClick = () => setDisplay(prev=>(prev === 1 ? 0 : 1) );

  return (
    <VStack h='82%' w='100%' overflowY='auto'  css={{"&::-webkit-scrollbar":{display:"none", scrollBehavior:"smooth"}}} >
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
        <HStack onClick={handleClick} pl='1' pr='1' h='12%' w='100%' justifyContent='flex-start'>
           <VStack h='100%' flex='1' align='center'>
           <Image m='auto' h='5vh' w='5vh' borderRadius="50%" objectFit='cover' src={img} />
           </VStack>
            <VStack flex='5' pl='2' pr='2' gap='0' h='100%' overflow="hidden" align='flex-start' justifyContent="flex-start">
                <Text fontWeight='black'>Tenzin</Text>
                <Text fontWeight='lighter' lineHeight='2' overflow="hidden">Hii Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur officiis placeat ea atque! Facere rerum neque nam perferendis excepturi id natus quisquam illo quae asperiores nesciunt, totam dolores laudantium.</Text>
            </VStack>
        </HStack>
    </VStack>
  )
}

export default Friends
