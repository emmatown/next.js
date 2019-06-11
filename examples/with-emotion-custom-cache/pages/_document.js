// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { CacheProvider, withEmotionCache } from '@emotion/core'
import { testCache } from './index'

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

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping in a per-page basis
        enhanceApp: App => props => (
          <CacheProvider value={testCache}>
            <App {...props} />
          </CacheProvider>
        ),
      })

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument
