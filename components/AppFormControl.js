import { FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

function AppFormControl({ isRequired, htmlFor, label, children }) {
  return (
    <FormControl
      isRequired={isRequired}
      mb={4}
    >
      <FormLabel
        color="gray.800"
        fontSize={12}
        fontWeight="bold"
        htmlFor={htmlFor}
      >
        {label}
      </FormLabel>
      {children}
    </FormControl>
  )
}

export default AppFormControl
