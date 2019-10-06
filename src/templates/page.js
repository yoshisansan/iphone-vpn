import React from 'react'
import Layout from '../components/layout'

export default ({pageContext, location}) => {
  
  // パンくず設定
  let pageLocation = location.pathname.replace('/', '');
  const pageScrumble = pageLocation = 'home' ? '' : pageLocation; 
  return(
    <Layout location={pageScrumble}>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);}