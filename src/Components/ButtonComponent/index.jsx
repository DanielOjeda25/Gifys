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
    <Button size={size}>{children}</Button>
      )
}
