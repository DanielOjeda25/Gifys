import React from 'react'
import './index.css'
import { useLocation } from 'wouter'
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'

import useForm from '../../Hooks/useForm'
import { SearchIcon } from '@chakra-ui/icons'

// ratings que tienen los gifs
const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm ({
  // inicialmente el rating seria g
  // y la palabra seria vacia
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  // linkeamos la re-direccion
  // eslint-disable-next-line no-unused-vars
  const [_, pushLocation] = useLocation()

  // usamos nuestro hook
  const { keyword, rating, changeKeyword } = useForm({
    initialKeyword,
    initialRating
  })

  // creamos la funcion onsubmit
  const onSubmit = ({ keyword }) => {
    // si el keyword no es vacio
    if (keyword !== '') {
      // redireccionamos
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }
  // creamos una funcion para hacer el cambio
  const handleChange = (event) => {
    changeKeyword({ keyword: event.target.value })
  }
  // creamos una funcion para controlar el submit
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ keyword })
  }
  return (
    // Hacer OTRO SEARCH FORM
    <>
      <FormControl onSubmit={handleSubmit}
        display={'flex'}
        justifyContent={'center'}
        paddingTop={'0.5rem'}
        paddingBottom={'0.5rem'}
        margin={'0 auto 30px'}
        w={'70vw'}
        className={'form-control'}
      >
        <InputGroup>
          <InputRightElement
            className='input-icon'
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color={'whiteAlpha.900'}/>}
          />
          <Input
            type='text' placeholder='Search your favourite gifs'
            value={keyword}
            onChange={handleChange}
            variant='flushed'
          />
        </InputGroup>
      </FormControl>
    </>
  )
}
