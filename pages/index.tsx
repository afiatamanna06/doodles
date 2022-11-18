import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import AboutSection from '../components/home/about/AboutSection'
import GenesisBox from '../components/home/genesis-box/GenesisBox'
import HomeSection from '../components/home/HomeSection'
import LatestNewsSection from '../components/home/latest-news/LatestNewsSection'
import NewsStandSection from '../components/home/news-stand/NewsStandSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doodles</title>
        <meta name="description" content="A community driven collectible nft project by Burnt Toast, Poopie Cat, and Tulip • ᴗ •" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
      <LatestNewsSection />
      <AboutSection />
      <GenesisBox />
      <NewsStandSection />
    </div>
  )
}
