import BlogLayout from '../components/BlogLayout'

const About = _ => (
  <BlogLayout>
    <div style={layoutStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>About Me</h1>
      <p style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>
        Hi, I'm Kyle Hall. I'm a fullstack software developer working out of Des Moines, Iowa in the
        United States. I've been working as a developer for nearly 4 years now. In that time, I've
        worked with many different programming languages and tech stacks, including Java, Scala, C#,
        and JavaScript. I love the web, and that's where I like to spend most of my time. I have
        worked with React, Vue, and a little bit of Angular, and I prefer React right now. I've also
        done some mobile development using React-Native. Right now, I'm passionate about mastering
        the programming of anything you could see in a browser. Mostly that means I'm trying to get
        better at CSS and HTML. Thanks for your interest in my blog.
      </p>
    </div>
  </BlogLayout>
)

export default About

const layoutStyle = {
  marginTop: 80,
  lineHeight: 1.5
}
