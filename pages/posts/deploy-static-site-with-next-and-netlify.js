import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>
        How to Deploy a Static Site with Next.js and Netlify
      </h1>
      <p className='intro' style={blogStyles.contentStyle}>
        So, I've got a little story for you today about Gradle. It's a funny/frustrating story of
        one developer's journey over the course of several months towards a better understanding of
        his tools.
      </p>
      <article>
        <section>
          <h2 style={blogStyles.headerStyles}>Some Definitions</h2>
          <p style={blogStyles.contentStyle}>
            There are, potentially, a bunch of new terms in this article that I thought I'd define
            up-front.
          </p>
          <h3 style={blogStyles.headerStyles}>What is a static site?</h3>
          <p style={blogStyles.contentStyle}>
            A static site is a website where, for the most part, what you see is what you get. The
            content of a page is read from the server on request, and nothing is added to it - no
            database, no data server.
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Getting Started with Next.js</h2>
          <p style={blogStyles.contentStyle}>s;dkflsdf';ksf</p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Deploying with Netlify</h2>
          <p style={blogStyles.contentStyle}>lsdfj;dsf;d</p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Conclusion</h2>
          <p style={blogStyles.contentStyle}>lkksdjf;asjdfljkas</p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
