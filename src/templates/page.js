import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({pageContext, location}) => {
  // パンくず設定
  let pageLocation = location.pathname.replace('/', '');
  const pageScrumble = pageLocation = 'home' ? '' : pageLocation; 
  return(
  <div>
  <SEO 
    lang = 'ja'
    title = {pageContext.title}
    metaDescription = {pageContext.excerpt}
  />
  <Layout location={pageScrumble} title={pageContext.title} locateLink={pageContext.link}>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
  </div>
);}