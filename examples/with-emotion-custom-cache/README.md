# Example app with [emotion](https://github.com/emotion-js/emotion) using a custom cache.

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-emotion-custom-cache with-emotion-custom-cache-app
# or
yarn create next-app --example with-emotion-custom-cache with-emotion-custom-cache-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-emotion-custom-cache
cd with-emotion-custom-cache
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example builds on the `with-emotion` example but uses [emotion's CacheProvider](https://emotion.sh/docs/cache-provider) to customize prefixes and limit css property prefixing.

This is based off the with-emotion example.
