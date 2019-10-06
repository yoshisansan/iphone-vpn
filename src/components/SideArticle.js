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
    padding: 0.2rem 1rem;
  }
`

const SideArticle = () => {
  return (
    <StaticQuery query={graphql`
    {
      allWordpressPost(filter: {
        id: {
          in: ["e17864bf-81af-5cb4-b3d4-fdefda42707b","0d5fe5bb-c2d6-583f-8170-5be2c41a1f83","0748d16b-3c26-5af3-83a4-2dd62fd5a847","396d82f5-1826-565d-a860-ea837a5e3fe8","2fd5fce7-7314-574e-bc88-94e61e297a5f","b9a4d8d7-6450-598a-90ba-372b8f7281c4"],
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