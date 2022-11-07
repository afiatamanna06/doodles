import { Button, Flex, Input } from '@chakra-ui/react'

function SignUpInput() {
  return (
    <Flex gap={3} alignItems="center">
        <Input color="black" borderRadius="xl" size="sm" />
        <Button borderBottom="2px" bg="white" px={8} h="2rem" color="#6681c5" borderRadius="lg" borderColor="#6681c5">sign up</Button>
    </Flex>
  )
}

export default SignUpInput