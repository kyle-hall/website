const Footer = props => (
  <footer className='.footer'>
    <hr />
    <div className='link-container'>
      <a href='https://twitter.com/khalligans47' className='footer__a'>
        <img src='/static/images/twitter.svg' alt='black and white Twitter logo' />
      </a>
      <a href='https://github.com/kyle-hall' className='footer__a'>
        <img src='/static/images/github.svg' alt='black and white GitHub logo' />
      </a>
    </div>
  </footer>
)

export default Footer

const footerStyle = {
  width: '75%',
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
