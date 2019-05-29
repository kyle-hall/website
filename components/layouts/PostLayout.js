import BlogLayout from './BlogLayout'
import PostTitle from '../views/postTitle'

const PostLayout = props => (
  <BlogLayout>
    <div className='post-container'>
      <article>
        <PostTitle title={props.title} />
        {props.children}
      </article>
    </div>
  </BlogLayout>
)

export default PostLayout
