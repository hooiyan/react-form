import AppForm from '@/components/AppForm'
import Helmet from '@/components/Helmet'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'

export default function HomePage() {
  const api = 'http://localhost:3000/api/login'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(api, { username, password })
      .then((res) => console.log(res))
      .catch((err) => console.error(err.response.data))
  }

  return (
    <>
      <Helmet title="React Form" />
      {/* <AppForm /> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
