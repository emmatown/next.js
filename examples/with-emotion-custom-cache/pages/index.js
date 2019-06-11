/** @jsx jsx */
import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import {
  keyframes,
  css,
  Global,
  jsx,
  CacheProvider,
  withEmotionCache,
} from '@emotion/core'
import createCache from '@emotion/cache'
import { Container } from 'next/dist/pages/_app'

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

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Basic = styled.div`
  ${basicStyles};
`

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`
const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`
const Main = withEmotionCache((props, cache) => {
  console.log('Main cache', cache)
  return <div {...props} />
})

export default () => {
  return (

      <React.Fragment>
        <Main>Hello</Main>
        <Global
          styles={{
            'html, body': {
              padding: '3rem 1rem',
              margin: 0,
              background: 'papayawhip',
              minHeight: '100%',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: 24,
            },
          }}
        />
        <Head>
          <title>With Emotion</title>
        </Head>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Basic>
            Inspect my parent to see the lack of flexbox autoprefixing
          </Basic>
          <Combined>
            With <code>:hover</code>.
          </Combined>
          <Animated animation={bounce}>Let's bounce.</Animated>
        </div>
      </React.Fragment>
  )
}
