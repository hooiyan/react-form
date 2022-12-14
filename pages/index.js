import { Flex } from '@chakra-ui/react'

import Helmet from '@/components/Helmet'
import HomeCard from '@/components/HomeCard'
import HomeTitle from '@/components/HomeTitle'

export default function HomePage() {
  const data = [
    { id: 0, title: 'Form without JS', href: '/form-no-js', bgColor: 'green' },
    {
      id: 1,
      title: 'Controlled components',
      href: '/form-controlled',
      bgColor: 'blue',
    },
    {
      id: 2,
      title: 'Uncontrolled components',
      href: '/form-uncontrolled',
      bgColor: 'yellow',
    },
    { id: 3, title: 'React hooks', href: '/form-hook', bgColor: 'pink' },
    { id: 4, title: 'Formik components', href: '/form-fc', bgColor: 'gray' },
    { id: 5, title: 'Formik hooks', href: '/form-fh', bgColor: 'purple' },
  ]

  return (
    <>
      <Helmet title="Forms" />
      <HomeTitle />
      <Flex
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={16}
        marginY={16}
        marginX="auto"
        maxWidth="1080px"
      >
        {data.map((item) => (
          <HomeCard
            key={item.id}
            title={item.title}
            href={item.href}
            bgColor={item.bgColor}
            index={item.id}
          />
        ))}
      </Flex>
    </>
  )
}
