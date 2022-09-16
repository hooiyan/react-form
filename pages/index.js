import AppForm from '@/components/AppForm'
import Helmet from '@/components/Helmet'
import TestingForm from '@/components/TestingForm'
import { Input } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <>
      <Helmet title="React Form" />
      <AppForm />
      {/* <TestingForm /> */}
      <form>
        <Input
          list="food"
          name="food"
        />
        <datalist id="food">
          <option value="burger" />
          <option value="french fries" />
          <option value="spaghetti" />
          <option value="pizza" />
        </datalist>
      </form>
    </>
  )
}
