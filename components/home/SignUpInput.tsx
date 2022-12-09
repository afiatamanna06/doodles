import { Button, Flex, Input } from '@chakra-ui/react'

function SignUpInput() {
  return (
    <Flex gap={[5, 5, 5, 3, 3]} direction={["column", "column", "column", "row", "row"]} alignItems={["start", "start", "start", "center", "center"]}>
        <Input minW={["full", "full", "22rem", "14rem", "14rem"]} w="100%" color="black" type="email" bg="white" border="1px" borderColor="#D1B6B6" placeholder="Enter you email" _placeholder={{ color: "#D1B6B6" }} borderRadius="xl" size="sm" />
        <Button borderBottom="2px" bg="white" px={8} h="2rem" color="#6681c5" borderRadius="lg" borderColor="#6681c5">sign up</Button>
    </Flex>
  )
}

export default SignUpInput