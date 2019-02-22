import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import Article from "../components/Article";

const PostList = styled.li`
  list-style: none;
  width: 90%;
  padding-top: 2em;
  margin-left: auto;
  margin-right: auto;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <PostList>
      {data.allDatoCmsPost.edges.map(({ node: post }) => (
        <Article
          title={post.title}
          body={post.postContent}
          postDate={post.postDate}
          urlText="Read More"
          summaryLimit="60"
          slug={post.slug}
          key={post.id}
        />
      ))}
    </PostList>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsPost {
      edges {
        node {
          id
          title
          slug
          postContent
          postDate
        }
      }
    }
  }
`;
