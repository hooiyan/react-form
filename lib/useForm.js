import { useState } from 'react'

function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial)

  const handleChange = (e, nm, val) => {
    let value, name, type

    if (nm && val) {
      name = nm
      value = val
    } else {
      value = e?.target.value
      name = e?.target.name
      type = e?.target.type

      if (type === 'number') {
        value = parseInt(value)
      }
      if (type === 'file') {
        value[0] = e?.target.files
      }
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
