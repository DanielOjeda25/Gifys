import React from 'react'
import Gifs from '../GifComponent'
import { Grid } from '@chakra-ui/react'
import './styles.css'

export default function ListofGifs ({ gifs }) {
  return (
    <Grid
      minH="100vh"
      alignItems="center"
      gap="6px 6px"
      gridGap="6px 6px"
      gridAutoRows='250px'
      gridAutoFlow= 'row dense'
      className="ListOfGifs"
    >
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} title={title} url={url} id={id} />
      ))}
    </Grid>
  )
}
