import React from 'react'

import { Redirect } from 'wouter'
import { Spinner, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import Gifs from '../../Components/GifComponent/index'
import useSingleGifs from '../../Hooks/useSingleGifs'

export default function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGifs({ id: params.id })

  // tengamos en cuenta si el gif tiene un titulo
  const title = gif ? gif.title : ''

  // si se esta cargando usaremos el Helmet
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner color="white" size="lg" />
      </>
    )
  }

  // si ocurre un error con el gif
  if (isError) return <Redirect to="/400" />

  // si el gif no esta
  if (!gif) return null

  return <>
    <Helmet>
      <title>{title} || Giffy</title>
    </Helmet>
    <Text>{gif.title}</Text>
    <Gifs gif={gif} />
  </>
}
