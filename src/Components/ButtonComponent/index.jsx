import React from 'react'
import './index.css'

import { Link } from 'wouter'

import { Button } from '@chakra-ui/react'

export default function ButtonComponent ({ children, href, size }) {
  return href
    ? (
      <Link size={size} href={href}>
        {children}
      </Link>
      )
    : (
      <Button
        size={size}
        bg={'white'}
        border={'1px solid #000'}
        color={'black'}
        cursor={'pointer'}
        fontSize={'1.2rem'}
        p={'.5rem 1rem'}
        className='button-form'>
        {children}
      </Button>
      )
}
