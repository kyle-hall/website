import Head from 'next/head'

import BlogLayout from '../components/BlogLayout'
import ArticleListItem from '../components/ArticleListItem'

const BlogIndex = props => (
  <div>
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Montserrat|Sarabun' rel='stylesheet' />
    </Head>
    <BlogLayout>
      <h1 style={headerStyle}>Posts</h1>
      <div style={articleListing}>
        <ArticleListItem
          title='My Learning Plan for the Year'
          date='2019-04-26'
          link='/posts/my-learning-plan-for-the-year'
        />
        <ArticleListItem
          title='Introducing React Hooks'
          date='2019-04-24'
          link='/posts/introducing-react-hooks'
        />
        <ArticleListItem
          title='Deploying Static Sites with Next.js and Netlify'
          date='2019-02-25'
          link='/posts/deploy-static-site-with-next-and-netlify'
        />
        <ArticleListItem
          title='Gradle Test Output and Coverage Tools'
          date='2019-02-05'
          link='/posts/gradle-show-test-output'
        />
        <ArticleListItem
          title='TDD a BST with Kotlin'
          date='2019-01-27'
          link='/posts/tdd-bst-with-kotlin-part-one'
        />
      </div>
    </BlogLayout>
  </div>
)

export default BlogIndex

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
