import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import Script from 'react-inline-script';
import happyFarmerImg from '../../public/img/we-work-agriculture.jpg';
import sadFarmerImg from '../../public/img/adapt-1.jpg';
import img1 from '../../static/img/gosugamimg1.png';
import img2 from '../../static/img/gosugamimg2.png';
import infographic from '../../static/img/infographic.png';
import GOSUGAM_GIF from '../../static/img/GOSUGAM.gif';
import CaseStudyCarousel from '../components/CaseStudyComponents/CaseStudyCarousel';
import linkedinLogo from '../img/social/LinkedIn.svg';
import instaLogo from '../img/social/instagram.svg';
import fbLogo from '../img/social/facebook.svg';
import twitterLogo from '../img/social/twitter.svg';
import commentLogo from '../img/social/comments.svg';
import homeVideo from '../img/home_video.mp4';
import { animateScroll as scroll } from 'react-scroll';
import upIcon from '../img/up-arrow-png-20.png';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}>
      {props.children}
    </div>
  );
}

export const CaseStudyTemplate = ({ content, helmet }) => {
  const [grayscaleHeight, setGrayscaleHeight] = useState(2.8);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [sadFarmerOpacity, setSadFarmerOpacity] = useState(
    grayscaleHeight - 0.4
  );
  const [mobile, setMobile] = useState(false);
  const [showUpIcon, setShowUpIcon] = useState(false);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    const agriImgElement = document.getElementById('agriImg');
    if (agriImgElement) {
      const rect = agriImgElement.getBoundingClientRect();
      const imageHeight = rect.bottom - rect.top;
      const grayscaleThreshold = imageHeight * 0.25;
      const newScrollingDown = window.scrollY > imageHeight * 0.55;

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const grayscaleAmount = Math.max(
          0,
          (rect.bottom - window.innerHeight) / grayscaleThreshold
        );
        setGrayscaleHeight(grayscaleAmount);
      } else {
        setGrayscaleHeight(1);
      }
    }
    if (window && window.scrollY > window.screen.height) {
      setShowUpIcon(true);
    } else setShowUpIcon(false);
  };

  useEffect(() => {
    const opacity = grayscaleHeight - 0.4;
    setSadFarmerOpacity(opacity);
    console.log('op:', opacity, 'gh:', grayscaleHeight);
  }, [grayscaleHeight]);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setMobile(true);
    }
    document
      .querySelector('#playlist-box-id')
      .addEventListener('click', function(event) {
        event.preventDefault();
        window.open(
          'https://www.youtube.com/watch?v=vLrZOL0X81k&list=PLmutx0xcPi1NsSyDkUHYCzk4HeYIoHhEa',
          '_blank'
        );
      });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!content) {
    return <div />;
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="media-page-banner">
        <img
          src={GOSUGAM_GIF}
          style={{
            width: '100vw',
            height: 'auto',
          }}
        />
        <div className="case-study-translucent-dark-overlay" />
      </div>
      {!mobile && showUpIcon && (
        <div className={'up-icon'}>
          <img src={upIcon} onClick={scrollToTop} />
        </div>
      )}
      <div className="share">
        <img src={twitterLogo} alt="" />
        <img src={linkedinLogo} alt="" />
        <img src={instaLogo} alt="" />
        <img src={fbLogo} alt="" />
        <img src={commentLogo} alt="" onClick={scrollToBottom} />
      </div>
      <FadeInSection>
        <div
          id="agriImg"
          style={{
            position: 'relative',
            width: '100vw',
            height: '800px',
            filter: `grayscale(${grayscaleHeight * 25}%)`,
          }}>
          <div
            className="happy-farmer-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundImage: `url(${happyFarmerImg})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
            }}></div>
          <div
            className="sad-farmer-img"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, ${grayscaleHeight /
                3}), rgba(0, 0, 0, 0)), url(${sadFarmerImg})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              opacity: sadFarmerOpacity,
              transition: 'opacity 0.8s ease',
            }}></div>
        </div>
        <div className="heading">{`<<One liner on the benefit >>`}</div>
      </FadeInSection>
      <FadeInSection>
        <div className="text">
          The life of a farmer in Odisha looks very different now to what it was
          back in 20xx
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', width: '100vw' }}>
          <div
            id="img1"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}></div>

          <div className="text">... and of a government official as well</div>

          <div
            id="img2"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}></div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="heading">
          GO-SUGAM launched in 20xx to address these critical and urgent needs
        </div>
        <div className="summary">
          <div style={{ width: '50%' }}>
            <div className="heading">GO SUGAM summary</div>
            <div className="text" style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quam nobis beatae molestias nesciunt repudiandae tempora earum,
              fugit dolores, impedit reiciendis odio non amet excepturi
              architecto quas, blanditiis perspiciatis quibusdam! \n Dolorem ut
              distinctio doloribus voluptatum sequi id in aliquid vel, cum
              pariatur ipsa! Perferendis architecto quidem optio. Et nisi qui
              fugit eligendi nemo, neque, nostrum nesciunt deserunt aliquam
              facilis dolore. Laborum error asperiores laudantium quis vero sit
              incidunt aut illum odit.
            </div>
          </div>
          <div
            id="infographic"
            style={{
              backgroundImage: `url(${infographic})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}></div>
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button className="casestudy-btn">Download Infographic</button>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="roadmap">
          <div className="heading">
            The roadmap to transformation had several steps along the way...
          </div>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <button className="casestudy-btn">Learn More</button>
          </div>
          <div className={'cards-section'}>
            {['', '', ''].map((news, index) => {
              return (
                <a href={''} target="_blank">
                  <div
                    className={`card-wrapper ${
                      hoveredIndex === index ? 'hovered' : ''
                    } `}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    onMouseEnter={() => setHoveredIndex(index)}>
                    <div
                      className={`image-section`}
                      style={{
                        backgroundImage: `url(${content.featuredimage.childImageSharp.fluid.src})`,
                      }}
                    />
                    <div className={'content-section'}>
                      <div className={'heading'} style={{ minHeight: '40px' }}>
                        {content.title}
                      </div>
                      <div className={'timestamp'}>{content.date}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="impact">
          <div className="heading">
            Finally, as we reached our destination this how the Last Mile Impact
            looks like in Odisha
          </div>
          <div className="impact-video">
            <iframe
              style={{
                minHeight: '150px',
                minWidth: '300px',
                height: '30vw',
                width: '60vw',
              }}
              src="https://www.youtube.com/embed/evr-R7iC1VM?si=5WMWmFosgB07mvvT"
              // title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="testimonial-box">
          <div className="heading">
            The impact was a result of coming together of several stakeholders
            and partners...
          </div>
          <div className="testimonials">
            <CaseStudyCarousel
              items={[
                {
                  title:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nulla vitae eros aliquam viverra in id risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
                  name: 'Garima Sood',
                  image: '/img/garima_7700.jpg',
                  designation: 'Outreach Team, Samagra',
                },
                {
                  title:
                    'Mauris ullamcorper in ligula id ultrices. Maecenas interdum tempus tempor. Vivamus non ante eleifend, cursus turpis non, faucibus enim.',
                  name: 'Garima Sood',
                  image: '/img/garima_7700.jpg',
                  designation: 'Outreach Team, Samagra',
                },
                {
                  title:
                    'Cras nulla nulla, condimentum sit amet convallis in, congue ac augue. Praesent consequat erat sit amet vulputate gravida. Integer pellentesque lectus lobortis',
                  name: 'Garima Sood',
                  image: '/img/garima_7700.jpg',
                  designation: 'Outreach Team, Samagra',
                },
                {
                  title:
                    'Maecenas ullamcorper leo placerat mattis congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in vestibulum ligula, sed efficitur lorem.',
                  name: 'Garima Sood',
                  image: '/img/garima_7700.jpg',
                  designation: 'Outreach Team, Samagra',
                },
              ]}
            />
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="playlist-box" id="playlist-box-id">
          <div className="heading">
            with other ecosystem partners also contributing their POV{' '}
          </div>
          <div className="playlist-video">
            <iframe
              style={{
                minHeight: '150px',
                minWidth: '300px',
                height: '15vw',
                width: '30vw',
                cursor: 'pointer',
                pointerEvents: 'none',
              }}
              src="https://www.youtube.com/embed/videoseries?si=9o9q8gRD6tTb-gKS&amp;list=PLmutx0xcPi1NsSyDkUHYCzk4HeYIoHhEa"
              // title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="field-story-box">
          <div className="heading">
            GO SUGAM continues to generate sustained impact
          </div>
          <div className={'cards-section'}>
            {[''].map((news, index) => {
              return (
                <a href={''} target="_blank">
                  <div
                    className={`card-wrapper ${
                      hoveredIndex === index ? 'hovered' : ''
                    } `}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    onMouseEnter={() => setHoveredIndex(index)}>
                    <div
                      className={`image-section`}
                      style={{
                        backgroundImage: `url(${content.featuredimage.childImageSharp.fluid.src})`,
                      }}
                    />
                    <div className={'content-section'}>
                      <div className={'heading'} style={{ minHeight: '40px' }}>
                        {content.title}
                      </div>
                      <div className={'timestamp'}>{content.date}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="partner-with-us">
          <p>{`<< some catchy line... then partner with us! >>`}</p>
          <p>Write to us at: {`<< xxx >>`}</p>
        </div>
      </FadeInSection>
    </section>
  );
};

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout slug={data.markdownRemark.fields.slug}>
      <CaseStudyTemplate
        content={post.frontmatter}
        helmet={
          <Helmet titleTemplate="%s | CaseStudy">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.title}`} />
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

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CaseStudy;

export const pageQuery = graphql`
  query CaseStudyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
