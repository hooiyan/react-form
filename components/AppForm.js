import AppInput from '@/components/AppInput'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import AppFormControl from './AppFormControl'

function AppForm() {
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const year = [
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ]

  return (
    <Formik
      initialValues={{
        firstName: '',
        surname: '',
        loginMethod: '',
        password: '',
        day: '',
        month: '',
        year: '',
        gender: '',
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Box
          as={Form}
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          width="400px"
          mx="auto"
          my={20}
          gap={3}
        >
          <Flex gap={4}>
            <AppFormControl label="First name">
              <Field
                name="firstName"
                placeholder="First name"
                component={AppInput}
              />
            </AppFormControl>

            <AppFormControl label="Surname">
              <Field
                name="surname"
                placeholder="Surname"
                component={AppInput}
              />
            </AppFormControl>
          </Flex>

          <AppFormControl label="Mobile number or email address">
            <Field
              name="loginMethod"
              placeholder="Mobile number or email address"
              component={AppInput}
            />
          </AppFormControl>

          <AppFormControl label="New password">
            <Field
              name="password"
              placeholder="New password"
              component={AppInput}
            />
          </AppFormControl>

          <AppFormControl label="Date of birth">
            <Flex gap={4}>
              <Field
                as={Select}
                name="day"
              >
                {day.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </Field>
              <Field
                as={Select}
                name="month"
              >
                {month.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </Field>
              <Field
                as={Select}
                name="year"
              >
                {year.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </Field>
            </Flex>
          </AppFormControl>

          {/* <AppFormControl label="Gender">
            <RadioGroup
              name="gender"
              display="flex"
              justifyContent="space-between"
            >
              <Field
                name="gender"
                value="female"
                component={AppInput}
              />
            </RadioGroup>
          </AppFormControl> */}

          <Button
            type="submit"
            width="200px"
            textTransform="capitalize"
            colorScheme="green"
          >
            Sign up
          </Button>
        </Box>
      )}
    </Formik>
  )
}

export default AppForm
