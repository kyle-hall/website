
import Link from 'next/link'
import Head from 'next/head'

import BlogLayout from '../components/BlogLayout'

const BlogIndex = props => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Sarabun" rel="stylesheet" />
    </Head>
    <BlogLayout>
      <h1 style={headerStyle}>Posts</h1>
      <div style={articleListing}>
        <div style={articleStyle}>
          <Link href="/posts/gradle-show-test-output">
            <a style={{fontFamily: ['Sarabun', 'sans-serif']}}><span style={titleStyle}>Gradle Test Output and Coverage Tools</span> - 2019-02-05</a>
          </Link>
        </div>
        <div style={articleStyle}>
          <Link href="/posts/tdd-bst-with-kotlin-part-one">
            <a style={{fontFamily: ['Sarabun', 'sans-serif']}}><span style={titleStyle}>TDD a BST with Kotlin</span> - 2019-01-27</a>
          </Link>
        </div>
      </div>
    </BlogLayout>
  </div>
)

export default BlogIndex

const titleStyle = {
  fontSize: 24
}

const articleStyle = {
  marginBottom: 30
}

const headerStyle = {
  textAlign: 'center',
  fontFamily: ['Montserrat', 'sans-serif'],
  fontSize: 48,
  paddingTop: 80
}

const articleListing = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: 75
}
