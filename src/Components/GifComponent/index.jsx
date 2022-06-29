import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './styles.css'

export default function Gifs ({ title, url }) {
  return (
    <Box position='relative' h='100%' className='Gif'>
      <Text
        borderRadius='5px'
        fontSize='xs'
        margin={0}
        position='absolute'
        p='.5em'
        color='white'
        bottom='0'
        bg='rgba(0, 0, 0, 0.1)'
        className='text-gifs'>
        {title}
      </Text>
      <Image
        src={url}
        alt={title}
        className='img-gif'
        h='100%'
        w='100%'
        objectFit='contain'
        verticalAlign='top'
      />
    </Box>
  )
}
