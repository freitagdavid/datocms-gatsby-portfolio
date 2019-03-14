import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
      <div className="sheet__inner">
        <div className="sheet__title">{data.datoCmsPost.title}</div>
        <div className="sheet__post-date">{data.datoCmsPost.post_date}</div>
        <div
          className="sheet__post-content"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPost.postContentNode.childMarkdownRemark.html
          }}
        />
      </div>
    </article>
  </Layout>
);

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      postDate
      postContentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
