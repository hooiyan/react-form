import AppForm from '@/components/AppForm'
import Helmet from '@/components/Helmet'
import TestingForm from '@/components/TestingForm'

export default function HomePage() {
  return (
    <>
      <Helmet title="React Form" />
      <AppForm />
      <TestingForm />
    </>
  )
}
