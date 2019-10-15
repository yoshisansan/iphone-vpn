import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'
// import SiteInfo from './SiteInfo';
import Logo from './Logo';

const LogoArea = styled.div`
  height: 8rem;
  width: 100%;
  background-color: #fff;
  text-align: center;
  img {
    width: 26rem;
    padding: 1.4rem;
  }
`

const MainMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #000;
  color: #fff;
  @media screen and (min-width: 0px) and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 100%;
  }
`

const MenuItem = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  padding: 1.5rem;
`

const MainMenu = () => (
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
    <div>
    <LogoArea>
      <Logo />
    </LogoArea>
    <MainMenuWrapper>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem to={`/post/${item.object_slug}`} key={item.title}>
          {item.title}
        </MenuItem>
      ))}
    </MainMenuWrapper>
    </div>
  )

  } />
);

export default MainMenu;