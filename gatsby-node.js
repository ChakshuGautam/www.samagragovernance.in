const _ = require('lodash')
const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              id
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(edge => {
            const id = edge.node.id;
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                ),
                // additional data can be passed via context
                context: {
                    id
                },
            })
        })
        // Tag pages:
        let tags = []
    })
};

exports.sourceNodes = ({boundActionCreators, getNodes, getNode}) => {
    const {createNodeField} = boundActionCreators;

    const postsOfAuthors = {};
    // iterate thorugh all markdown nodes to link books to author
    // and build author index
    const markdownNodes = getNodes()
        .filter(node => node.internal.type === "MarkdownRemark")
        .forEach(node => {
            // console.log(node);
            // if (node.frontmatter.author) {
            //     const authorNode = getNodes().find(
            //         node2 =>
            //             node2.internal.type === "MarkdownRemark" &&
            //             node2.frontmatter.title === node.frontmatter.author
            //     );
            //
            //     if (authorNode) {
            //         createNodeField({
            //             node,
            //             name: "author",
            //             value: authorNode.id,
            //         });
            //
            //         // if it's first time for this author init empty array for his posts
            //         if (!(authorNode.id in postsOfAuthors)) {
            //             postsOfAuthors[authorNode.id] = [];
            //         }
            //         // add book to this author
            //         postsOfAuthors[authorNode.id].push(node.id);
            //     }
            // }
        });
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
};
