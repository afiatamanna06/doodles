import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Chalkboard SE';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/chalkboard-se-regular.woff2') format('woff2');
      }
      `}
  />
)

export default Fonts