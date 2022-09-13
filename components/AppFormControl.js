import { FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

function AppFormControl({ label, children }) {
  return (
    <FormControl>
      <FormLabel
        color="gray.500"
        fontSize={12}
      >
        {label}
      </FormLabel>
      {children}
    </FormControl>
  )
}

export default AppFormControl
