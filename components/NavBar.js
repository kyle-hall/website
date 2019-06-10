import Link from 'next/link'
import Head from 'next/head'

const NavBar = _ => (
  <div>
    <Head>
      <link rel='stylesheet' href='/static/blogStyles.css' />
    </Head>
    <header className='header-bar'>
      <nav>
        <ul className='nav-bar'>
          <li>
            <Link href='/'>
              <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/resume'>
              <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)

export default NavBar
