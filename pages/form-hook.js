import {
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
} from '@chakra-ui/react'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'
import useForm from '@/lib/useForm'
import { day, month, year } from '@/utils/index'

function ReactHooksFormPage() {
  const { inputs, handleChange } = useForm({
    firstname: 'Jenny',
    surname: 'Kim',
    loginMethod: '0167319898',
    password: '',
    day: '10',
    month: 'Mar',
    year: '2000',
    gender: 'female',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <>
      <Helmet title="React hooks" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap={4}>
          <AppFormControl
            isRequired
            label="First name"
            htmlFor="firstname"
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
            htmlFor="surname"
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
          htmlFor="loginMethod"
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
          htmlFor="password"
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
          htmlFor="dob"
        >
          <Flex gap={4}>
            <Select
              name="day"
              value={inputs.day}
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
              name="month"
              value={inputs.month}
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
              name="year"
              value={inputs.year}
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

        <AppFormControl
          label="Gender"
          htmlFor="gender"
        >
          <RadioGroup
            id="gender"
            name="gender"
            value={inputs.gender}
            onChange={(e) => console.log(e)}
          >
            <Flex justifyContent="space-between">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="custom">Custom</Radio>
            </Flex>
          </RadioGroup>
        </AppFormControl>

        <Button
          type="submit"
          colorScheme="green"
        >
          Sign up
        </Button>
      </form>
    </>
  )
}

export default ReactHooksFormPage
