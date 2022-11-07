import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'
import Fonts from '../fonts/Fonts'
import theme from '../styles/theme'
import merge from 'lodash.merge'
import { RainbowKitProvider, midnightTheme, Theme } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from '../utils/RainbowKitProvider'
import { chains } from '../utils/RainbowKitProvider'

const myCustomTheme: Theme = merge(midnightTheme({
  accentColor: '#5086DC',
  accentColorForeground: 'white',
  borderRadius: "large",
  fontStack: 'system',
  overlayBlur: 'small',
}), {
  fonts: {
    body: 'Chalkboard SE',
  },
} as Theme)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider 
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
