import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import img2 from '../../static/img/gosugamimg2.png';
import infographic from '../../static/img/infographic.png';
import linkedinLogo from '../img/social/LinkedIn.svg';
import instaLogo from '../img/social/instagram.svg';
import fbLogo from '../img/social/facebook.svg';
import twitterLogo from '../img/social/twitter.svg';
import commentLogo from '../img/social/comments.svg';
import { animateScroll as scroll } from 'react-scroll';
import upIcon from '../img/up-arrow-png-20.png';
import connectorRL from '../img/connectorRL.svg';
import connectorLR from '../img/connectorLR.svg';

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
          src={content.bannerImage.publicURL}
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
          className="heading"
          style={{ color: '#418F37', fontSize: '32px', paddingTop: '50px' }}>
          Government of Odisha’s single window portal for digital delivery of
          agricultural schemes to farmers
        </div>
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
        </div>
      </FadeInSection>
      {!mobile && <FadeInSection>
            <img src={connectorRL} alt="" className='connector' />
      </FadeInSection>}
      <FadeInSection>
        <div className="case-study-summary-container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <div
              id="infographic"
              style={{
                backgroundImage: `url(${infographic})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}></div>
            <div className="casestudy-btn-container">
              <button className="casestudy-btn">Download Infographic</button>
            </div>
          </div>
          <div className="case-study-summary-text">
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
        </div>
      </FadeInSection>
      {!mobile && <FadeInSection>
            <img src={connectorLR} alt="" className='connector' />
      </FadeInSection>}
      <FadeInSection>
        <div
          style={{
            display: 'flex',
            // marginTop: '50px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          className="case-study-links-container">
          <div>
            <p className="text">Link 1</p>
            <p className="text">Link 2</p>
            <p className="text">Link 3</p>
            <p className="text">Link 3</p>
          </div>
          <div
            id="case-study-links-image"
            style={{
              backgroundImage: `url(/img/SamagraGovernance-Deepika-WasteManagement.jpeg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}></div>
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
        <div className="testimonials">
          <i className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur repellat cumque similique, sapiente ipsa alias nisi enim
            nesciunt officiis, quo ex autem magni, necessitatibus in nostrum
            cupiditate fugit quaerat! Illo. Id incidunt repellat ducimus. Harum
            ratione quod culpa illo necessitatibus fuga omnis reiciendis natus?
            Fuga corporis similique beatae sed aliquid, ratione aspernatur nihil
            vitae tempore! Sequi expedita eveniet iusto quam? Magnam ut, debitis
            maiores asperiores eius, voluptas eveniet repellendus ipsa,
            temporibus itaque sapiente nostrum perferendis consequatur!
            Nesciunt, suscipit ducimus! Reprehenderit veritatis distinctio porro
            a. Nihil blanditiis voluptatum aliquam vitae iure."
          </i>
          <div className="testimonial-author">
            <img src="/img/garima_7700.jpg" alt="" />
            <div>
              <p className="testimonial-author-name">Garima Sood</p>
              <p className="testimonial-author-designation">
                Outreach Team, Samagra
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="heading">
          with other ecosystem partners also contributing their POV{' '}
        </div>
        <div className="case-study-playlist-container">
          <div className="playlist-box" id="playlist-box-id">
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
          <p className="partner-with-us-main-text">Partner with us today!</p>
          <p>Write to us at: {`<< abcd@gmail.com >>`}</p>
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
        bannerImage {
          publicURL
        }
      }
    }
  }
`;
