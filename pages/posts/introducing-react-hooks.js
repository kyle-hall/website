import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = _ => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>
        Introducing React Hooks
      </h1>
      <article>
        <p style={blogStyles.contentStyle}>
          React Hooks are the best new thing from the popular JavaScript framework. They offer an
          alternative to class-based components, which I am really happy about, and, apparently, so
          are a lot of other people. This feature went from being in alpha at the beginning of the
          year to getting released in a stable version in March.
        </p>
        <section>
          <h2 style={blogStyles.headerStyles}>Class-based vs Functional Components</h2>
          <p style={blogStyles.contentStyle}>
            As someone who likes functional programming, I prefer functional components better over
            class-based components. But, what's the difference?
          </p>
          <h3 style={blogStyles.headerStyles}>Class-based Components</h3>
          <p style={blogStyles.contentStyle}>
            Here's a quick list of the characteristics of class-based components:
          </p>
          <ul style={blogStyles.contentStyle}>
            <li>
              They are declared using the <span style={blogStyles.insetStyle}>class</span> keyword
              introduced in the ECMAScript 2015 standard.
            </li>
            <li>
              They extend the React component like so:{' '}
              <span style={blogStyles.insetStyle}>class ZenComponent extends React.Component</span>
            </li>
          </ul>
          <h3 style={blogStyles.headerStyles}>Functional Components</h3>
          <p style={blogStyles.contentStyle}>
            Functional components are very simple. They are React components that are just
            JavaScript functions. They take props as a function argument, can process those props or
            calculate other data needed for the render, and then return a chunk of JSX.
          </p>
          <h3 style={blogStyles.headerStyles}>Why would I ever use class-based components?</h3>
          <p style={blogStyles.contentStyle}>
            Well, the main reason is that bit about state and life-cycle methods from the section up
            above. Until quite recently, class-based components were the only way to have state or
            to access life-cyle methods in a React component. Functional components were relegated
            to the "dumb view" portion of React apps.
          </p>
          <p style={blogStyles.contentStyle}>
            This leads us nicely into the main topic for today...
          </p>
          <img
            src="https://media.giphy.com/media/ehTMCiPzFTiak/giphy.gif"
            alt="Nintendo's Super Smash Brother New Challenger Message"
          />
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>React Hooks</h2>
          <p style={blogStyles.contentStyle}>
            React Hooks are THE big new feature of React. And what do they do? They make functional
            components viable for use throughout your entire app.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
