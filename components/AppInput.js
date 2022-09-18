import { Input } from '@chakra-ui/react'
import React from 'react'

function AppInput({ isFormik, id, handleChange, ...props }) {
  return (
    <Input
      id={id}
      name={id}
      // onChange={(e) => (!isFormik ? handleChange(e.target.value) : null)}
      {...props}
    />
  )
}

export default AppInput
