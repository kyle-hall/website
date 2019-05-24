import React from 'react'
import Link from 'next/link'

import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>
        Test-Driving React Hooks
      </h1>
      <article>
        <p style={blogStyles.contentStyle}>
          <Link href={'/posts/introducing-react-hooks'}>
            <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>Last time</a>
          </Link>
          , I talked about what React hooks are, how they enable deeper use of functional
          components, and why you might want to use functional components over class-based
          components. This time, I'd like to focus on testing React hooks, specifically test-driving
          them into an application.
        </p>
        <p style={blogStyles.contentStyle}>
          I'd like to note up front that I'm going to be assuming a couple things in this article.
          First, I assume you have npm installed and know how to use it. And second, you know how to
          create a new react application (I recommend using{' '}
          <a href="https://facebook.github.io/create-react-app/docs/getting-started">
            create-react-app
          </a>{' '}
          to get started if you don't know how or just want to get something started quickly).
        </p>
        <section>
          <h2 style={blogStyles.headerStyles}>Testing Options for Hooks</h2>
          <p style={blogStyles.contentStyle}>
            Before getting too far, I'd like to start with a quick primer on testing React. I plan
            to write a much bigger article about this, but an introduction to the main players
            should be sufficient for today.
          </p>
          <h3 style={blogStyles.headerStyles}>The Players</h3>
          <p style={blogStyles.contentStyle}>There are three main players for testing in React:</p>
          <ul style={blogStyles.contentStyle}>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>react-testing-library</li>
          </ul>
          <p style={blogStyles.contentStyle}>
            <a href="https://jestjs.io/">Jest</a> is a very popular JavaScript test runner. It
            provides many utilities for testing your applications, and I highly recommend it.
          </p>
          <p style={blogStyles.contentStyle}>
            <a href="https://airbnb.io/enzyme">Enzyme</a> is a testing utility for React. It
            provides the ability to render the components in your application and search for
            elements in the render tree.
          </p>
          <p style={blogStyles.contentStyle}>
            <a href="https://testing-library.com/docs/react-testing-library/intro">
              react-testing-library
            </a>{' '}
            is another testing library for React that sells itself as a replacement for Enzyme.
          </p>
          <p style={blogStyles.contentStyle}>
            For this article, we will be using Jest and react-testing-library. I am far more
            familiar with Enzyme, but, unfortunately, as of the time of this post it does not fully
            support hooks at this time. Follow{' '}
            <a href="https://github.com/airbnb/enzyme/issues/2011">this</a> GitHub issue for more
            information and updates on its support for React hooks.
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Driving the Hook In</h2>
          <p style={blogStyles.contentStyle}>
            Before getting too far, I'd like to start with a quick primer on testing React. I plan
            to write a much bigger article about this, but an introduction to the main players
            should be sufficient for today.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
