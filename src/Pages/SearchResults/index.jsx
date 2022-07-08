import React, { useCallback, useEffect, useRef } from 'react'

import ListofGifs from '../../Components/ListOfGifsComponent/index'
import SearchForm from '../../Components/SearchFormComponent/index'
import { useGifs } from '../../Hooks/useGifs'
import useNearScreen from '../../Hooks/useNearScreen'

import debounce from 'just-debounce-it'
import { Box, Spinner, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados:  ${keyword}` : ''
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {loading
        ? <Spinner color="white" size="lg" />
        : <>
          <Helmet>
            <title>{decodeURI(title)}</title>
            <meta name="description" content={title} />
          </Helmet>
          <Box
            position={'stycky'}
            top={0}
            zIndex={20}
            maxH={'3rem'}>
            <SearchForm initialKeyword={keyword} />
          </Box>
          <Box
            w='100%'
            maxW='90rem'
            m='0 auto'
            p='0 0.5em'>
            <Text
              color={'White'}
              marginTop={'0.6rem'}
              marginBottom={'0.6rem'}
              fontSize={'1.3em'}
              fontFamily={'Fira Sans, sans-serif'}
              fontWeight={'500'}
              textAlign={'center'}>
              {decodeURI(keyword)}
            </Text>
            <ListofGifs gifs={gifs} />
            <Box id='visor' ref={externalRef}></Box>
          </Box>
        </>
      }
    </>
  )
}
