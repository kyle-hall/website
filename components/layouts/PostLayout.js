import BlogLayout from './BlogLayout'
import PostTitle from '../views/postTitle'

const PostLayout = props => (
  <BlogLayout>
    <div className='post-container'>
      <PostTitle title={props.title} />
      {props.children}
    </div>
  </BlogLayout>
)

export default PostLayout
