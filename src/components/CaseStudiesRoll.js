import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { PrimaryButton } from '../components/PrimaryButton/PrimaryButton';

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
                    <div className="flip-card">
                      <div className="front">
                        {post.frontmatter.featuredimage ? (
                          <div
                            className="image-wrapper"
                            style={{
                              backgroundImage: `url(${post.frontmatter
                                .featuredimage.childImageSharp.fluid.src ||
                                post.frontmatter.featuredimage})`,
                              transition: 'background 0.5s ease-out',
                              display: 'flex',
                              alignItems: 'center',
                            }}>
                            <p
                              style={{
                                background: '#2B2A2A',
                                width: '100%',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '18px',
                              }}>
                              {post.frontmatter.projectId}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      <div className="back">
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                          }}>
                          <p
                            style={{
                              width: '100%',
                              textAlign: 'center',
                              margin: 'auto auto 5% auto',
                              color: 'white',
                              fontSize: '18px',
                            }}>
                            {post.frontmatter.projectId}
                          </p>
                          <p
                            style={{
                              margin: '5%',
                              color: 'white',
                              fontSize: '16px',
                              textShadow: '1px 1px 2px black',
                              textAlign: 'center',
                            }}>
                            {post.frontmatter.title}
                          </p>
                          <PrimaryButton
                            style={{
                              margin: 'auto auto 5% auto',
                              pointerEvents: 'auto',
                            }}
                            classes={'py-1 text-uppercase'}
                            text={post.frontmatter.buttonText}
                            click={() => {
                              window.open(post.fields.slug, '_blank');
                            }}
                          />
                        </div>
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
