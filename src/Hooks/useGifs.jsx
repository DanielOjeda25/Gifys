// hook personalizado para trabajar con los gifs
import { useContext, useState, useEffect } from 'react'

import getGifs from '../Services/GetGifsFromApi'
import GifsContext from '../Context/GifsContext'

// variable global
const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating } = { keyword: null }) {
  // creamos un estado para difinir si la pagina isLoanding
  const [isLoading, setIsLoading] = useState(false)
  const [loandingNextPage, setLoandingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)

  // usamos el contexto para obtener los gifs
  const { gifs, setGifs } = useContext(GifsContext)

  // guardamos el keyword ingresado en el localstore
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'music'

  useEffect(() => {
    setIsLoading(true)

    getGifs({ keyword: keywordToUse, rating }).then(Gifs => {
      setGifs(Gifs)
      setIsLoading(false)

      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoandingNextPage(true)

    getGifs({ keyword: keywordToUse, page, rating }).then(nextGifs => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setLoandingNextPage(false)
    })
  }, [keywordToUse, page, rating, setGifs])

  return { isLoading, loandingNextPage, gifs, setPage }
}
