import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import AboutSection from '../components/home/AboutSection'
import HomeSection from '../components/home/HomeSection'
import LatestNewsSection from '../components/home/LatestNewsSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doodles</title>
        <meta name="description" content="A clone of doodles website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
      <LatestNewsSection />
      <AboutSection />
    </div>
  )
}
