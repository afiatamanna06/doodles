import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, lightTheme, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public"
import merge from 'lodash.merge';

export const { chains, provider }  = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
        alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
        publicProvider()
    ]
)

const { connectors } = getDefaultWallets(
    {
        appName: "Doodle",
        chains
    }
)

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

export const myCustomTheme: Theme = merge(lightTheme({
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

