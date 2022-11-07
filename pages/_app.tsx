import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Avatar, ChakraProvider, Image } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'
import Fonts from '../fonts/Fonts'
import theme from '../styles/theme'
import merge from 'lodash.merge'
import { RainbowKitProvider, lightTheme, Theme, AvatarComponent } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from '../utils/RainbowKitProvider'
import { chains } from '../utils/RainbowKitProvider'
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

const myCustomTheme: Theme = merge(lightTheme({
  accentColor: '#5086DC',
  accentColorForeground: 'white',
  borderRadius: "large",
  fontStack: 'system',
  overlayBlur: 'small',
}), {
  colors: {
    closeButton: "white",
    modalBackground: "rgba(0, 0, 0, .5)",
    modalText: "white",
    modalTextSecondary: "rgba(255, 255, 255, 0.64)",
    profileForeground: "rgba(0, 0, 0, .1)",
    profileAction: "rgba(0, 0, 0, .4)",
    profileActionHover: "rgba(140, 125, 234, .6)",
  },
  fonts: {
    body: 'Chalkboard SE',
  },
} as Theme)

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
