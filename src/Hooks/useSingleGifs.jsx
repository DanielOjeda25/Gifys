import { useGifs } from './useGifs'
import getSingleGifs from '../Services/GetSingleGifs'
import { useEffect, useState } from 'react'

export default function useSingleGifs ({ id }) {
  const { gifs } = useGifs()

  // traemos las gifs desde el useGifs
  const gifsFromCache = gifs.find((gif) => gif.id === id)

  // y creamos un estado para guardar esos gifs
  const [gif, setGif] = useState(gifsFromCache)
  const [isLoading, setIsLoading] = useState(false)

  // creamos un estado que controle si ocurre un error
  const [error, setError] = useState(false)

  useEffect(() => {
    // si el gif no esta
    if (!gif) {
      setIsLoading(true)

      // llamar al servicio si no tenemos el gif
      getSingleGifs({ id })
        .then((gif) => {
          // cambiamos los estados
          setGif(gif)
          setIsLoading(false)
          setError(false)
        })
        .catch((e) => {
          setError(true)
          setIsLoading(false)
        })
    }
  }, [gif, id])
  return { gif, isLoading, error }
}
