import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'
import { Input, Button, Select } from '@chakra-ui/react'
import React, { useRef } from 'react'

function UncontrolledFormPage() {
  const fullNameRef = useRef('')
  const passportRef = useRef('')
  const nationalityRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('fullname', fullNameRef.current.value)
    console.log('passport', passportRef.current.value)
    console.log('nationality', nationalityRef.current.value)
  }

  return (
    <>
      <Helmet title="React uncontrolled component" />
      <form
        id="icaForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <AppFormControl
          isRequired
          htmlFor="fullname"
          label="Full Name (In Passport)"
        >
          <Input
            ref={fullNameRef}
            defaultValue="Jenny"
            id="fullname"
            name="fullname"
          />
        </AppFormControl>

        <AppFormControl
          isRequired
          htmlFor="passport"
          label="Passport Number"
        >
          <Input
            ref={passportRef}
            id="passport"
            name="passport"
          />
        </AppFormControl>

        <AppFormControl
          isRequired
          htmlFor="nationality"
          label="Nationality/Citizenship"
        >
          <Select
            ref={nationalityRef}
            placeholder="Please select option"
          >
            <option>Malaysia</option>
            <option>Singapore</option>
            <option>Thailand</option>
          </Select>
        </AppFormControl>

        <Button
          form="icaForm"
          type="submit"
        >
          Confirm
        </Button>
      </form>
    </>
  )
}

export default UncontrolledFormPage
