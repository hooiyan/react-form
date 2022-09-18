import { Button, Flex, Heading, Image, Input } from '@chakra-ui/react'
import { Form, Formik } from 'formik'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'

function FormikComponentsFormPage() {
  return (
    <>
      <Helmet title="Formik component" />
      <Formik
        initialValues={{
          username: 'Anonymous',
          loginMethod: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ getFieldProps }) => (
          <Form>
            {console.log(getFieldProps)}
            <Flex flexDirection="column">
              <Image
                src="/assets/amazon.jpeg"
                alt="amazon"
                width="100px"
                mx="auto"
              />
              <Heading mb={4}>Create account</Heading>
              <AppFormControl
                isRequired
                htmlFor="username"
                label="Your name"
              >
                <Input
                  placeholder="First and last name"
                  {...getFieldProps('username')}
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="loginMethod"
                label="Mobile number or email"
              >
                <Input
                  placeholder="Mobile number or email"
                  {...getFieldProps('loginMethod')}
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="password"
                label="Password"
              >
                <Input
                  isRequired
                  type="password"
                  placeholder="At least 6 characters"
                  minLength={6}
                  {...getFieldProps('password')}
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="confirmPassword"
                label="Re-enter password"
              >
                <Input
                  type="password"
                  minLength={6}
                  {...getFieldProps('confirmPassword')}
                />
              </AppFormControl>

              <Button
                type="submit"
                colorScheme="yellow"
                width="100%"
              >
                Create
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FormikComponentsFormPage
