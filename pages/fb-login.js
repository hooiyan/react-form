import { Box } from '@chakra-ui/react'
import React from 'react'

function FacebookLoginPage() {
  return (
    <Box>
      <form>
        <input
          type="text"
          placeholder="Email address or phone number"
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value=""
        />
        <br />

        <input
          type="submit"
          value="Log in"
        />
        <br />

        <button type="submit">Log in</button>
      </form>
    </Box>
  )
}

export default FacebookLoginPage
