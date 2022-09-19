import { Button, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'

import AppFormControl from '@/components/AppFormControl'
import Helmet from '@/components/Helmet'

function FormikHooksFormPage() {
  const formik = useFormik({
    initialValues: {
      username: 'Anonymous',
      loginMethod: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { values, getFieldProps, handleSubmit } = formik

  return (
    <>
      <Helmet title="Formik hooks" />
      <form onSubmit={handleSubmit}>
        <AppFormControl
          htmlFor="username"
          label="Username"
        >
          <Input
            {...getFieldProps('username')}
            value={values.username}
          />
        </AppFormControl>

        <Button>Submit</Button>
      </form>
    </>
  )
}

export default FormikHooksFormPage
