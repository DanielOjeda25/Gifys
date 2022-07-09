import React, { Suspense } from 'react'
import './App.css'

import { GifsContext } from './Context/GifsContext'
import Detail from './Pages/DetailGifs/index'
import SearchResults from './Pages/SearchResults/index'
import ErrorPage from './Pages/Error'

import { Box, Heading } from '@chakra-ui/react'
import { Link, Route, Switch } from 'wouter'

const HomePage = React.lazy(() => import('./Pages/Home/index'))

function App () {
  return (
    <Box textAlign={'center'}>
      <Suspense fallback={null}>
        <Box
          bg='blackAlpha.900'
          color='White'
          flexDir='column'
          fontSize='calc(10px + 2vmin)'
          minHeight='100vh'
          p='16px'
          textAlign='left'>
          <Link to='/'>
            <Box m='10px auto' p='20px 0' w='144px'>
              <Heading
                fontFamily={'Fira Sans, sans-serif'}
                spacing='0.5em'
                as='h2' size='3xl'
                cursor={'pointer'}
              >Giffy</Heading>
            </Box>
          </Link>
          <GifsContext>
            <Switch>
              <Route component={HomePage} path='/' />
              <Route component={SearchResults} path='/search/:keyword' />
              <Route component={Detail} path='/gif/:id' />
              <Route component={ErrorPage} path="/:rest*" />
            </Switch>
          </GifsContext>
        </Box>
      </Suspense>
    </Box>
  )
}

export default App
