import Footer from '../Footer'
import Head from 'next/head'

const BlogLayout = props => (
  <div>
    <Head>
      <link rel='stylesheet' href='/static/blogStyles.css' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat|Sarabun' rel='stylesheet' />
    </Head>
    <div className='blog-container'>
      {props.children}
      <Footer />
    </div>
  </div>
)

export default BlogLayout
