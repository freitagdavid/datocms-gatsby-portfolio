import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import theme from '../themes/material-ocean-hc'
import Truncate from 'react-truncate'
import normalize from 'normalize-text'

const linkTextColor = 'black'

const PostList = styled.li`
    list-style: none;
    width: 72%;
    padding-top: 2em;
    margin-left: auto;
    margin-right: auto;
`
const PostItem = styled.div`
    border: solid black 1px;
    border-radius: 6px;
    padding: 5px 0 5px 0px;
`
const Card = styled.figure``
const CardCaption = styled.figcaption`
    margin-left: auto;
    margin-right: auto;
    border-bottom: solid black 2px;
    width: 100%;
    a {
        text-decoration: none;
        color: ${theme.linkTextColor};
    }
`
const CardHeader = styled.h6`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`
const CardBody = styled.div`padding: 0 15px;`

const IndexPage = ({ data }) => (
    <Layout>
        <PostList>
            {data.allDatoCmsPost.edges.map(({ node: post }) => (
                <PostItem key={post.id}>
                    <Card>
                        <CardCaption>
                            <CardHeader>
                                <Link to={`/post/${post.slug}`}>{post.title}</Link>
                                <date>{post.postDate}</date>
                            </CardHeader>
                        </CardCaption>
                        <CardBody>
                            <Truncate
                                lines={3}
                                ellipsis={
                                    <span>
                                        ...<Link to={`/post/${post.slug}`}>Read More</Link>
                                    </span>
                                }>
                                {post.postContent}
                            </Truncate>
                        </CardBody>
                    </Card>
                </PostItem>
            ))}
        </PostList>
    </Layout>
)

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

export default IndexPage

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
`
