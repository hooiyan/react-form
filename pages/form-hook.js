import { Box, Button, Flex, Input, Select } from '@chakra-ui/react'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'
import useForm from '@/lib/useForm'
import { day, month, year } from '@/utils/index'

function ReactHooksFormPage() {
  const { inputs, handleChange } = useForm({
    firstname: 'Jenny',
    surname: 'Kim',
    loginMethod: '0167319898',
    dob: { day: '10', month: 'Mar', year: '2000' },
  })

  return (
    <Box>
      <Helmet title="React hooks" />
      <Flex gap={4}>
        <AppFormControl
          isRequired
          label="First name"
        >
          <Input
            id="firstname"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </AppFormControl>

        <AppFormControl
          isRequired
          label="Surname"
        >
          <Input
            id="surname"
            name="surname"
            value={inputs.surname}
            onChange={handleChange}
          />
        </AppFormControl>
      </Flex>

      <AppFormControl
        isRequired
        label="Mobile number or email address"
      >
        <Input
          id="loginMethod"
          name="loginMethod"
          value={inputs.loginMethod}
          onChange={handleChange}
        />
      </AppFormControl>

      <AppFormControl
        isRequired
        label="Password"
      >
        <Input
          id="password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </AppFormControl>

      <AppFormControl
        isRequired
        label="Date of birth"
      >
        <Flex gap={4}>
          <Select
            value={inputs.dob.day}
            onChange={handleChange}
          >
            {day.map((d) => (
              <option
                key={d}
                value={d}
              >
                {d}
              </option>
            ))}
          </Select>
          <Select
            value={inputs.dob.month}
            onChange={handleChange}
          >
            {month.map((m) => (
              <option
                key={m}
                value={m}
              >
                {m}
              </option>
            ))}
          </Select>
          <Select
            value={inputs.dob.year}
            onChange={handleChange}
          >
            {year.map((y) => (
              <option
                key={y}
                value={y}
              >
                {y}
              </option>
            ))}
          </Select>
        </Flex>
      </AppFormControl>

      <AppFormControl label="Gender"></AppFormControl>

      <Button colorScheme="green">Sign up</Button>
    </Box>
  )
}

export default ReactHooksFormPage
