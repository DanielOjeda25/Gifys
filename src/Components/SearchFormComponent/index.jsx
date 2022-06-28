import React from 'react'
import './index.css'
import { useLocation } from 'wouter'
import {
  FormControl,
  Input,
  Select
} from '@chakra-ui/react'

import useForm from '../../Hooks/useForm'
import ButtonComponent from '../ButtonComponent/index'

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
  const { keyword, rating, changeKeyword, changeRating } = useForm({
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
  // esta funcion controla el cambio dedl rating
  const handleRatingChange = (event) => {
    changeRating({ rating: event.target.value })
  }
  return (
    <>
      <FormControl onSubmit={handleSubmit}
        display={'flex'}
        justifyContent={'center'}
        paddingTop={'0.5rem'}
        paddingBottom={'0.5rem'}
        bg={'currentcolor'}
        margin={'0 auto 30px'}
      >
        <Input placeholder='Busca gifs'
          value={keyword}
          onChange={handleChange}
          type="text"
          fontSize={'16px'}
          border={'none'}
          p={'4px 16px'}
          className='input'
        />
        <Select
          placeholder='Selecciona un Rating'
          value={rating}
          onChange={handleRatingChange}
          variant='outline'
          className='Select'
        >
          {RATINGS.map((rate) => (
            <option key={rate} className='options-rating'>{rate}</option>
          ))}
        </Select>
        <ButtonComponent>Buscar</ButtonComponent>

      </FormControl>
    </>
  )
}
