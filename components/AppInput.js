import { Input } from '@chakra-ui/react'
import React from 'react'

function AppInput({ id, handleChange, ...props }) {
  return (
    <Input
      id={id}
      name={id}
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  )
}

export default AppInput
