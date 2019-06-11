/** @jsx jsx */
import App, { Container } from 'next/app'
import {
  jsx,
  CacheProvider,
  Global,
  css,
  withEmotionCache,
} from '@emotion/core'
import createCache from '@emotion/cache'

const cacheOptions = {
  // prefix styles with "custom-cache" instead of "css"
  // e.g. "custom-cache-d6wh4r"
  key: 'custom-cache',
  // only prefix the following style properties
  prefix: key => {
    switch (key) {
      case 'appearance':
      case 'user-select':
      case ':placeholder':
        return true
      default:
        return false
    }
  },
}

export const testCache = createCache(cacheOptions)

const Main = withEmotionCache((props, cache) => {
  console.log('Main cache', cache)
  return <Container {...props} />
})

class EmotionApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    // console.log(testCache);
    return (
      <Main>
        <Component {...pageProps} />
      </Main>
    )
  }
}

export default EmotionApp
