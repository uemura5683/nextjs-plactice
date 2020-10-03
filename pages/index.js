import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
export default function Home({blog}) {
  return (
    <div>
      {blog.map(blog => (
        <ul key={blog.id}>
          <li>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  let key = {
    headers: {'X-API-KEY': 'a9ca1ec4-edff-43d8-ace7-e5f0c68b5b50'},
  };
  let data = await fetch('https://uemura5683.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};