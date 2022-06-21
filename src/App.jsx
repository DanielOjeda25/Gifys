
import React, { Suspense, useEffect, useState } from 'react'
import './App.css'

import GetGifsFromApi from './Services/GetGifsFromApi'
import ListofGifs from './Components/ListOfGifsComponent'

import { Box, Image } from '@chakra-ui/react'
import { Link } from 'wouter'

const HomePage = React.lazy(() => import('./Pages/Home/index'))

function App () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    GetGifsFromApi().then((gifs) => setGifs(gifs))
  })
  return (
    <Box>
      <Suspense>
        <section>
          <Link to='/'>
            <figure>
              <Image alt='giffys logo' src='../src/Images/react.svg'/>
            </figure>
          </Link>
          <ListofGifs gifs={gifs} />
        </section>
      </Suspense>
    </Box>
  )
}

export default App
