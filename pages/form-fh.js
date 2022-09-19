import { Button, Flex, Heading, Image, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'

function FormikHooksFormPage() {
  const formik = useFormik({
    initialValues: {
      username: 'Michael Jackson',
      loginMethod: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { getFieldProps, handleSubmit } = formik

  return (
    <>
      <Helmet title="Formik hooks" />
      <form onSubmit={handleSubmit}>
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
            colorScheme="purple"
            width="100%"
          >
            Create
          </Button>
        </Flex>
      </form>
    </>
  )
}

export default FormikHooksFormPage
