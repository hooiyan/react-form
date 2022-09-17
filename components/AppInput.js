import { Input } from '@chakra-ui/react'
import React from 'react'

function AppInput({ type, id, placeholder, value, handleChange, ...props }) {
  return (
    <Input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  )
}

export default AppInput
