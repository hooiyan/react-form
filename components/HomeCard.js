import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

function HomeCard({
  href,
  title,
  index,
  bgColor = 'blue.500',
  color = 'white',
}) {
  return (
    <Link href={href}>
      <Flex
        as="a"
        border="4px solid white"
        backgroundColor={`${bgColor}.500`}
        color={color}
        padding={8}
        borderRadius="xl"
        cursor="pointer"
        width="300px"
        height="250px"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
        _hover={{ border: '4px dashed black' }}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
        >
          {`- ${index} -`}
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          as="span"
          fontSize="sm"
        >
          {href}
        </Text>
      </Flex>
    </Link>
  )
}

export default HomeCard
