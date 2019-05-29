import BlogLayout from './BlogLayout'

const InfoPageLayout = props => (
  <BlogLayout>
    <div className='info-page-container'>{props.children}</div>
  </BlogLayout>
)

export default InfoPageLayout
