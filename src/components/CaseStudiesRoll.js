import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

class CaseStudiesRoll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: typeof window !== 'undefined' && window.innerWidth <= 768,
    };
  }

  handleResize = () => {
    this.setState({
      mobile: typeof window !== 'undefined' && window.innerWidth <= 768,
    });
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const clean_posts = posts.filter(
      (obj) => obj.node.frontmatter.buttonText !== null
    );
    const { mobile } = this.state;
    return (
      <>
        <div className="blogs-section" style={{paddingBottom: '100px'}}>
          <div className="row" style={{justifyContent: 'center'}}>
            {clean_posts.map(({ node: post }) => {
              return (
                <div
                style={{ minHeight: '350px', minWidth: mobile ? '200px' : '350px', margin: mobile ? '15px 0' : '0 15px' }}
                className="col-lg-3 col-md-4 col-sm-6 col-xs-1"
                key={post.id}>
                  <div
                    className="blog-wrapper"
                    style={{ position: 'relative' }}>
                    <div
                      style={{ minHeight: '350px', minWidth: mobile ? '200px' : '350px' }}
                      className="flip-card"
                      >
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
                            {/* <div
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
                            </div> */}
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
          filter: { frontmatter: { templateKey: { in: ["case-study", "ksk"] } } }
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
