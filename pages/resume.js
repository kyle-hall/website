import InfoPageLayout from '../components/InfoPageLayout'
import NavBar from '../components/NavBar'

const Resume = _ => (
  <div>
    <NavBar />
    <InfoPageLayout>
      <h1 className='info-page__header'>Resume</h1>
      <p>
        I don't have a good handle on how I would build this, yet. In lieu of a beautiful,
        responsive resume, I have this list of my skills:
      </p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>CSS and HTML</li>
        <li>C#</li>
        <li>Test-driven Development</li>
      </ul>
    </InfoPageLayout>
  </div>
)

export default Resume
