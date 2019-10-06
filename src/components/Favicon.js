import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
// import styled from 'styled-components'

const Favicon = () => (
  <StaticQuery query={graphql`
  {
  allWordpressWpFavicon{
      edges{
        node{
          url{
            source_url
          }
        }
      }
    }
  }
  `} render={props => (
    <link rel="shortcut icon" type="image/x-icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} alt="iPhoneVPN学部"/>
  )} />
);

export default Favicon;