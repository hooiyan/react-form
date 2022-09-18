import React, { useState } from 'react'

function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial)

  const handleChange = (e) => {
    let { value, name, type } = e.target
    if (type === 'number') {
      value = parseInt(value)
    }
    if (type === 'file') {
      value[0] = e.target.files
    }
    setInputs({
      ...inputs, // copy the existing state
      [name]: value,
    })
  }

  // return the things we want to surface from this custom hook
  return { inputs, handleChange }
}

export default useForm
