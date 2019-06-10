import React from 'react'
import BlogLayout from './BlogLayout'

const PostLayout = props => (
  <BlogLayout>
    <div className='post-container'>
      <h1 className='post-container__h1--big'>{props.title}</h1>
      <article>{props.children}</article>
    </div>
  </BlogLayout>
)

export default PostLayout
