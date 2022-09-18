import { Button, Input } from '@chakra-ui/react'
import { Form, Formik } from 'formik'

import AppFormControl from '@/components/AppFormControl'

function FormikComponentsFormPage() {
  return (
    <Formik
      initialValues={{ fullname: '' }}
      onSubmit={(values, actions) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }
    >
      {({ handleChange, values }) => (
        <Form>
          <AppFormControl>
            <Input
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
          </AppFormControl>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikComponentsFormPage
