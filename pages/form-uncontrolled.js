import { Box, Button, Input, Select, Flex } from '@chakra-ui/react'
import { useRef } from 'react'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'

function UncontrolledFormPage() {
  const fullNameRef = useRef('')
  const passportRef = useRef('')
  const dobRef = useRef('')
  const nationalityRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      JSON.stringify(
        {
          fullname: fullNameRef.current.value,
          passport: passportRef.current.value,
          dob: dobRef.current.value,
          nationality: nationalityRef.current.value,
        },
        null,
        2
      )
    )
  }

  return (
    <>
      <Helmet title="React uncontrolled component" />
      <Box
        as="form"
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

        <Flex gap={4}>
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
            htmlFor="dob"
            label="Date of Birth"
          >
            <Input
              ref={dobRef}
              id="dob"
              name="dob"
              type="date"
            />
          </AppFormControl>
        </Flex>

        <AppFormControl
          isRequired
          htmlFor="nationality"
          label="Nationality/Citizenship"
        >
          <Select ref={nationalityRef}>
            <option
              selected
              disabled
            >
              Please select option
            </option>
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
      </Box>
    </>
  )
}

export default UncontrolledFormPage
