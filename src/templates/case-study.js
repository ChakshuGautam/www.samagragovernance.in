import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import img2 from '../../static/img/gosugamimg2.gif';
import infographic from '../../static/img/infographic.gif';
import linkedinLogo from '../img/social/LinkedIn.svg';
import instaLogo from '../img/social/instagram.svg';
import fbLogo from '../img/social/facebook.svg';
import twitterLogo from '../img/social/twitter.svg';
import commentLogo from '../img/social/comments.svg';
import { animateScroll as scroll } from 'react-scroll';
import upIcon from '../img/up-arrow-png-20.png';
import apostrophe_start from '../img/apostrophe_start.svg';
import apostrophe_end from '../img/apostrophe_end.svg';
import spacer from '../img/spacer.png';
import impactImg from '../img/gosugam-casestudy-img.png';
import icon1 from '../img/icon 1.svg';
import icon2 from '../img/icon 2.svg';
import icon3 from '../img/icon 3.svg';
import icon4 from '../img/icon 4.svg';
import icon5 from '../img/icon 5.svg';
import LineDrawingOnScrollRL from '../components/CaseStudyComponents/LinkDrawingOnScrollRL';
import LineDrawingOnScrollLR from '../components/CaseStudyComponents/LinkDrawingOnScrollLR';

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
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [mobile, setMobile] = useState(false);
  const [showUpIcon, setShowUpIcon] = useState(false);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window && window.scrollY > window.screen.height) {
      setShowUpIcon(true);
    } else setShowUpIcon(false);
  };

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setMobile(true);
    }
    // document
    //   .querySelector('#playlist-box-id')
    //   .addEventListener('click', function(event) {
    //     event.preventDefault();
    //     window.open(
    //       'https://www.youtube.com/watch?v=vLrZOL0X81k&list=PLmutx0xcPi1NsSyDkUHYCzk4HeYIoHhEa',
    //       '_blank'
    //     );
    //   });

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
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div
          className="case-study-main-heading heading"
          style={{ color: '#418F37', fontSize: '32px' }}>
          Government of Odisha’s single window portal for digital delivery of
          agricultural schemes to farmers
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="text">
          The life of a farmer in Odisha looks very different now to what it was
          back in 20xx
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: '50px',
            width: '100vw',
            marginBottom: '10px',
          }}>
          <div
            id="img1"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              border: '3px solid #A97F2B',
              borderRadius: '10px',
            }}></div>
        </div>
      </FadeInSection>
      {!mobile && (
          <LineDrawingOnScrollRL />
      )}
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
                border: '3px solid #A97F2B',
                borderRadius: '10px',
              }}></div>
            <div className="casestudy-btn-container">
              <button className="casestudy-btn" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => {
                const link = document.createElement('a');
                link.href = infographic;
                link.download = 'infographic.gif';
                link.click();
              }}>
                Download Infographic
              </button>
            </div>
          </div>
          <div className="case-study-summary-text">
            <div
              className="heading"
              style={{ textAlign: 'left', color: '#418F37' }}>
              GO SUGAM summary
            </div>
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
      {!mobile && (
        <LineDrawingOnScrollLR />
      )}
      <FadeInSection>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          className="case-study-links-container">
          <div style={{ width: mobile ? '80%' : '50%' }}>
            <div
              className="heading"
              style={{ textAlign: 'left', color: '#418F37' }}>
              Links heading
            </div>
            <div>
            <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px'
                }}>
                  Sub Heading
              </p>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique iusto aperiam dolor reprehenderit numquam dolores vero
                quisquam sunt quidem in. Architecto quas error labore eligendi
                maiores sapiente nemo id temporibus.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '0',
                  color: '#418F37',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                Read More
              </p>
            </div>

            <div>
            <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px'
                }}>
                  Sub Heading
              </p>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique iusto aperiam dolor reprehenderit numquam dolores vero
                quisquam sunt quidem in. Architecto quas error labore eligendi
                maiores sapiente nemo id temporibus.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '0',
                  color: '#418F37',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                Read More
              </p>
            </div>
            <div>
            <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px'
                }}>
                  Sub Heading
              </p>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique iusto aperiam dolor reprehenderit numquam dolores vero
                quisquam sunt quidem in. Architecto quas error labore eligendi
                maiores sapiente nemo id temporibus.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '0',
                  color: '#418F37',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                Read More
              </p>
            </div>
            <div>
            <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px'
                }}>
                  Sub Heading
              </p>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique iusto aperiam dolor reprehenderit numquam dolores vero
                quisquam sunt quidem in. Architecto quas error labore eligendi
                maiores sapiente nemo id temporibus.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '0',
                  color: '#418F37',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                Read More
              </p>
            </div>
          </div>
          <div
            id="case-study-links-image"
            style={{
              backgroundImage: `url(/img/SamagraGovernance-Deepika-WasteManagement.jpeg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              border: '3px solid #A97F2B',
              borderRadius: '10px',
            }}></div>
        </div>
      </FadeInSection>
      {!mobile && (
        <LineDrawingOnScrollRL/>
      )}
      <FadeInSection>
        <div className="impact" style={{ marginTop: '50px' }}>
          <div
            style={{
              backgroundImage: `url(${impactImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100vw',
              height: '400px',
            }}>
            <div
              className="heading"
              style={{ position: 'relative', top: '55%', color: 'white' }}>
              Finally, as we reached our destination this how the Last Mile
              Impact looks like in Odisha
            </div>
          </div>

          <div className="impact-video">
            <iframe
              style={{
                minHeight: '150px',
                minWidth: '300px',
                height: '30vw',
                width: '60vw',
                padding: '4px',
                border: '4px solid #A97F2B'
              }}
              src="https://www.youtube.com/embed/evr-R7iC1VM?si=5WMWmFosgB07mvvT"
              // title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div style={{width: '80%', margin: '50px auto', display: 'flex', justifyContent: 'space-evenly', flexDirection: mobile ? 'column' : 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={icon1} alt="" />
            <p className='text' style={{fontWeight: 'bold', fontSize: '24px'}}>137,015</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={icon2} alt="" />
            <p className='text' style={{fontWeight: 'bold', fontSize: '24px'}}>29</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={icon3} alt="" />
            <p className='text' style={{fontWeight: 'bold', fontSize: '24px'}}>137,015</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={icon4} alt="" />
            <p className='text' style={{fontWeight: 'bold', fontSize: '24px'}}>17,463,191</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={icon5} alt="" />
            <p className='text' style={{fontWeight: 'bold', fontSize: '24px'}}>137,015</p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="testimonials">
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <img src={apostrophe_start} alt="" />
          </div>
          <i className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            repellat cumque similique, sapiente ipsa alias nisi enim nesciunt
            officiis, quo ex autem magni, necessitatibus in nostrum cupiditate
            fugit quaerat! Illo. Id incidunt repellat ducimus. Harum ratione
            quod culpa illo necessitatibus fuga omnis reiciendis natus? Fuga
            corporis similique beatae sed aliquid, ratione aspernatur nihil
            vitae tempore! Sequi expedita eveniet iusto quam? Magnam ut, debitis
            maiores asperiores eius, voluptas eveniet repellendus ipsa,
            temporibus itaque sapiente nostrum perferendis consequatur!
            Nesciunt, suscipit ducimus! Reprehenderit veritatis distinctio porro
            a. Nihil blanditiis voluptatum aliquam vitae iure.
          </i>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <img src={apostrophe_end} alt="" />
          </div>
          <div className="testimonial-author">
            <img src="/img/garima_7700.jpg" alt="" />
            <div>
              <p className="testimonial-author-name">Garima Sood</p>
              <p
                className="testimonial-author-designation"
                style={{ color: '#a97f2b' }}>
                Outreach Team, Samagra
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="heading" style={{ color: '#418F37' }}>
          with other ecosystem partners also contributing their POV{' '}
        </div>
        <div className="case-study-playlist-container">
          {/* <div className="playlist-box" id="playlist-box-id">
            <div className="playlist-video">
              <iframe
                style={{
                  cursor: 'pointer',
                  pointerEvents: 'none',
                }}
                src="https://www.youtube.com/embed/videoseries?si=9o9q8gRD6tTb-gKS&amp;list=PLmutx0xcPi1NsSyDkUHYCzk4HeYIoHhEa"
                // title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div> */}
          <div className={'cards-section'}>
            {['', ''].map((news, index) => {
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
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="testimonials">
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <img src={apostrophe_start} alt="" />
          </div>
          <i className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            repellat cumque similique, sapiente ipsa alias nisi enim nesciunt
            officiis, quo ex autem magni, necessitatibus in nostrum cupiditate
            fugit quaerat! Illo. Id incidunt repellat ducimus. Harum ratione
            quod culpa illo necessitatibus fuga omnis reiciendis natus? Fuga
            corporis similique beatae sed aliquid, ratione aspernatur nihil
            vitae tempore! Sequi expedita eveniet iusto quam? Magnam ut, debitis
            maiores asperiores eius, voluptas eveniet repellendus ipsa,
            temporibus itaque sapiente nostrum perferendis consequatur!
            Nesciunt, suscipit ducimus! Reprehenderit veritatis distinctio porro
            a. Nihil blanditiis voluptatum aliquam vitae iure.
          </i>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <img src={apostrophe_end} alt="" />
          </div>
          <div className="testimonial-author">
            <img src="/img/garima_7700.jpg" alt="" />
            <div>
              <p className="testimonial-author-name">Garima Sood</p>
              <p
                className="testimonial-author-designation"
                style={{ color: '#a97f2b' }}>
                Outreach Team, Samagra
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="partner-with-us">
          <p className="partner-with-us-main-text">Partner with us today!</p>
          <p>Write to us at: {`<< abcd@gmail.com >>`}</p>
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className='heading' style={{ color: '#418F37', margin: '50px auto'}}>View more case studies</div>
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
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
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
