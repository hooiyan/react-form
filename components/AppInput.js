import { Input } from '@chakra-ui/react'
import React from 'react'

function AppInput({ field, form, ...props }) {
  return (
    <Input
      {...field}
      {...props}
    />
  )
}

export default AppInput
