import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPosts() {
  return (
    <>
      <Head>
        <title>First Posts</title>
      </Head>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to homes</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}