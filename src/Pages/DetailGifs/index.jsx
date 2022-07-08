import React from 'react'
import { Link, Redirect } from 'wouter'
import { Button, Center, Divider, Spinner, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import Gifs from '../../Components/GifComponent/index'
import useSingleGifs from '../../Hooks/useSingleGifs'

import { ArrowBackIcon } from '@chakra-ui/icons'

export default function Detail ({ params }) {
  const { singleGif, isLoading, error } = useSingleGifs({ id: params.id })

  // tengamos en cuenta si el gif tiene un titulo
  const title = singleGif ? singleGif.title : ''

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
  if (error) return <Redirect to="/400" />

  // si el gif no esta
  if (!singleGif) return null

  return <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Text
      color={'White'}
      marginTop={'0.6rem'}
      marginBottom={'0.6rem'}
      fontSize={'1em'}
      fontFamily={'Fira Sans, sans-serif'}
      fontWeight={'500'}
      textAlign={'center'}>{singleGif.title}</Text>
    <Gifs {...singleGif} />
    <Center>
      <Divider borderColor={'aquamarine'} maxW={'50%'} mt={'2rem'} mb={'2rem'} />
    </Center>
    <Center>
      <Link to='/'>
        <Button colorScheme={'teal'} variant='outline'><ArrowBackIcon w={5} h={4}/>Look for More Gifs</Button>
      </Link>
    </Center>
  </>
}
