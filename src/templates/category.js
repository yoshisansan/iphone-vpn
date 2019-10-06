import React from 'react'
import Layout from '../components/layout'


export default ({pageContext, location}) => {

  // パンくず設定
  let pageLocation = location.pathname.split('/');
  console.log(pageLocation);
  pageLocation.pop();
  pageLocation.shift();
  let postScrumble = 'home / ' + pageLocation + ' / ' + (pageContext.title);
  // const seperate = location.pathname.replace(/\//g,' / ');

  return(
  <Layout location={postScrumble}>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);
}