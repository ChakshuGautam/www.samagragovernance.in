import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

class CaseStudiesRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const clean_posts = posts.filter(
      (obj) => obj.node.frontmatter.buttonText !== null
    );
    return (
      <>
        <div className="blogs-section">
          <div className="row">
            {clean_posts.map(({ node: post }) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-xs-1 mb-5"
                  key={post.id}>
                  <div
                    className="blog-wrapper"
                    style={{ position: 'relative' }}>
                    <div
                      className="flip-card"
                      style={{ minHeight: '350px', minWidth: 'fit-content' }}>
                      <div
                        className="front"
                        style={{
                          minHeight: 'fit-content',
                          minWidth: 'fit-content',
                        }}>
                        {post.frontmatter.featuredimage ? (
                          <div
                            className="image-wrapper"
                            style={{
                              position: 'relative',
                              backgroundImage: `url(${post.frontmatter
                                .featuredimage.childImageSharp.fluid.src ||
                                post.frontmatter.featuredimage})`,
                              transition: 'background 0.5s ease-out',
                              display: 'flex',
                              alignItems: 'center',
                              height: '150px',
                              minWidth: '250px',
                              borderRadius: '20px 20px 0 0',
                              overflow: 'hidden',
                            }}>
                            <div
                              className="image-overlay"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <p
                                style={{
                                  color: '#fff',
                                  textAlign: 'center',
                                  margin: '0',
                                  fontWeight: 'bold'
                                }}>
                                {post?.frontmatter?.impactNumber}
                              </p>
                            </div>
                          </div>
                        ) : null}
                        <p
                          style={{
                            margin: '5px auto',
                            padding: '5px 0',
                            width: '95%',
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight: 'bolder',
                            background: post?.frontmatter?.projectId_bg || 'white',
                            color: post?.frontmatter?.projectId_fc || 'black'
                          }}>
                          {post?.frontmatter?.projectId}
                        </p>
                        <p
                          style={{
                            margin: '5%',
                            fontSize: '16px',
                            textAlign: 'center',
                          }}>
                          {post?.frontmatter?.title}
                        </p>
                        <button
                          className="case-study-roll-btn"
                          onClick={() => {
                            post?.frontmatter?.buttonText != 'Coming soon' &&
                              window.open(post?.fields?.slug, '_blank');
                          }}>
                          {post?.frontmatter?.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

CaseStudiesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudiesRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                projectId
                projectId_bg
                projectId_fc
                impactNumber
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                buttonText
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudiesRoll data={data} count={count} />}
  />
);
