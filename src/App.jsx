import React, { Suspense } from 'react'
import './App.css'

import { GifsContext } from './Context/GifsContext'
import Detail from './Pages/DetailGifs/index'
import SearchResults from './Pages/SearchResults/index'

import { Box, Image } from '@chakra-ui/react'
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
              <Image
                alt='giffys logo'
                src='../src/Images/react.svg'
                maxW='100%'
                objectFit='cover'
              />
            </Box>
          </Link>
          <GifsContext>
            <Switch>
              <Route component={HomePage} path='/' />
              <Route component={SearchResults} path='/search/:keyword' />
              <Route component={Detail} path='/gif/:id' />
              {/* !Hacer la pagina de error y arreglar minorias */}
            </Switch>
          </GifsContext>
        </Box>
      </Suspense>
    </Box>
  )
}

export default App
