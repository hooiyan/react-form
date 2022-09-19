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
      <Flex
        as="form"
        id="icaForm"
        onSubmit={(e) => handleSubmit(e)}
        p={8}
        border="2px solid"
        borderColor="pink.300"
        borderRadius="lg"
        flexDir="column"
      >
        <AppFormControl
          isRequired
          htmlFor="fullname"
          label="Full Name (In Passport)"
        >
          <Input
            ref={fullNameRef}
            defaultValue="G Dragon"
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
          alignSelf="flex-end"
          mt={4}
          colorScheme="pink"
        >
          Confirm
        </Button>
      </Flex>
    </>
  )
}

export default UncontrolledFormPage
