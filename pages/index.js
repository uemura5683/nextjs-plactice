import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps() {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch('https://next-plactice.microcms.io/api/v1/blogs', key);

  const posts = await res.json();

  return {
    props: {
      posts,
    },
    unstable_revalidate: 30, // In seconds
  }
}