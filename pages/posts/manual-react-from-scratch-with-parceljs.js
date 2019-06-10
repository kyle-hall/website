import PostLayout from '../../components/layouts/PostLayout'

const Post = props => (
  <PostLayout title={'Add your title here'}>
    <header>
      <p>This is the introduction to the article</p>
    </header>
    <section>
      <h2>This is the first section of the article</h2>
      <p>This is some content in the first section of the article</p>
    </section>
  </PostLayout>
)

export default Post
