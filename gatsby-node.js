const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPost.edges.map(({ node: post }) => {
        createPage({
          path: `post/${post.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.slug,
          },
        });
      });
      resolve();
    });
  });
};
