import React, { Suspense } from 'react'

import useNearScreen from '../../Hooks/useNearScreen'
import { Box, Spinner } from '@chakra-ui/react'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({
    distance: '0px'
  })
  return (
    <Box ref={fromRef}>
      <Suspense fallback={<Spinner color={'white'} size={'lg'} />}>
        {
          isNearScreen
            ? <TrendingSearches />
            : <Spinner color={'white'} size={'lg'} className='spinner' />
        }
      </Suspense>
    </Box>
  )
}
