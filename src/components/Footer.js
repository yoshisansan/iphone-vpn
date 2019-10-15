import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo'

const LogoArea = styled.div`
  display: inlin-block;
  height: 8rem;
  background-color: #000;
  text-align: center;
  img {
    width: 26rem;
    padding: 1.4rem;
  }
  @media screen and (min-width: 0px) and (max-width: 900px) {
    padding-top: 2rem;
  }
`

const FooterWrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding-left: 3rem;
  a{
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: bold;
    color: #91e9ff;
  }
  @media screen and (min-width: 0px) and (max-width: 900px) {
    padding-left: 0;
    padding: 0 2rem;
    text-align: center;
  }
`

const FooterFlex = styled.div`
  display: flex;
  @media screen and (min-width: 0px) and (max-width: 900px) {
    flex-direction: column;
    justify-contents: center;
  }
`

const MenuWrapper = styled.div`
  padding-top: 2rem;
  a{color: #fff;}
`

const MenuItem = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  padding: 1.5rem;
  display: inline-block;
`
const CopyRights = styled.div`
  display: block;
  font-size: 2rem; 
  padding: 1.4rem 1.4rem 3rem 1.4rem;
`

const Footer = () => (
  <StaticQuery query={graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: {
     name: {
       eq: "Main menu"
     }
   }){
     edges {
       node{
         items{
           title
           object_slug
         }
       }
     }
   }
 } 
  `} render={props => (
    <FooterWrapper>
      <FooterFlex>
        <LogoArea>
          <Logo />
        </LogoArea>
        <MenuWrapper>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <MenuItem to={`/post/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            ))}
        </MenuWrapper>
      </FooterFlex>
      <CopyRights>
              <span>Copy Rights よしいたけ <a href="https://basho.world">移動を暮らしにブログ運営者</a></span>
      </CopyRights>
    </FooterWrapper>
  )

  } />
);

export default Footer;