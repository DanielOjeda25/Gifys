import { Box, Image, Text, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import SearchForm from '../../Components/SearchFormComponent'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'wouter'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

export default function ErrorPage() {
  const randomImageError = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }
  return (
    <>
      <Helmet>
        Error 404 - Page not found
      </Helmet>
      <Box
        position={'stycky'}
        top={0}
        zIndex={20}
        maxH={'3rem'}>
        <SearchForm />
      </Box>
      <Box
        w={'100%'}
        maxW={'90%'}
        m={'0 auto'}
        p={'0 0.5em'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p='1rem'
          textAlign={'center'}
        >
          <Text
            color={'White'}
            marginTop={'0.6rem'}
            marginBottom={'0.6rem'}
            fontFamily={'Fira Sans, sans-serif'}
            fontSize={'5rem'}
            fontWeight={'bold'}
            fontStyle={'italic'}
          >404</Text>
          <Text
            fontSize={'1.5rem'}
            m={'1rem auto'}
            fontFamily={'Fira Sans, sans-serif'}
          >Sometimes gettings lost isnt that bad</Text>
          <Image
            m={'1rem auto'}
            w={'350px'}
            h={'350px'}
            objectFit={'cover'}
            src={randomImageError()}></Image>
          <Link to='/'>
            <Button colorScheme={'teal'} variant='outline'><ArrowBackIcon w={5} h={4} />Go back home</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}
