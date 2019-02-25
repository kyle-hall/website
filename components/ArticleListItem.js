import Link from 'next/link'

const ArticleListItem = ({ title, date, link }) => (
  <div style={articleStyle}>
    <Link href={link}>
      <a style={{ fontFamily: ['Sarabun', 'sans-serif'] }}>
        <span style={titleStyle}>{title}</span> - {date}
      </a>
    </Link>
  </div>
)

export default ArticleListItem

const titleStyle = {
  fontSize: 24
}

const articleStyle = {
  marginBottom: 30
}
