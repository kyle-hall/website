import Link from 'next/link'

const ArticleListItem = ({ title, date, link }) => (
  <div className='article-listing'>
    <Link href={link}>
      <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>
        <span className='article-listing__span'>{title}</span> -{' '}
        <span className='article-listing__span--small' />
        {date}
      </a>
    </Link>
  </div>
)

export default ArticleListItem
