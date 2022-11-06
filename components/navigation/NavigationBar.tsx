import { Box, Center, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function NavigationBar() {
  return (
    <Box w="full" px="4" py="2">
        <Center>
            <Flex maxW="80rem" justify="space-between">
               <Flex>
                   <Image src="/logo.png" w="1.8rem" h="2rem" alt="" />
               </Flex>
                
            </Flex>
        </Center>
    </Box>
  )
}

export default NavigationBar