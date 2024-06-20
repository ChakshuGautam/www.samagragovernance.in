import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();  
    this.state={
      posts: [],
      filteredPosts: []
    }
  }
  
  componentDidMount(){
    
    this.setState({
      posts:this.props.data.allMarkdownRemark.edges,
    })
  }
  
  fetchData(value){
   
    this.setState({
      posts: this.props.data.allMarkdownRemark.edges.filter((edge) => {
        if (edge.node && edge.node.frontmatter && edge.node.frontmatter.tags && edge.node.frontmatter.tags.toLowerCase().includes(value.toLowerCase())) return edge;
    })
    })
  }


  render() {
    
    return (
      <div className="blogs-section">
        <div className="filter-row">
          <div className="blog-filter col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <input type="text" className='filter-input w-93' placeholder="Search.."
              ref={this.myRef}
            />
          </div>
          <div className="filter-button-div">
            <button className="filter-button f-15"
            onClick={ () => {
              this.fetchData(this.myRef.current.value)
            }
            }>Search 
            <span>&gt;</span></button>

            <button className="filter-button f-15 mx-2"
            onClick={ () => {
                this.setState({
                  posts:this.props.data.allMarkdownRemark.edges
                })
              this.myRef.current.value="";

            }
            }>Clear 
            <span>&gt;</span></button>
          </div>
        </div>
        <div className="row">
          { 
          
          
          this.state.posts.length ? this.state.posts.map(({ node: post }) => {
            return (
              <a
                className="col-lg-3 col-md-4 col-sm-6 col-xs-1"
                key={post.id}
                target={'_blank'}
                href={post.fields.slug}>
                <div className="blog-wrapper">
                  {post.frontmatter.featuredimage ? (
                    <div
                      className="image-wrapper"
                      style={{
                        backgroundImage: `url(${post.frontmatter.featuredimage
                          .childImageSharp.fluid.src ||
                          post.frontmatter.featuredimage})`,
                      }}></div>
                  ) : null}
                  <div className="content-wrapper">
                    <div className="heading">{post.frontmatter.title}</div>
                    <div className="posted-on">
                      by {post.frontmatter.author} on {post.frontmatter.date}
                    </div>

                    <div className="read-more">Read More</div>
                  </div>
                </div>
              </a>
            );
          }):<>
          <div className='no-data-found'>
            <div className='no-data'>
            <div className="no-data-icon"> <i className='fa fa-exclamation-circle'></i></div>
            <div className="no-data-title">
              No Data Found
            </div>
          </div>
          </div>
          
            </>}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                author
                tags
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
