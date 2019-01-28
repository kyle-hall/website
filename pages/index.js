
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/base.css" />
      <link rel="stylesheet" href="/static/styles.css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Sarabun" rel="stylesheet" />
    </Head>
    <header>
      <h1>Kyle Hall</h1>
      <h4>Software Developer</h4>

      <nav>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
      </nav>
    </header>
  </div>
)
