import Footer from './Footer'
import Head from 'next/head'

const BlogLayout = props => (
  <div>
    <Head>
      <script async src='https://www.googletagmanager.com/gtag/js?id=UA-141920351-1' />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-141920351-1');
`}
      </script>

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
