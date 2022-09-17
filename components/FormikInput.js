import { Input } from '@chakra-ui/react'
import React from 'react'

function FormikInput({ field, form, ...props }) {
  return (
    <Input
      {...field}
      {...props}
    />
  )
}

export default FormikInput
