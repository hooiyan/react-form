import { Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import AppFormControl from '@/components/AppFormControl'
import AppInput from '@/components/AppInput'
import AppModal from '@/components/AppModal'
import Helmet from '@/components/Helmet'
import { axiosPublic } from '@/lib/axios'
import { db } from 'firebaseConfig'

function ControlledFormPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [username, setUsername] = useState('')
  const [loginMethod, setLoginMethod] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dbInstance = collection(db, 'amazon')

  const clearForm = () => {
    setUsername('')
    setLoginMethod('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = (e) => {
    const url = '/form-controlled'

    e.preventDefault()
    setIsLoading(true)

    axiosPublic
      .post(url, {
        username,
        loginMethod,
        password,
        confirmPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          addDoc(dbInstance, {
            username,
            loginMethod,
            password,
          })
          setIsSubmitted(true)
          clearForm()
          alert(res.data.message)
        }
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Helmet title="React controlled component" />
      <Flex flexDirection="column">
        <Image
          src="/assets/amazon.jpeg"
          alt="amazon"
          width="100px"
          mx="auto"
        />
        <Heading mb={4}>Create account</Heading>
        <form
          id="amazonForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <AppFormControl
            isRequired
            htmlFor="username"
            label="Your name"
          >
            <AppInput
              id="username"
              placeholder="First and last name"
              value={username}
              handleChange={setUsername}
            />
          </AppFormControl>

          <AppFormControl
            isRequired
            htmlFor="loginMethod"
            label="Mobile number or email"
          >
            <AppInput
              id="loginMethod"
              placeholder="Mobile number or email"
              value={loginMethod}
              handleChange={setLoginMethod}
            />
          </AppFormControl>

          <AppFormControl
            isRequired
            htmlFor="password"
            label="Password"
          >
            <AppInput
              isRequired
              type="password"
              id="password"
              placeholder="At least 6 characters"
              value={password}
              handleChange={setPassword}
              minLength={6}
            />
          </AppFormControl>

          <AppFormControl
            isRequired
            htmlFor="confirmPassword"
            label="Re-enter password"
          >
            <AppInput
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              handleChange={setConfirmPassword}
              minLength={6}
            />
          </AppFormControl>

          <Button
            form="amazonForm"
            type="submit"
            colorScheme="yellow"
            width="100%"
            isLoading={isLoading}
          >
            Create
          </Button>
        </form>

        <AppModal
          isSubmitted={isSubmitted}
          handleClose={() => setIsSubmitted(false)}
        >
          <Icon
            as={BsFillCheckCircleFill}
            color="green.500"
            width={8}
            height={8}
            marginBottom={2}
          />
          <Text fontWeight="bold">Account has been created successfully</Text>
        </AppModal>
      </Flex>
    </>
  )
}

export default ControlledFormPage
