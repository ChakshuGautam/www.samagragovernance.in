import "../styles/BlogDetails.scss";

import Content, { HTMLContent } from "../components/Content";
import { Link, graphql } from "gatsby";

import Helmet from "react-helmet";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Script from "react-inline-script"
import React,{useEffect} from "react";
import { kebabCase } from "lodash";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  htmlContent,
  helmet
}) => {


  const PostContent = contentComponent || Content;

  
  if (!content) {
    return <div />;
  }
  return (
    <section className="section">
      {helmet || ""}
      <div className={"blog-banner"}>
        <div
          className="translucent-dark-overlay"
          style={{ height: "auto" }}
        />
        <div className=" container content-section">
          <div className="title">
            {content && content.title ? content.title : "Our Blog"}
          </div>
        </div>
      </div>
      <div className={"container blog-detail-section"}>
        <div className="row">
          <div className="col-md-12 ">
            <div className="author-section">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    !!content.authorImage &&
                    !!content.authorImage.childImageSharp
                      ? content.authorImage.childImageSharp.fluid.src
                      : content.authorImage
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}/>
              <div className="details">
                <div className="name">{content.author}</div>
                <div className="timestamp">{content.date}</div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <PostContent content={htmlContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;


  return (
    <Layout slug={data.markdownRemark.fields.slug}>
      <BlogPostTemplate
        content={post.frontmatter}
        htmlContent={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
     <div id="graphcomment"></div>
      <Script>
        {`
          window.gc_params = {
              graphcomment_id: 'samagragovernance',
              fixed_header_height: 0,
          };

          (function() {
            var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
            gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
          })();
        `}
      </Script>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        authorImage {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`;
