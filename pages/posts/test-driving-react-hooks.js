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
          React Hooks are the best new thing from the popular JavaScript framework. They offer an
          alternative to class-based components,
        </p>
        <section>
          <h2 style={blogStyles.headerStyles}>Class-based vs Functional Components</h2>
          <p style={blogStyles.contentStyle}>
            As someone who likes functional programming, I prefer function components better over
            class-based components. But, what's the difference?
          </p>
          <h3 style={blogStyles.headerStyles}>Functional Components</h3>
          <p style={blogStyles.contentStyle}>
            Functional components are very simple. They are React components that are just
            JavaScript functions. They take props, can process those props or calculate other data
            needed for the render, and then return a chunk of JSX.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
