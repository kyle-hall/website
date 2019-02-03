
import Link from 'next/link'
import Head from 'next/head'

import BlogLayout from '../components/BlogLayout'

const BlogIndex = props => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Sarabun" rel="stylesheet" />
    </Head>
    <BlogLayout>
      <h1 style={{textAlign: 'center', fontFamily: ['Montserrat', 'sans-serif'], fontSize: 48, paddingLeft: 0}}>Blog Posts</h1>
      <div className="article-listing" style={{marginTop: 50}}>
        <Link href="/posts/tdd-bst-with-kotlin-part-one">
          <a style={{fontFamily: ['Sarabun', 'sans-serif']}}>My First Post - 2019-01-27</a>
        </Link>
      </div>
    </BlogLayout>
  </div>
)

export default BlogIndex
