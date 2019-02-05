
import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ["Montserrat", "sans-serif"], fontSize: "3vw" }}>
        How to get Gradle to Show Test Output
      </h1>
      <article>
        <section>
          <h2 style={blogStyles.headerStyles}></h2>
          <p style={blogStyles.contentStyle}>
            Talk about how adding JaCoCo to your project led you on a multi-month journey
            to figure out how to see the tests in your project listed in the terminal
            whether they passed or failed only to discover they didn't show up
            because you added JaCoCo.

            Mention that the test names always showed up for failing tests.

            Victory is mine.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
