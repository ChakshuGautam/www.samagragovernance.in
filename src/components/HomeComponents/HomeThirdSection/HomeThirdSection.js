import React, { useState } from 'react';

import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';
import { graphql, StaticQuery } from 'gatsby';
import Swiper from 'react-id-swiper';
import img1 from '../../../../static/img/saral-kendra.jpg';
import img2 from '../../../../static/img/Agriculture.jpg';
import img3 from '../../../../static/img/Health.jpg';
import img4 from '../../../../static/img/Education.jpg';
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

  const ImageCard = ({ imageUrl, heading, subHeading, classes, styles, href, href2, readMoreText = 'Read More', readMoreText2, bgColor }) => {
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
          className='homepage-imagecard'
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
              objectPosition: 'center',
              transition: 'transform 0.2s ease',
            }}
          />
          <div
            className="align-self-end"
            style={{
              background: bgColor,
              opacity: '0.8',
              position: 'absolute',
              zIndex: 2,
              width: '100%',
              padding: '10px 20px',
            }}>
            <div className={'f-28 fw-600 mb-3'}>{heading}</div>
            <div className={'f-18'}>{subHeading}</div>
            <a className={'f-16'} style={{color: 'white', fontStyle: 'italic'}} href={href}>{readMoreText}</a>
            {(href2 && readMoreText2 ) ? <a className={'f-16'} style={{color: 'white', fontStyle: 'italic'}} href={href2}>{' | '}{readMoreText2}</a> : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={'container-fluid philosophy-section home-third-section-new'}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="col-md-7 px-0">
          <ImageCard
            bgColor='#B99806'
            heading={'Antyodaya Saral'}
            classes={'size-2-2'}
            imageUrl={img1}
            subHeading={'Transforming scheme and service delivery in the state'}
            href='https://www.samagragovernance.in/project/antyodaya-saral/'
          />
        </div>
        <div className="col-md-5 px-0">
          <ImageCard
            bgColor='#294294'
            heading={'Niramaya'}
            classes={'size-4-1'}
            imageUrl={img4}
            subHeading={'Making UP the supplier of quality nursing professionals for the entire country'}
            href='https://www.samagragovernance.in/project/niramaya/'
          />
          <ImageCard
            bgColor='#FF6900'
            heading={'KONNECT & LEAP'}
            classes={'size-2-1'}
            imageUrl={img2}
            subHeading={'Increasing farmer income via phased cohort-based enhancement approach'}
            href='https://www.samagragovernance.in/project/konnect/'
            readMoreText='Read More (KONNECT)'
            href2='https://www.samagragovernance.in/project/leap/'
            readMoreText2='Read More (LEAP)'
          />
        </div>
      </div>
      <div className="col-md-12 px-0">
        <ImageCard
        bgColor='#B99806'
        heading={'NIPUN Bharat'}
        classes={'size-2-1'}
        imageUrl={img3}
        subHeading={'Enabling grade 1-3 students to attain foundational literacy & numeracy'}
        href='https://www.samagragovernance.in/project/nipun-bharat-cell/'
        
          
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
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
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
                domain
                domainNew
                fullName
                subTitle
                state
                tagLine
                backgroundCover {
                  childImageSharp {
                    fluid(maxWidth: 1024, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                projectLogoWithState {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                approach {
                  text
                }

                overview {
                  text
                }
                scale {
                  count
                  label
                }
                impact {
                  count
                  label
                }
                projectMiddleBannerImage {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                keyInitiatives {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 240, quality: 64) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  title
                  description {
                    text
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
