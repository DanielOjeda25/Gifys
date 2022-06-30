import React from 'react'
import './index.css'
import { Helmet } from 'react-helmet'

import { Box, Text } from '@chakra-ui/react'

import { useGifs } from '../../Hooks/useGifs'
import SearchForm from '../../Components/SearchFormComponent/index'
import ListofGifs from '../../Components/ListOfGifsComponent/index'
import TrendingSearches from '../../Components/TrendingSearches'

export default function Home () {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Inicio | Giffy</title>
      </Helmet>
      <Box
        position={'stycky'}
        top={0}
        zIndex={20}
        maxH={'3rem'}
      >
        <SearchForm />
      </Box>
      <Box
        w='100%'
        maxW='90rem'
        m='0 auto'
        p='0 0.5em'
      >
        <Box
          display={'flex'}
          flexDir={'column'}
          alignItems={'flex-start'}
          className='Main-box'
        >
          <Box
            flexShrink='2'
            w={'100%'}
          >
            <Text
              color={'White'}
              marginTop={'0.6rem'}
              marginBottom={'0.6rem'}
              fontSize={'1.2em'}
              fontFamily={'Fira Sans, sans-serif'}
              fontWeight={'500'}
              textAlign={'center'}
              >
             Last Search
            </Text>
            <ListofGifs gifs={gifs} />
          </Box>
          <Box
            marginBottom={'25px'}
            w={'100%'}
            className='trending-searches'
          >
            <TrendingSearches />
          </Box>
        </Box>
      </Box>
    </>
  )
}
