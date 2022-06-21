import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'wouter'

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
        border={'1px solid transparent'}
        color={'black'}
        cursor={'pointer'}
        fontSize={'1.2rem'}
        p={'.5rem 1rem'}>
        {children}
      </Button>
      )
}
