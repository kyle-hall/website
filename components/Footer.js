import Link from 'next/link'

const Footer = props => (
  <footer style={footerStyle}>
    <hr />
    <div style={linkContainerStyles}>
      <Link href='https://twitter.com/khalligans47'>
        <a style={linkStyles}>
          <img src='/static/images/twitter.svg' alt='black and white Twitter logo' />
        </a>
      </Link>
      <Link href='https://github.com/kyle-hall'>
        <a style={linkStyles}>
          <img src='/static/images/github.svg' alt='black and white GitHub logo' />
        </a>
      </Link>
    </div>
  </footer>
)

export default Footer

const footerStyle = {
  width: '50%',
  height: 200,
  margin: '0 auto',
  paddingTop: 100
}

const linkContainerStyles = {
  height: 200,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const linkStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: 75,
  height: 75
}
