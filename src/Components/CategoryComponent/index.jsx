import React from 'react'
import './styles.css'

import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Link } from 'wouter'

export default function Category ({ name, options = [] }) {
  return (
    <Box>
      <Text
        color='White'
        textAlign={'center'}
        marginBottom={'0.7rem'}
        marginTop={'0.6rem'}
        className='Title'>
        {name}
      </Text>
      <UnorderedList
        listStylePosition={'inside'}
        display={'flex'}
        flexWrap={'wrap'}
        padding={'0'}
        margin={'0'}
        justifyContent={'flex-end'}
        className='List'>
        {options.map((singleOption, index) => (
          <ListItem
            key={singleOption}
            index={index}
            type='primary'
            className='ListItem'>
            <Box
              padding={'0.3rem'}
              margin={'0.2rem'}
              maxH='2.2rem'
              fontSize={'1em'}>
              <Link to={`/search/${singleOption}`} className='Link'>
                {singleOption}
              </Link>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
