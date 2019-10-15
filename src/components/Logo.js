import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
// import styled from 'styled-components'

const Logo = () => (
  //あとで修正する
  <StaticQuery query={graphql`
  {
  allWordpressWpLogo{
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
    <Link to="/home"><img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="iPhoneVPN学部"/></Link>
  )} />
);

export default Logo;