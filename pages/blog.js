
import Link from 'next/link'

const BlogIndex = props => (
  <div style={containerStyle}>
    <div style={{maxWidth: 900, marginTop: 0, marginBottom: 0, marginRight: 'auto', marginLeft: 'auto'}}>
      <h1>Blog Posts</h1>
      <Link href="/posts/tdd-data-structures-part-one">
        <a>My First Post - 2019-01-27</a>
      </Link>
    </div>
  </div>
)

export default BlogIndex

const containerStyle = {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Monteserrat'
}
