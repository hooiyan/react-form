import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from '@chakra-ui/react'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'
import useForm from '@/lib/useForm'
import { day, month, year } from '@/utils/index'
import CustomPronoun from '@/components/CustomPronoun'

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
    customGender: 'none',
    optionalGender: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(inputs, null, 2))
  }

  return (
    <>
      <Helmet title="React hooks" />
      <Flex
        flexDir="column"
        mb={6}
      >
        <Heading>Sign Up</Heading>
        <Text color="gray.500">{`It's quick and easy.`}</Text>
      </Flex>
      <Box
        as="form"
        onSubmit={(e) => handleSubmit(e)}
        textAlign="center"
      >
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
              bgColor="gray.100"
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
              bgColor="gray.100"
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
            bgColor="gray.100"
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
            placeholder="******"
            bgColor="gray.100"
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
            onChange={(val) => handleChange(null, 'gender', val)}
          >
            <Flex justifyContent="space-between">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="custom">Custom</Radio>
            </Flex>
          </RadioGroup>
        </AppFormControl>

        {inputs.gender === 'custom' && (
          <>
            <CustomPronoun
              value={inputs.customGender}
              onChange={handleChange}
            />
          </>
        )}

        <Button
          type="submit"
          colorScheme="green"
          width="200px"
          mt={4}
        >
          Sign Up
        </Button>
      </Box>
    </>
  )
}

export default ReactHooksFormPage
