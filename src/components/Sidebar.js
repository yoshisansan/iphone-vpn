import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'
import SideArticle from './SideArticle'
import ProfileCard from './ProfileCard'

const SideBarWrapper = styled.div`
  width: 30rem;
  margin-right: 1rem;
  border-radius: 1rem;
  @media screen and (min-width: 0px) and (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
  }
`
const ArticleWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 3rem;

  p{
    border-radius: 3rem 3rem 0 0;
    text-align: center;
    background-color: #000;
    color: #fff
    height: 3rem;
    font-weight: bold;
  }
  .circle{
    height: 5rem;
    background-color: #000;
    text-align: center;
    line-height: 7.5rem;
    border-radius: 0 0 3rem 3rem;
  }
  .circle span{
    display: inline-block;
    width:3rem;
    height:3rem;
    border-radius:50%;
    border: 0.2rem solid #e0e0e0;
    background-color: #000;
  }
`

const Sidebar = () => (
  <StaticQuery query={graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: {
     name: {
       eq: "Footer"
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
    <SideBarWrapper>
      <ArticleWrapper>
        <p>オススメ記事</p>
        <SideArticle/>
        <div className="circle"><span></span></div>
      </ArticleWrapper>
      <ProfileCard/>
    </SideBarWrapper>
  )

  } />
);

export default Sidebar;