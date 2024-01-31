import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';
import { RightArrow } from './RightArrow';

export const SuccessStoriesSection = ({ data }) => {
  const location = useLocation();
  const { allMarkdownRemark: posts } = data;
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [mobile, setMobile] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  

  if (!posts?.edges) return <></>;
  else
    return posts.edges.map((post, index) => {
      if (post.node.fields.slug.includes(path)) {
        return <React.Fragment key={post.node.id}></React.Fragment>;
      }
      return (
        <a href={post.node.fields.slug} target="_blank">
          <div
            className={`card-wrapper-case-study ${
              hoveredIndex === index ? 'hovered' : ''
            } `}
            style={{
              margin: mobile ? '50px auto' : '',
              height: mobile ? '200px' : '250px',
              width: mobile ? '275px' : '350px',
            }}
            onMouseLeave={() => setHoveredIndex(-1)}
            onMouseEnter={() => setHoveredIndex(index)}>
            <div
              style={{
                backgroundImage: `url(${post.node.frontmatter.featuredimage.childImageSharp.fluid.src})`,
                height: '100%',
                borderRadius: '10px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div
              style={{
                background: '#F5F7FA',
                borderRadius: '10px',
                height: mobile ? '150px' : '150px',
                width: mobile ? '230px' : '300px',
                position: 'relative',
                top: '-80px',
                margin: 'auto',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <div
                className={'headingCaseStudy'}
                style={{
                  minHeight: '40px',
                  fontSize: '16px',
                  color: '#717171',
                  flex: 0.8,
                  padding: '20px 10px',
                }}>
                {post.node.frontmatter.title}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: '#025300',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  flex: 0.2,
                  padding: '20px',
                }}>
                Read More{' '}
                <RightArrow color="#025300" height="15px" width="15px" />
              </div>
            </div>
          </div>
        </a>
      );
    });
};

export default () => (
  <StaticQuery
    query={graphql`
      query SuccessStoriesSectionQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
          filter: {
            frontmatter: { templateKey: { in: ["case-study", "ksk"] } }
          }
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
    render={(data, count) => <SuccessStoriesSection data={data} />}
  />
);
