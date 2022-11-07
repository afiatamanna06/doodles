import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Avatar, ChakraProvider, Image } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'
import Fonts from '../fonts/Fonts'
import theme from '../styles/theme'
import { RainbowKitProvider, AvatarComponent } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { myCustomTheme, wagmiClient, chains } from '../utils/RainbowKitProvider'
import { FaUserAlt } from 'react-icons/fa'

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  return ensImage ? (
    <Image
      src={ensImage}
      width={size}
      height={size}
      alt=""
    />
  ) : (
    <Avatar bg="blackAlpha.500" icon={<FaUserAlt />} />
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider 
          avatar={CustomAvatar}
          theme={myCustomTheme} 
          chains={chains}>
          <Fonts />
          <NavigationBar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
