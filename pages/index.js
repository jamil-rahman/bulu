import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bulu. Another Streaming App</title>
        <meta name="bulu title" content="movie streaming app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className='text-3xl'>Hi, Mom</h1>
      <h2>this is I</h2>
    </div>
  )
}
