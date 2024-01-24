import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import img2 from '../../static/img/kskimg2.gif';
import infographic from '../../static/img/infographic.gif';
import sideicon1 from '../../static/img/icon1-gosugam.png';
import sideicon2 from '../../static/img/icon2-gosugam.png';
import sideicon3 from '../../static/img/icon3-gosugam.png';
import sideicon4 from '../../static/img/icon4-gosugam.png';
import { animateScroll as scroll } from 'react-scroll';
import upIcon from '../img/up-arrow-png-20.png';
import apostrophe_start from '../img/apostrophe_start.svg';
import apostrophe_end from '../img/apostrophe_end.svg';
import spacer from '../img/spacer.png';
import impactImg1 from '../../static/img/01_screen.mp4';
import impactImg2 from '../../static/img/02_screen.mp4';
import amritSeriesDoodle from '../../static/img/amrit-series-text-doodle.svg';
import amritSeriesBubble from '../../static/img/amrit-series-text-bubble.svg';
import gosugamImpactImg from '../../static/img/gosugam-impact.jpg';
import akailaunch from '../../static/img/ama-krushai-launch.png';
import gosugamLinksImg from '../../static/img/gosugam-links.jpeg';
import gosugamInfographic1Img1 from '../../static/img/gosugam-infographic1-img1.png';
import gosugamInfographic1Img2 from '../../static/img/gosugam-infographic1-img2.png';
import gosugamInfographic1Img3 from '../../static/img/gosugam-infographic1-img3.png';
import gosugamInfographic1Img4 from '../../static/img/gosugam-infographic1-img4.png';
import gosugamInfographic2Img1 from '../../static/img/gosugam-infographic2-img1.png';
import gosugamInfographic2Img2 from '../../static/img/gosugam-infographic2-img2.png';
import gosugamInfographic2Img3 from '../../static/img/gosugam-infographic2-img3.png';
import gosugamInfographic2Img4 from '../../static/img/gosugam-infographic2-img4.png';
import { RightArrow } from '../components/CaseStudyComponents/RightArrow';
import { Modal } from 'react-responsive-modal';
import { debounce } from 'lodash';
import 'react-responsive-modal/styles.css';
import CountUp from 'react-countup';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const handleIntersection = debounce((entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting ? setVisible(entry.isIntersecting) : null
      );
    }, 200);
    const observer = new IntersectionObserver(handleIntersection);
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
      <div className="share" style={{ border: '1px solid #FFA500' }}>
        <div
          style={{ textAlign: 'center' }}
          onClick={() => {
            const ref = document.getElementById('needs-section');
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}>
          <img src={sideicon1} alt="" />
          <p
            style={{
              color: '#025300',
              fontSize: mobile ? '5px' : '9px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Need / Challenges
          </p>
        </div>
        <div
          style={{ textAlign: 'center' }}
          onClick={() => {
            const ref = document.getElementById('impact-video-section');
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}>
          <img src={sideicon2} alt="" />
          <p
            style={{
              color: '#025300',
              fontSize: mobile ? '5px' : '9px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Impact Video
          </p>
        </div>
        <div
          style={{ textAlign: 'center' }}
          onClick={() => {
            const ref = document.getElementById('use-cases-section');
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}>
          <img src={sideicon3} alt="" />
          <p
            style={{
              color: '#025300',
              fontSize: mobile ? '5px' : '9px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Use Cases
          </p>
        </div>
        <div
          style={{ textAlign: 'center' }}
          onClick={() => {
            const ref = document.getElementById('impact-numbers-section');
            ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}>
          <img src={sideicon4} alt="" />
          <p
            style={{
              color: '#025300',
              fontSize: mobile ? '5px' : '9px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Impact Numbers
          </p>
        </div>
      </div>
      {/* <div className="spacer first-spacer">
        <img src={spacer} alt="" />
      </div> */}
      <FadeInSection>
        <div
          className="case-study-main-heading headingCaseStudy"
          id="needs-section"
          style={{
            color: '#025300',
            fontSize: mobile ? '20px' : '30px',
            width: '80%',
            margin: 'auto',
            marginTop: '100px',
          }}>
          {content?.title}
        </div>
      </FadeInSection>
      {/* Show modal only in mobile */}
      {mobile && (
        <Modal open={modalOpen} onClose={closeModal} center>
          {modalImage && (
            <img
              src={modalImage}
              alt="Full Screen"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </Modal>
      )}
      {/* <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
      <FadeInSection>
        <div
          className="case-study-summary-container"
          style={{ marginTop: mobile ? '75px' : '150px' }}>
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
          </div> */}
          <div className="case-study-summary-text" id="impact-video-section">
            <div
              className="headingCaseStudy"
              style={{
                textAlign: 'center',
                color: '#025300',
                paddingBottom: '35px',
                paddingTop: !mobile ? '5px' : '50px',
                fontSize: mobile ? '20px' : '30px',
              }}>
              Impact Video
            </div>
            <div
              className="textCaseStudy"
              style={{
                textAlign: 'center',
                // color: '#025300',
                // paddingBottom: '25px',
                paddingTop: !mobile ? '5px' : '50px',
                fontSize: mobile ? '20px' : '30px',
              }}>
              GO-SUGAM was introduced by the Govt of Odisha in May 2022, to ease
              the life of farmers. See how it impacted the life of an
              aspirational small scale farmer - Sangita.
            </div>
            <div
              style={{
                textAlign: 'right',
                width: '66vw',
                minWidth: '350px',
                margin: 'auto',
              }}>
              <img
                src={amritSeriesDoodle}
                alt=""
                width="32px"
                style={{
                  marginLeft: '4px',
                  marginTop: mobile ? '30px' : '50px',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                // width: '100vw',
              }}>
              <div className="impact-video">
                <iframe
                  style={{
                    minHeight: '150px',
                    minWidth: '300px',
                    height: '30vw',
                    width: '60vw',
                    padding: '10px',
                    borderWidth: '1px',
                    borderImage:
                      'linear-gradient(to right, #418F37, #FFE81D) 1',
                    borderImageSlice: 1,
                  }}
                  src="https://www.youtube.com/embed/-GRdJ9XSAEE?si=iYN4BchI6rJRT78z"
                  // title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                  allowfullscreen></iframe>
              </div>

              {/* {!mobile && <LineDrawingOnScrollLR id={'clip2'} />} */}
            </div>
            <div
              style={{
                width: '66vw',
                minWidth: '350px',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 'auto',
                marginBottom: mobile ? '50px' : '30px',
              }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <img
                  src={amritSeriesDoodle}
                  alt=""
                  width="32px"
                  style={{
                    marginLeft: '4px',
                    transform: 'scaleX(-1) scaleY(-1)',
                  }}
                />
              </div>
              {/* <div>
                <img
                src={amritSeriesBubble}
                alt=""
                width={mobile ? '120px' : '150px'}
                />
              </div> */}
            </div>
            {/* <div className="textCaseStudy" style={{ textAlign: 'left' }}>
              To transform the way government officials use data and real-time
              analytics on key agri-operations, with 4 sharp areas of focus:
              <br></br><br></br>
              {`->`} <b>Scheme Delivery:</b> Delivery of schemes & services provided by
              the department<br></br>
              {`->`} <b>Plant Protection:</b> Relief against pest outbreaks and weather
              disruptions<br></br>
              {`->`} <b>Data Backed Reviews:</b> Review meetings at all levels coupled
              with performance based nudges and escalation protocols<br></br>
              {`->`} <b>Pulse-check on Ecosystem:</b> Policy reform & enhancements
              basis responsiveness of stakeholders
            </div> */}
          </div>
        </div>
      </FadeInSection>
      <div
        style={{
          height: '1px',
          width: '75px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
          margin: '75px auto',
        }}></div>
      <div
        className="textCaseStudy"
        style={{
          textAlign: 'center',
          // color: '#025300',
          // paddingBottom: '25px',
          paddingTop: !mobile ? '5px' : '50px',
          fontSize: mobile ? '20px' : '30px',
          width: '80%',
          margin: 'auto',
        }}>
        Like Sangita, many farmers in Odisha have such dreams. And they need
        help from the right schemes to unlock these dreams.
      </div>
      <div
        style={{
          height: '1px',
          width: '75px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
          margin: '75px auto',
        }}></div>

      <FadeInSection>
        <div className="impact">
          <div
            style={{
              marginTop: !mobile ? '10px' : '',
            }}>
            <video
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                aspectRatio: '2',
                objectFit: 'cover',
              }}>
              <source src={impactImg1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div
              className="headingCaseStudy"
              style={{
                position: 'relative',
                padding: '10px',
                top: '250px',
                color: '#025300',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                width: '100%',
                margin: 'auto',
                fontSize: mobile ? '20px' : '30px',
              }}>
              This large scale transformation was enabled by an Integrated
              Decision Support system (DSS) with the following key use cases:
            </div> */}
          </div>
          {/* <div className="spacer">
            <img src={spacer} alt="" />
          </div> */}

          <div
            style={{
              height: '1px',
              width: '75px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
              borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
              margin: '75px auto',
            }}></div>

          <div
            className="textCaseStudy"
            id="use-cases-section"
            style={{ fontSize: mobile ? '20px' : '30px' }}>
            Farmers in Odisha primarily face three challenges in accessing the
            right schemes.
          </div>

          <div
            className="infographic1"
            style={{ marginTop: '75px', marginBottom: '75px' }}>
            <div
              className="infographic-img"
              style={{ width: 'fit-content', margin: 'auto' }}>
              <img
                src={gosugamInfographic1Img1}
                alt=""
                style={{ maxWidth: '200px' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: mobile ? 'column' : 'row',
                alignItems: mobile ? 'center' : 'flex-start',
              }}>
              <div className="infographic-img">
                <img
                  src={gosugamInfographic1Img2}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>
              <div
                style={{
                  height: '500px',
                  width: '1px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  borderImage: 'linear-gradient(to bottom, #418F37, #FFE81D) 1',
                  display: mobile ? 'none' : 'block',
                  margin: '0 10px',
                }}></div>

              <div className="infographic-img">
                <img
                  src={gosugamInfographic1Img3}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>
              <div
                style={{
                  height: '500px',
                  width: '1px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  borderImage: 'linear-gradient(to bottom, #418F37, #FFE81D) 1',
                  display: mobile ? 'none' : 'block',
                  margin: '0 10px',
                }}></div>
              <div className="infographic-img">
                <img
                  src={gosugamInfographic1Img4}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>
            </div>
          </div>

          <div
            className="textCaseStudy"
            style={{ fontSize: mobile ? '20px' : '30px' }}>
            For the Government of Odisha, the key processes that needed
            streamlining included the following..
          </div>

          <div
            className="infographic2"
            style={{ marginTop: '75px', marginBottom: '75px' }}>
            <div
              className="infographic-img"
              style={{ width: 'fit-content', margin: '15px auto' }}>
              <img
                src={gosugamInfographic2Img1}
                alt=""
                style={{ maxWidth: '200px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: mobile ? 'column' : 'row',
                alignItems: mobile ? 'center' : 'flex-start',
                marginTop: '10px',
              }}>
              <div
                className="infographic-img"
                style={{ margin: mobile ? '15px 0' : '0 15px' }}>
                <img
                  src={gosugamInfographic2Img2}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>

              <div
                className="infographic-img"
                style={{ margin: mobile ? '15px 0' : '0 15px' }}>
                <img
                  src={gosugamInfographic2Img3}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>

              <div
                className="infographic-img"
                style={{ margin: mobile ? '15px 0' : '0 15px' }}>
                <img
                  src={gosugamInfographic2Img4}
                  alt=""
                  style={{ maxWidth: '250px' }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              height: '1px',
              width: '75px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
              borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
              margin: '75px auto',
            }}></div>

          <div
            style={{
              marginTop: !mobile ? '10px' : '',
            }}>
            <video
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                aspectRatio: '2',
                objectFit: 'cover',
              }}>
              <source src={impactImg2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div
              className="headingCaseStudy"
              style={{
                position: 'relative',
                padding: '10px',
                top: '250px',
                color: '#025300',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                width: '100%',
                margin: 'auto',
                fontSize: mobile ? '20px' : '30px',
              }}>
              This large scale transformation was enabled by an Integrated
              Decision Support system (DSS) with the following key use cases:
            </div> */}
          </div>
          <div
            style={{
              height: '1px',
              width: '75px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'transparent',
              borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
              margin: '75px auto',
            }}></div>
          <div
            className="headingCaseStudy"
            id="impact-numbers-section"
            style={{
              textAlign: 'center',
              color: '#025300',
              // paddingBottom: '25px',
              width: '80%',
              margin: 'auto',
              paddingTop: '50px',
              fontSize: mobile ? '20px' : '30px',
            }}>
            GO-SUGAM has quickly become the de-facto choice of Department of
            Agriculture and Farmers' Empowerment (DA&FE) and Fisheries and
            Animal Resources Development (FARD) for easy and smooth delivery of
            schemes across directorates
          </div>

          <div
            style={{
              width: '80%',
              margin: '50px auto',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: mobile ? 'column' : 'row',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '1 1 0',
                width: mobile ? '100%' : 0,
                padding: '10px',
              }}>
              <img
                src={content.icon1.childImageSharp.fluid.src}
                alt=""
                width={mobile ? 35 : 75}
                height={mobile ? 35 : 75}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                <CountUp start={0} end={2} duration={3} enableScrollSpy scrollSpyOnce={true} /> Lakh{' '}
                <span
                  style={{
                    color: '#025300',
                    fontWeight: 'bold',
                  }}>
                  +
                </span>
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                  color: '#025300',
                  fontWeight: 'bold',
                }}>
                Total Applications Received
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: mobile ? '40px' : '',
                flex: '1 1 0',
                width: mobile ? '100%' : 0,
                padding: '10px',
              }}>
              <img
                src={content.icon2.childImageSharp.fluid.src}
                alt=""
                width={mobile ? 35 : 75}
                height={mobile ? 35 : 75}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                <CountUp start={0} end={1} duration={3} enableScrollSpy scrollSpyOnce={true} /> Lakh{' '}
                <span
                  style={{
                    color: '#025300',
                    fontWeight: 'bold',
                  }}>
                  +
                </span>
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                  color: '#025300',
                  fontWeight: 'bold',
                }}>
                Go Ahead generated against for applications
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: mobile ? '40px' : '',
                flex: '1 1 0',
                width: mobile ? '100%' : 0,
                padding: '10px',
              }}>
              <img
                src={content.icon3.childImageSharp.fluid.src}
                alt=""
                width={mobile ? 35 : 75}
                height={mobile ? 35 : 75}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                <CountUp start={0} end={70000} duration={3} enableScrollSpy scrollSpyOnce={true} />{' '}
                <span
                  style={{
                    color: '#025300',
                    fontWeight: 'bold',
                  }}>
                  +
                </span>
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                  color: '#025300',
                  fontWeight: 'bold',
                }}>
                Subsidies released against go-ahead
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: mobile ? '40px' : '',
                flex: '1 1 0',
                width: mobile ? '100%' : 0,
                padding: '10px',
              }}>
              <img
                src={content.icon4.childImageSharp.fluid.src}
                alt=""
                width={mobile ? 35 : 75}
                height={mobile ? 35 : 75}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                <CountUp start={0} end={44} duration={3} enableScrollSpy scrollSpyOnce={true} />%{' '}
                <span
                  style={{
                    color: '#025300',
                    fontWeight: 'bold',
                  }}>
                  +
                </span>
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                  color: '#025300',
                  fontWeight: 'bold',
                }}>
                Farmers applied on their own
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: mobile ? '40px' : '',
                flex: '1 1 0',
                width: mobile ? '100%' : 0,
                padding: '10px',
              }}>
              <img
                src={content.icon5.childImageSharp.fluid.src}
                alt=""
                width={mobile ? 35 : 75}
                height={mobile ? 35 : 75}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                <CountUp start={0} end={99} duration={3} enableScrollSpy scrollSpyOnce={true} />%{' '}
                <span
                  style={{
                    color: '#025300',
                    fontWeight: 'bold',
                  }}>
                  +
                </span>
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  color: '#025300',
                  fontWeight: 'bold',
                }}>
                Farmer Stated correct subsidy was received
              </p>
            </div>
          </div>
          <div
            className="casestudy-btn-container"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <button
              className="casestudy-btn"
              style={{
                marginTop: '20px',
                cursor: 'pointer',
                marginBottom: '50px',
                maxWidth: '270px',
                background: '#025300',
                padding: '10px 50px',
              }}
              onClick={() => {
                const link = document.createElement('a');
                link.href =
                  'https://drive.google.com/file/d/1Kgxrov0ppNBbwDe8F_CAGCmQi9KB9TTF/view?usp=drive_link';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}>
              Download Infographic
            </button>
          </div>
        </div>
      </FadeInSection>
      <div
        style={{
          height: '1px',
          width: '75px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
          margin: '75px auto',
        }}></div>
      <FadeInSection>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          className="case-study-links-container">
          <div
            style={{
              width: mobile ? '80%' : '50%',
              marginBottom: 'auto',
              marginTop: mobile ? '10px' : '',
            }}>
            <div
              className="headingCaseStudy"
              style={{
                textAlign: 'left',
                color: '#025300',
                paddingTop: mobile ? '25px' : 0,
                fontSize: mobile ? '20px' : '30px',
              }}>
              {`Go Sugam Blog < Title >`}
            </div>
            <div>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: mobile ? '18px' : '28px',
                }}>
                Blog
              </p>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                Lorem ipsum
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '15px',
                  color: '#025300',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}
                onClick={() => {
                  // window.location.href =
                  //   '/blog/2023-12-25-amrit-series-1-krushi-samiksha-kendra/';
                }}>
                Read More{' '}
                <RightArrow color="#025300" height="15px" width="15px" />
              </p>
            </div>
            <div>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: mobile ? '18px' : '28px',
                }}>
                Op-Ed
              </p>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                {`<< Title of op-ed`}
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '15px',
                  color: '#025300',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}
                onClick={() => {
                  // window.location.href =
                  //   '/blog/2023-12-25-amrit-series-1-krushi-samiksha-kendra/';
                }}>
                Read More{' '}
                <RightArrow color="#025300" height="15px" width="15px" />
              </p>
            </div>
            <div>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: mobile ? '18px' : '28px',
                }}>
                Webinar
              </p>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                {`<< Title of webinar`}
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '15px',
                  color: '#025300',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}
                onClick={() => {
                  // window.location.href =
                  //   '/blog/2023-12-25-amrit-series-1-krushi-samiksha-kendra/';
                }}>
                Read More{' '}
                <RightArrow color="#025300" height="15px" width="15px" />
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              marginTop: mobile ? '50px' : '',
            }}>
            {/* <div
              style={{
                position: 'relative',
                zIndex: '0',
                left: '30px',
                top: '30px',
                height: mobile ? '150px' : '250px',
                width: mobile ? '100px' : '125px',
                backgroundImage: `url(${gosugamLinksImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}></div> */}

            <div
              style={{
                position: 'relative',
                zIndex: '1',
                height: mobile ? '275px' : '500px',
                width: mobile ? '275px' : '500px',
                backgroundImage: `url(${gosugamImpactImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}></div>

            {/* <div
              style={{
                position: 'relative',
                zIndex: '2',
                left: '-30px',
                top: '30px',
                height: mobile ? '150px' : '250px',
                width: mobile ? '100px' : '125px',
                backgroundImage: `url(${akailaunch})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}></div> */}
          </div>
        </div>
      </FadeInSection>

      {/* <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}

      {/* <FadeInSection>
        <div className="testimonials" style={{marginTop: '100px'}}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
      </FadeInSection> */}

      {/* <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
      <FadeInSection>
        <div
          className="partner-with-us"
          style={{ marginTop: mobile ? '100px' : '150px' }}>
          <p className="partner-with-us-main-text">Partner with us today!</p>
          <p>Write to us at: outreach@samagragovernance.in</p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          className="headingCaseStudy"
          style={{
            color: '#025300',
            margin: 'auto',
            fontSize: mobile ? '20px' : '30px',
          }}>
          View more <i>Success Stories of Impact</i>
        </div>
        <div
          style={{
            marginTop: '125px',
            marginBottom: '150px',
            display: 'flex',
            justifyContent: mobile ? '' : 'space-evenly',
            flexDirection: mobile ? 'column' : 'row',
          }}>
          {['', '', ''].map((news, index) => {
            return (
              <a href={''} target="_blank">
                <div
                  className={`card-wrapper-case-study ${
                    hoveredIndex === index ? 'hovered' : ''
                  } `}
                  style={{
                    margin: mobile ? '50px auto' : '',
                    height: mobile ? '200px' : '250px',
                    width: mobile ? '275px' : '350px',
                  }}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  onMouseEnter={() => setHoveredIndex(index)}>
                  <div
                    style={{
                      backgroundImage: `url(${content.featuredimage.childImageSharp.fluid.src})`,
                      height: '100%',
                      borderRadius: '10px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                  <div
                    style={{
                      background: '#F5F7FA',
                      borderRadius: '10px',
                      height: mobile ? '150px' : '150px',
                      width: mobile ? '230px' : '300px',
                      position: 'relative',
                      top: '-80px',
                      margin: 'auto',
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <div
                      className={'headingCaseStudy'}
                      style={{
                        minHeight: '40px',
                        fontSize: '16px',
                        color: '#717171',
                        flex: 0.8,
                        padding: '20px 10px',
                      }}>
                      {content.title}
                    </div>
                    <div
                      style={{
                        fontSize: '16px',
                        color: '#025300',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: 0.2,
                        padding: '20px',
                      }}>
                      Read More{' '}
                      <RightArrow color="#025300" height="15px" width="15px" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </FadeInSection>
      {/* <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
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
        icon1 {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon2 {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon3 {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon4 {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 62) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon5 {
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
