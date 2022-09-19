import { Button, Flex, Heading, Image, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'
import { axiosPublic } from '@/lib/axios'

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
        onSubmit={(values) => {
          const url = '/form-fc'
          alert(JSON.stringify(values, null, 2))
          axiosPublic
            .post(url, values)
            .then((res) => console.log(res.data.message))
            .catch((err) => console.error(err.message))
        }}
      >
        {({ getFieldProps }) => (
          <Form>
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
                {/* <Input
                  placeholder="First and last name"
                  {...getFieldProps('username')}
                /> */}
                <Field
                  as={Input}
                  name="username"
                  placeholder="First and last name"
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="loginMethod"
                label="Mobile number or email"
              >
                {/* <Input
                  placeholder="Mobile number or email"
                  {...getFieldProps('loginMethod')}
                /> */}
                <Field
                  as={Input}
                  name="loginMethod"
                  placeholder="Mobile number or email"
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="password"
                label="Password"
              >
                {/* <Input
                  isRequired
                  type="password"
                  placeholder="At least 6 characters"
                  minLength={6}
                  {...getFieldProps('password')}
                /> */}
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  placeholder="At least 6 characters"
                  minLength={6}
                />
              </AppFormControl>

              <AppFormControl
                isRequired
                htmlFor="confirmPassword"
                label="Re-enter password"
              >
                {/* <Input
                  type="password"
                  minLength={6}
                  {...getFieldProps('confirmPassword')}
                /> */}
                <Field
                  as={Input}
                  type="password"
                  name="confirmPassword"
                  minLength={6}
                />
              </AppFormControl>

              <Button
                type="submit"
                colorScheme="teal"
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
