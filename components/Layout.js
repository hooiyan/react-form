import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Layout({ children }) {
  return (
    <Flex
      mx={4}
      my={8}
      justifyContent="center"
      alignItems="center"
    >
      <main>{children}</main>
    </Flex>
  )
}

export default Layout
