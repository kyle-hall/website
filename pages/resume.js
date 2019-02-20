import BlogLayout from '../components/BlogLayout'

const Resume = _ => (
  <BlogLayout>
    <div style={layoutStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>Resume</h1>
      <p style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>
        I don't have a good handle on how I would build this, yet. In lieu of a beautiful,
        responsive resume, I have this list of my skills:
      </p>
      <ul style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>CSS and HTML</li>
        <li>C#</li>
        <li>Test-driven Development</li>
      </ul>
    </div>
  </BlogLayout>
)

export default Resume

const layoutStyle = {
  marginTop: 80,
  lineHeight: 1.5
}
