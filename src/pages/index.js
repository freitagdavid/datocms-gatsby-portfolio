import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import theme from '../themes/material-ocean-hc';

const linkTextColor = 'black';

const PostList = styled.li`
  list-style: none;
  width: 70%;
  padding-top: 2em;
`;
const PostItem = styled.div`
  border: solid black 1px;
  border-radius: 6px;
  padding: 5px 0 5px 15px;
  height: 100px;
`;
const Card = styled.figure``;
const CardCaption = styled.figcaption`
  border-bottom: solid black 2px;
  width: 50%;
  a {
    text-decoration: none;
    color: ${theme.linkTextColor};
  }
`;
const CardHeader = styled.h6``;
const CardBody = styled.div``;

const IndexPage = ({ data }) => (
  <Layout>
    <PostList>
      {data.allDatoCmsPost.edges.map(({ node: post }) => (
        <PostItem key={post.id}>
          <Card>
            <CardCaption>
              <CardHeader>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </CardHeader>
            </CardCaption>
            <CardBody>
              <p>{post.summary}</p>
            </CardBody>
          </Card>
        </PostItem>
      ))}
    </PostList>
  </Layout>
);

// const IndexPage = ({ data }) => (
//   <Layout>
//     <Masonry className="showcase">
//       {data.allDatoCmsWork.edges.map(({ node: work }) => (
//         <div key={work.id} className="showcase__item">
//           <figure className="card">
//             <Link to={`/works/${work.slug}`} className="card__image">
//               <Img fluid={work.coverImage.fluid} />
//             </Link>
//             <figcaption className="card__caption">
//               <h6 className="card__title">
//                 <Link to={`/works/${work.slug}`}>{work.title}</Link>
//               </h6>
//               <div className="card__description">
//                 <p>{work.excerpt}</p>
//               </div>
//             </figcaption>
//           </figure>
//         </div>
//       ))}
//     </Masonry>
//   </Layout>
// )

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
