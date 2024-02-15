import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import {HomeTopSlider} from "../components/HomeComponents/HomeTopSlider/HomeTopSlider";
import {HomeSecondSection} from "../components/HomeComponents/HomeSecondSection/HomeSecondSection";
import HomeThirdSection from "../components/HomeComponents/HomeThirdSection/HomeThirdSection";
import HomeNewsSection from "../components/HomeComponents/HomeNewsSection/HomeNewsSection";

export const IndexPageTemplate = ({
                                      parentDomains,
                                      data
                                  }) => (
    <React.Fragment>
        {
            data && data.subBanners ? <React.Fragment>
                <HomeTopSlider baseBanner={data.baseBanner} subBanners={data.subBanners}/>
                <HomeSecondSection homeContent={data}/>
            </React.Fragment> : <span/>
        }
        <HomeThirdSection parentDomains={parentDomains}/>
        <HomeNewsSection/>
    </React.Fragment>
);

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: []
        }
    }

    componentDidMount() {
        const self = this;
        if (window.localStorage.getItem('domains')) {
            const domains = [];
            JSON.parse(window.localStorage.getItem('domains')).forEach((d) => {
                domains.push({...d.node.frontmatter})
            });
            self.setState({domains: JSON.parse(JSON.stringify(domains))})
        }
    }

    render() {
        const {frontmatter} = this.props.data.markdownRemark;

        return <Layout>
            <IndexPageTemplate parentDomains={this.state.domains} data={frontmatter}/>
        </Layout>
    }

}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        baseBanner {
            titleLines {
                text
            }
        }
        subBanners {
            projectName
            projectName2
            color
            titleLines {
                text
            }
            slides {
                image {
                    childImageSharp {
                        fluid(maxWidth: 1024, quality: 60) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                logo {
                    childImageSharp {
                        fluid(maxWidth: 1024, quality: 60) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                }
                title
            }   
        }
        secondSection {
         title
         ourApproach {
            title
             description {
                text
                subTitle
            }
             image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
         }
         ourModel {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description {
                text
                subTitle
            }
         }
        }
      }
    }
  }
`

