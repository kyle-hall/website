
import Footer from './Footer'

const BlogLayout = props => (
  <div style={containerStyles}>
    {props.children}
    <Footer></Footer>
  </div>
)

export default BlogLayout

const containerStyles = {
  width: '92%',
  maxWidth: '50em',
  arginTop: 0,
  marginBottom: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  fontFamily: 'Monteserrat'
}
