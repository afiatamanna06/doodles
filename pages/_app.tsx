import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'
import Fonts from '../fonts/Fonts'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavigationBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
