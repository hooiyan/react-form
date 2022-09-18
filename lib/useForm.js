import React, { useState } from 'react'

function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial)

  const handleChange = (e) => {
    setInputs({
      ...inputs, // copy the existing state
      [e.target.name]: e.target.value,
    })
  }

  // return the things we want to surface from this custom hook
  return { inputs, handleChange }
}

export default useForm
