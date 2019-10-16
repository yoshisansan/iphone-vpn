import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
export default ({pageContext, location}) => {

  // パンくず設定
  let pageLocation = location.pathname.split('/');
  pageLocation.pop();
  pageLocation.shift();
  let postScrumble = 'home / ' + pageLocation + ' / ' + (pageContext.title);

  //サムネ画像があるかないか
    let ThumbImg = (pageContext.featured_media);
    if(!ThumbImg) {
      ThumbImg = {source_url: 'null'};
    }

  return(
  <div>
    <SEO 
    lang = 'ja'
    title = {pageContext.title}
    metaDescription = {pageContext.excerpt}
    />
    <Layout location={postScrumble} title={pageContext.title} locateLink={pageContext.link}>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        {ThumbImg.source_url !== 'null' && <img src={ThumbImg.source_url} alt={pageContext.id} />}
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
  </div>
);
}