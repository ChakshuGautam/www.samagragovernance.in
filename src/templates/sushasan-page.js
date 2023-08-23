import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import CareerBannerImage from '../components/CareerPageComponents/CareerBannerImage/CareerBanner';
import SushasanPageComponent from '../components/SushasanPageComponent/SushasanPageComponent';

export const SushasanTemplate = ({ content }) => {
  return (
    <React.Fragment>
      <CareerBannerImage bannerContent={content} />
      <SushasanPageComponent content={content} />
    </React.Fragment>
  );
};

const MediaPage = ({ data }) => {
  const { markdownRemark: careerPageContent } = data;
  return (
    <Layout>
      <SushasanTemplate content={careerPageContent.frontmatter} />
    </Layout>
  );
};

export default MediaPage;
export const mediaPageQuery = graphql`
  query SushasanPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "sushasan-page" } }) {
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
        logo {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
        mail
        podcasts {
          url
          title
        }
      }
    }
  }
`;
