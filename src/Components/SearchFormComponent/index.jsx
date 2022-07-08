import React from 'react'
import './index.css'
import { useLocation } from 'wouter'
import {
  Button,
  FormControl,
  Input
} from '@chakra-ui/react'

import useForm from '../../Hooks/useForm'
import { Search2Icon } from '@chakra-ui/icons'
import { Form, Formik } from 'formik'

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
  const { keyword, changeKeyword } = useForm({
    initialKeyword,
    initialRating
  })

  // creamos la funcion onsubmit
  const onSubmit = ({ keyword }) => {
    // si el keyword no es vacio
    if (keyword !== '') {
      // redireccionamos
      pushLocation(`/search/${keyword}`)
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
    <>
      <Formik >
        <Form initialValues={{ name: '' }}
          onSubmit={handleSubmit}
        >
          <FormControl
            display={'flex'}
            justifyContent={'center'}
            paddingTop={'0.5rem'}
            paddingBottom={'0.5rem'}
            margin={'0 auto 30px'}
            w={'70vw'}
            className={'form-control'}>
            <Input placeholder='Search your favourite gifs' value={keyword}
              onChange={handleChange} variant='flushed' autoComplete='off' />
            <Button
              ml={'1rem'}
              type='submit'
              colorScheme='teal'
              variant='outline'
            ><Search2Icon mr={'.2rem'} h={4} w={4} />Search</Button>
          </FormControl>
        </Form>
      </Formik>
    </>
  )
}
