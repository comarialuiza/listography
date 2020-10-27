import Head from 'next/head'

import ListContainer from './../components/ListContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Listography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListContainer />
    </>
  )
}
