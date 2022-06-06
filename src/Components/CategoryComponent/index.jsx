import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Category ({ name, options = [] }) {
  return (
    <Box className='Category'>
      <Text fontSize='xl' color='white'>
        {name}
      </Text>
      <UnorderedList
        stylePosition='inside'
        display='flex'
        flexWrap='wrap'
        justifyContent='space-evenly'>
        {options.map((op) => (
          <ListItem
            key={op}
            color='white'
            fontSize='1em'
            transition='color ease-in 0.1s'>
            <Link to={`/search/${op}`}></Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
