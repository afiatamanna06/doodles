import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import AboutMarquee from './AboutMarquee'

function AboutHeader() {
  return (
    <Flex direction="column" position="relative" pt="1" gap={1}>
      <AboutMarquee direction='right' />
      <AboutMarquee direction="left" />
      <AboutMarquee direction='right' />
      <AboutMarquee direction="left" />
      <Image position="absolute" zIndex={2} top={["43%"]} left={["15%", "15%", "20%", "40%", "37%"]} w={["70%", "70%", "60%", "25%"]} src="/logo_outline.png" alt="" />
    </Flex>
  )
}

export default AboutHeader