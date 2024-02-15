import React, { useState } from 'react';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';
import { graphql, StaticQuery } from 'gatsby';
import Swiper from 'react-id-swiper';
export const HomeThirdSectionContent = ({
  parentDomains,
  data,
  previewData,
}) => {
  const { edges: projectData } = previewData
  ? previewData.allMarkdownRemark
  : data.allMarkdownRemark;
  let items = [];
  projectData.forEach((project) => {
    let found = false;
    project.projectUrl = project.node.fields.slug;
    items.forEach((domain) => {
      if (domain.name === project.node.frontmatter['domainNew']) {
        found = true;
        domain.projects.push(project);
        domain.projects = domain.projects.sort(function(a, b) {
          return b.node.frontmatter.title > a.node.frontmatter.title ? -1 : 1;
        });
      }
    });
    if (!found) {
      parentDomains.forEach((pD) => {
        if (
          pD.title === project.node.frontmatter['domainNew'] &&
          (pD.displayOnHomeSlider === true || pD.displayOnHomeSlider === 'true')
        ) {
          items.push({
            name: project.node.frontmatter['domainNew'],
            activeProjectIndex: 0,
            displayOrder: pD.displayOrder,
            projects: [project],
          });
          items = items.sort(function(a, b) {
            return b.displayOrder > a.displayOrder ? -1 : 1;
          });
        }
      });
    }
  });
  const [activeItem, setActiveItem] = useState(0);
  let projects = [];
  items.forEach((item) => {
    projects = [...projects, ...item.projects];
  });

  const [stateItems, setStateItems] = useState(
    JSON.parse(JSON.stringify(items))
  );

  let swiperInstance;
  let swiperTitleInstance;
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'home-domain-page-indicator',
      bulletActiveClass: 'home-domain-page-indicator-active',
      clickableClass: 'home-domain-bullets',
    },
    on: {
      init: () => {},
      slideChange: (d) => {
        if (swiperInstance) {
          if (swiperTitleInstance) {
            let titleIndex = 0;
            items.forEach((item, index) => {
              if (
                item.name ===
                projects[swiperInstance.activeIndex].node.frontmatter.domain
              ) {
                titleIndex = index;
              }
            });
            setTimeout(() => {
              swiperTitleInstance.slideTo(titleIndex);
            }, 100);
          }
        }
      },
    },
  };

  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  const [paramsTitle, setParamsTitle] = useState({
    on: {},
    initialSlide: 0,
  });

  const ImageCard = ({
    imageUrl,
    heading,
    subHeading,
    classes,
    styles,
    href,
    href2,
    readMoreText = 'Read More',
    readMoreText2,
    bgColor,
  }) => {
    function hexToRgb(hex) {
      // Remove the '#' if it exists
      hex = hex.replace('#', '');
      // Convert to RGB
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    }
    return (
      <div
        style={{
          margin: '5px',
        }}>
        <div
          className={`${
            classes ? classes : ''
          } text-white w-100 d-flex flex-wrap`}
          style={{
            position: 'relative',
            overflow: 'hidden',
            ...styles,
          }}>
          <img
            className="homepage-imagecard"
            src={
              !!imageUrl.childImageSharp
                ? imageUrl.childImageSharp.fluid.src
                : imageUrl
            }
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              transition: 'transform 0.2s ease',
            }}
          />
          <div
            className="align-self-end"
            style={{
              background: `rgba(${hexToRgb(bgColor).r}, ${hexToRgb(bgColor).g}, ${hexToRgb(bgColor).b}, 0.7)`,
              position: 'absolute',
              zIndex: 2,
              width: '100%',
              padding: '5px 10px',
            }}>
            <div className={'fw-600 homepage-imagecard-heading'}>{heading}</div>
            <div className={'homepage-imagecard-subheading'}>{subHeading}</div>
            <a
              className={'homepage-imagecard-readmore'}
              style={{ color: 'white', fontStyle: 'italic' }}
              href={href}>
              {readMoreText}
            </a>
            {href2 && readMoreText2 ? (
              <a
                className={'homepage-imagecard-readmore'}
                style={{ color: 'white', fontStyle: 'italic' }}
                href={href2}>
                {' | '}
                {readMoreText2}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={'container-fluid philosophy-section home-third-section-new'}>
        <div className={'title'}>We work with state governments across domains</div>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="col-md-6 px-0">
        <ImageCard
          bgColor="#BA9807"
          heading={'NIPUN Bharat'}
          classes={'size-2-2'}
          imageUrl={projectData[0].node.frontmatter.thirdSection.img4}
          subHeading={
            'Enabling 60 lakh students in grades 1-3 to attain foundational literacy & numeracy in UP'
          }
          href="https://www.samagragovernance.in/project/nipun-bharat-cell/"
        />
        </div>
        <div className="col-md-6 px-0">
          
          <ImageCard
            bgColor="#76323F"
            heading={'Antyodaya Saral'}
            classes={'size-4-1'}
            imageUrl={projectData[0].node.frontmatter.thirdSection.img1}
            subHeading={'Transforming scheme and service delivery for 2.7 Cr citizens in Haryana'}
            href="https://www.samagragovernance.in/project/antyodaya-saral/"
          />
          <ImageCard
            bgColor="#428F37"
            heading={'KONNECT & LEAP'}
            classes={'size-2-1'}
            imageUrl={projectData[0].node.frontmatter.thirdSection.img2}
            subHeading={
              ' Increasing farmer income via phased cohort-based enhancement approach for 75 lakh farmers in Odisha'
            }
            href="https://www.samagragovernance.in/project/konnect/"
            readMoreText="Read More (KONNECT)"
            href2="https://www.samagragovernance.in/project/leap/"
            readMoreText2="Read More (LEAP)"
          />
        </div>
      </div>
      <div className="col-md-12 px-0">
      <ImageCard
            bgColor="#027F50"
            heading={'STRIDE'}
            classes={'size-2-1'}
            imageUrl={projectData[0].node.frontmatter.thirdSection.img3}
            subHeading={
              'Establishing systemic enablers for improvement in health & nutrition outcomes of 1 Cr+ tribals in Odisha'
            }
            href="https://www.samagragovernance.in/project/anamaya/"
          />
      </div>
    </div>
  );
};

export default ({ previewData, parentDomains }) => (
  <StaticQuery
    query={graphql`
      query ProjectListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "index-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                thirdSection {
                  img1 {
                    childImageSharp {
                      fluid(maxWidth: 1024, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  img2 {
                    childImageSharp {
                      fluid(maxWidth: 1024, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  img3 {
                    childImageSharp {
                      fluid(maxWidth: 1024, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  img4 {
                    childImageSharp {
                      fluid(maxWidth: 1024, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) =>
      parentDomains.length ? (
        <HomeThirdSectionContent
          parentDomains={parentDomains}
          previewData={previewData}
          data={data}
        />
      ) : (
        <></>
      )
    }
  />
);

const SlideItem = ({ classes, item }) => {
  return (
    <div className="card-outer-wrapper">
      <div className="card-wrapper">
        <div className="title">{item.node.frontmatter.title}</div>
        <div className="image">
          <img
            src={
              item.node.frontmatter.projectLogoWithState.childImageSharp
                ? item.node.frontmatter.projectLogoWithState.childImageSharp
                    .fluid.src
                : item.node.frontmatter.projectLogoWithState
            }
          />
        </div>
        <div className="description">
          <div className="sub-title">Overview</div>
          {item.node.frontmatter.overview[0].text}
        </div>
        <PrimaryButton
          text={'EXPLORE MORE'}
          click={() => {
            window.location.href = item.node.fields.slug;
          }}
        />
      </div>
    </div>
  );
};

const SlideItemTitle = ({
  classes,
  item,
  setActiveItem,
  activeItem,
  index,
}) => {
  return (
    <div className={'text-section-wrapper'}>
      {
        <div
          className={`list-item ${index === activeItem ? 'active' : ''}`}
          key={index}>
          {item.name}
        </div>
      }
    </div>
  );
};

const filterUrl = (str) => {
  let result = '';
  str = str.replace(/ /g, '-').toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ('ascdfeghijklmnopqrstuvwxyz0123456789-'.indexOf(str[i]) > -1) {
      result += str[i];
    }
  }
  return result;
};
