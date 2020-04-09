import Head from 'next/head'

import BlogLayout from '../components/BlogLayout'
import ArticleListItem from '../components/ArticleListItem'
import NavBar from '../components/NavBar'

const BlogIndex = props => (
  <div>
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link rel='stylesheet' href='/static/blogStyles.css' />
    </Head>
    <div className='blog'>
      <NavBar />
      <BlogLayout>
        <h1 className='blog__main-header'>Posts</h1>
        <div className='blog__article-list'>
        <ArticleListItem
            title='2020 Introduction'
            date='2020-04-09'
            link='/posts/2020-intro'
          />
          <ArticleListItem
            title='Starting a React Project from Scratch with Parcel.js'
            date='2019-06-10'
            link='/posts/manual-react-from-scratch-with-parceljs'
          />
          <ArticleListItem
            title='Test-driving React Hooks'
            date='2019-05-22'
            link='/posts/test-driving-react-hooks'
          />
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
  </div>
)

export default BlogIndex
