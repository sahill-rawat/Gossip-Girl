import { Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState(""); 
  return (
    <HStack w='98%' h='8%'>
        <Input placeholder='Find a user' type="text" onChange={(e)=>setSearchQuery(e.target.value)} />
    </HStack>
  )
}

export default SearchBar
