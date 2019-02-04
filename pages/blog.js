
import Link from 'next/link'
import Head from 'next/head'

import BlogLayout from '../components/BlogLayout'

const BlogIndex = props => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Sarabun" rel="stylesheet" />
    </Head>
    <BlogLayout>
      <h1 style={headerStyle}>Blog Posts</h1>
      <div style={articleListing}>
        <Link href="/posts/tdd-bst-with-kotlin-part-one">
          <a style={{fontFamily: ['Sarabun', 'sans-serif']}}><span style={titleStyle}>TDD a BST with Kotlin</span> - 2019-01-27</a>
        </Link>
      </div>
    </BlogLayout>
  </div>
)

export default BlogIndex

const titleStyle = {
  fontSize: 24
}

const headerStyle = {
  textAlign: 'center',
  fontFamily: ['Montserrat', 'sans-serif'],
  fontSize: 48,
  paddingLeft: 0
}

const articleListing = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 75
}
