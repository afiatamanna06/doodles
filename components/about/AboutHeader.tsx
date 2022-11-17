import { Flex } from '@chakra-ui/react'
import React from 'react'
import AboutMarquee from './AboutMarquee'

function AboutHeader() {
  return (
    <Flex direction="column" pt="1" gap={1}>
      <AboutMarquee direction='right' />
      <AboutMarquee direction="left" />
      <AboutMarquee direction='right' />
      <AboutMarquee direction="left" />
    </Flex>
  )
}

export default AboutHeader