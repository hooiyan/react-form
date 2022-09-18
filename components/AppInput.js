import { Input } from '@chakra-ui/react'
import React from 'react'

function AppInput({ handleChange, ...props }) {
  return (
    <Input
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  )
}

export default AppInput
