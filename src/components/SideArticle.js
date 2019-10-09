import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components'

const Article = styled(Link)`
  display: flex;
  padding: 1rem;
  align-items: center;
  height: 10rem;
  border-bottom: 0.1rem solid #e0e0e0;
  text-decoration: none;
  color: #1a0dab;

  :last-child{
    border-bottom: 0;
  }

  img{
    width: 12rem;
    height: 8rem;
    border-radius: 0.5rem;
  }

  h4{
    width: 16rem;
    padding: 0.2rem 1rem;
    @media screen and (min-width: 0px) and (max-width: 900px) {
      width: 85%;
      margin: 0 auto;
    }
  }
`

const SideArticle = () => {
  return (
    <StaticQuery query={graphql`
    {
      allWordpressPost(filter: {
        id: {
          in: ["07a05e2f-d369-52e7-8e0c-26856ef6c065","03645044-8c05-5727-91a4-63a23a597f49","784d4089-02c8-5d14-b5ec-a1e28841c78b","5087b784-a17c-5746-b315-3e920d374af6","e7ccb856-5cbe-5bbe-9f90-cd7aee71ccbd","dc071667-e31d-5972-96c1-3c0e6859ac8b"],
        }
      })
      {
       edges{
        node{
          id
          title
          slug
          featured_media{
            source_url
          }
        }
      }
    }
    }
    ` } render={props => props.allWordpressPost.edges.map(postItem => (
      <Article to={`/post/${postItem.node.slug}`} key={postItem.node.id}>
          <img src={postItem.node.featured_media.source_url} alt="サムネイル"></img>
          <h4>{postItem.node.title}</h4>
      </Article>
    ))}/>
  )
}

export default SideArticle;