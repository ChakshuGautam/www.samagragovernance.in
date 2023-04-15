import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {MediaRoll} from "../components/MediaRoll";
import CareerBannerImage from "../components/CareerPageComponents/CareerBannerImage/CareerBanner";
import CareerSectionSecond from "../components/CareerPageComponents/CareerSectionSecond/CareerSectionSecond";
import CareerSectionThird from "../components/CareerPageComponents/CareerSectionThird/CareerSectionThird";
import TestimonialSlider from "../components/CareerPageComponents/TestimonialSlider/TestimonialSlider";
import PaginationSlider from "../components/CareerPageComponents/PaginationSlider/PaginationSlider";
import CareerSectionFifth from "../components/CareerPageComponents/CareerSectionFifth/CareerSectionFifth";

export const C4GTTemplate = ({content}) => {
    return (
        <React.Fragment>
            <CareerBannerImage bannerContent={content}/>
            <CareerSectionSecond fromC4GT={true} content={content}/>
        </React.Fragment>
    )
};

const MediaPage = ({data}) => {
    const {markdownRemark: careerPageContent} = data;
    return (
        <Layout>
            <C4GTTemplate content={careerPageContent.frontmatter}/>
        </Layout>
    )

};


export default MediaPage
export const mediaPageQuery = graphql`
  query C4GTPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "c4gt-page" } }) {
      html
      frontmatter {
        title
        bannerImage {
           childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        centerBanner {
           image {
            childImageSharp {
                fluid(maxWidth: 1440, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
           }
        }
        
        mainContent {
            text
        }
        textAboveButton
        link
        buttonText
      }
    }
  }
`;
