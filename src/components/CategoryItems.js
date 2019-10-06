import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import PortfolioItems from '../../../../../Gatsby-Udemy/vpnsite/src/components/PortfolioItems';

const CategoryItems = () => {
  return (
    <StaticQuery query={graphql`
    {
      allWordpressWpCategory{
        edges{
          node{
            id
            title
            excerpt
            content
            featured_media{
              source_url
            }
          }
        }
      }
    }
    ` } render={props => props.allWordpressWpCategory.edges.map(categoryItem => (
      <div key={categoryItem.node.id}>
        <h2>{PortfolioItems.node.title}</h2>
        <img src={PortfolioItems.node.featured_media.source_url} alt="Thumbnail"></img>
        <div dangerouslySetInnerHTML={{__html: categoryItem.node.excerpt}}></div>
      </div>
    ))}/>
  )
}