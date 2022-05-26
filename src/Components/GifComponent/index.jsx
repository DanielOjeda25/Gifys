import { Box } from '@chakra-ui/react'
import React from 'react'
import './styles.css'

export default function Gifs ({ title, url }) {
  return (
    <Box position="relative" className="Gif">
      <h3>{title}</h3>
      <img src={url} alt={title} className="img-gif" />
    </Box>
  )
}
