import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import img2 from '../../static/img/kskimg2.gif';
import infographic from '../../static/img/infographic.gif';
import linkedinLogo from '../img/social/linkedin-black.svg';
import instaLogo from '../img/social/instagram.svg';
import fbLogo from '../img/social/facebook.svg';
import twitterLogo from '../img/social/twitter.svg';
import whatsappLogo from '../img/social/whatsapp.svg';
import mailLogo from '../img/social/mail.svg';
import { animateScroll as scroll } from 'react-scroll';
import upIcon from '../img/up-arrow-png-20.png';
import apostrophe_start from '../img/apostrophe_start.svg';
import apostrophe_end from '../img/apostrophe_end.svg';
import spacer from '../img/spacer.png';
import impactImg from '../../static/img/gosugam-casestudy-img.jpeg';
import icon1 from '../img/Icon1.svg';
import icon2 from '../img/Icon2.svg';
import icon3 from '../img/Icon3.svg';
import icon4 from '../img/Icon4.svg';
import icon5 from '../img/Icon5.svg';
import LineDrawingOnScrollRL from '../components/CaseStudyComponents/LinkDrawingOnScrollRL';
import LineDrawingOnScrollLR from '../components/CaseStudyComponents/LinkDrawingOnScrollLR';
import gosugamImpactImg from '../../static/img/gosugam-impact.jpeg';
import gosugamLinksImg from '../../static/img/gosugam-links.jpeg';
import { Modal } from 'react-responsive-modal';
import { debounce } from 'lodash';
import 'react-responsive-modal/styles.css';

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

export const KSKTemplate = ({ content, helmet }) => {
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
    if (window && window.innerWidth < 768) {
      setMobile(true);
    }

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
      {/* <div className="share">
        <img src={twitterLogo} alt="" />
        <img src={linkedinLogo} alt="" />
        <img src={instaLogo} alt="" />
        <img src={fbLogo} alt="" />
        <img
          src={whatsappLogo}
          alt=""
          onClick={() => {
            const link = document.createElement('a');
            link.href = mobile
              ? `whatsapp://send?text=${window.location.href}`
              : `https://web.whatsapp.com/send?text=${window.location.href}`;
            link.dataAction = 'share/whatsapp/share';
            link.target = '_blank';
            link.click();
          }}
        />
        <img src={mailLogo} alt="" />
      </div> */}
      <div className="spacer first-spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div
          className="case-study-main-heading headingCaseStudy"
          style={{
            color: '#418F37',
            fontSize: mobile ? '20px' : '30px',
            width: '80%',
            margin: 'auto',
          }}>
          India’s 1<sup>st</sup> Centralised Monitoring System in Agriculture,
          Krushi Samiksha Kendra (KSK) was set up with a vision to aid
          evidence-backed decision-making
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
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="textCaseStudy" style={{ width: '70%', margin: 'auto' }}>
          <b>Need</b> for evidence-backed decision-making <br></br>
          <br></br> Agri-operations are highly complex to manage with challenges
          like lack of timely inputs, increased pest incidents and worsening
          impact of climate change, prevalent in the domain. <br></br>
          <br></br> Here are some specific <b>challenges</b> that the state of{' '}
          <b>Odisha</b> was encountering in 2017
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          <div
            id="img1"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              border: '3px solid #A97F2B',
              borderRadius: '10px',
            }}
            onClick={() => openModal(img2)}></div>
          {!mobile && <LineDrawingOnScrollRL id={'clip1'} />}
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="case-study-summary-container">
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
          <div className="case-study-summary-text">
            <div
              className="headingCaseStudy"
              style={{
                textAlign: 'center',
                color: '#418F37',
                // paddingBottom: '25px',
                paddingTop: !mobile ? '5px' : '50px',
                fontSize: mobile ? '20px' : '30px',
              }}>
              Here’s how the Govt. of Odisha harnessed the power of technology
              to drive digital transformation in the sector
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: mobile ? '30px' : '50px',
                marginBottom: mobile ? '50px' : '0px',
                // width: '100vw',
              }}>
              <div className="impact-video">
                <iframe
                  style={{
                    minHeight: '150px',
                    minWidth: '300px',
                    height: '30vw',
                    width: '60vw',
                    padding: '4px',
                    border: '4px solid #A97F2B',
                  }}
                  src="https://www.youtube.com/embed/-GRdJ9XSAEE?si=iYN4BchI6rJRT78z"
                  // title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                  allowfullscreen></iframe>
              </div>
            {!mobile && <LineDrawingOnScrollLR id={'clip2'} />}
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
      <FadeInSection>
        <div className="impact">
          <div
            style={{
              backgroundImage: `url(${impactImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100vw',
              height: '400px',
              marginTop: !mobile ? '10px': ''
            }}>
            <div
              className="headingCaseStudy"
              style={{
                position: 'relative',
                padding: '10px',
                top: '250px',
                color: '#418F37',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                width: '100%',
                margin: 'auto',
                fontSize: mobile ? '20px' : '30px',
              }}>
              This large scale transformation was enabled by an Integrated
              Decision Support system (DSS) with the following key use cases:
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              margin: '50px auto 10px auto',
              width: '100vw',
            }}>
            <div
              id="infographic"
              style={{
                backgroundImage: `url(${infographic})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                border: '3px solid #A97F2B',
                borderRadius: '10px',
                margin: 'auto',
              }}
              onClick={() => openModal(infographic)}></div>
          </div>
          <div
            className="headingCaseStudy"
            style={{
              color: '#418F37',
              width: '80%',
              margin: 'auto',
              fontSize: mobile ? '20px' : '30px',
            }}>
            The ecosystem responded positively and the numbers spoke for
            themselves…
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
                src={icon1}
                alt=""
                width={mobile ? 100 : 150}
                height={mobile ? 100 : 150}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                92%
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                }}>
                officials leverage KSK weekly for decision-making on
                agricultural operations
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
                src={icon2}
                alt=""
                width={mobile ? 100 : 150}
                height={mobile ? 100 : 150}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                90%
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                }}>
                officials conduct monthly top-down reviews using the Key
                Performance Indicators
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
                src={icon3}
                alt=""
                width={mobile ? 100 : 150}
                height={mobile ? 100 : 150}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                87%
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                }}>
                officials receive regular nudges and reminders based on
                performance
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
                src={icon4}
                alt=""
                width={mobile ? 100 : 150}
                height={mobile ? 100 : 150}
              />
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                85%
              </p>
              <p
                className="textCaseStudy"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: mobile ? '12px' : '14px',
                  width: mobile ? '90%' : '80%',
                }}>
                officials consider this an impactful tool for review &
                monitoring
              </p>
            </div>
            {/* <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: mobile ? '40px' : '',
                flex: '1 1 0',
                width: mobile ? "100%" : 0,
                padding: '10px',
              }}>
              <img src={icon5} alt="" width={mobile ? 100 : 150} height={mobile ? 100 : 150}/>
              <p
                className="textCaseStudy"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                100%
              </p>
              <p
                className="textCaseStudy"
                style={{ padding: 0, margin: 0, fontSize: '14px' }}>
                System capacity built consistently through trainings of all
                officials
              </p>
            </div> */}
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
                marginBottom: '5px',
                maxWidth: '200px',
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
            {!mobile && <LineDrawingOnScrollRL id={'clip3'} />}
          </div>
        </div>
      </FadeInSection>
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
                color: '#418F37',
                paddingTop: mobile ? '25px' : 0,
                fontSize: mobile ? '20px' : '30px',
              }}>
              Insights from the ground
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
                How Odisha operationalized India’s 1<sup>st</sup>{' '}
                Centralized Monitoring System in Agriculture
              </p>
              <p
                style={{
                  textAlign: 'left',
                  marginTop: '0',
                  paddingTop: '0',
                  color: '#418F37',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}
                onClick={() => {
                  window.location.href = '/blog/2023-12-25-amrit-series-1-krushi-samiksha-kendra/';
                }}
                >
                Read More
              </p>
            </div>

            {/* <div>
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
                {'<<Title of Op-Ed>>'}
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
            </div> */}
            {/* <div>
              <p
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px',
                }}>
                Sub Heading
              </p>
              <p
                className="textCaseStudy"
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
                className="textCaseStudy"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px',
                }}>
                Sub Heading
              </p>
              <p
                className="textCaseStudy"
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
            </div> */}
          </div>
          <div
            id="case-study-links-image"
            style={{
              backgroundImage: `url(${gosugamLinksImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '3px solid #A97F2B',
              borderRadius: '10px',
            }}></div>
        </div>
      </FadeInSection>

      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      {/* <FadeInSection>
        <div className="testimonials">
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
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
      {/* <FadeInSection>
        <div
          className="headingCaseStudy"
          style={{ color: '#418F37', width: '80%', margin: 'auto' }}>
          This breakthrough is a result of consistent support and meaningful
          collaborations that we have received from our{' '}
          <span style={{ fontWeight: 'bold', background: 'yellow' }}>
            partners
          </span>{' '}
          in the ecosystem. Here are some{' '}
          <span style={{ fontWeight: 'bold', background: 'yellow' }}>
            insights
          </span>
          …
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
      {/* <div className={'cards-section'}>
            {['', ''].map((news, index) => {
              return (
                <a href={''} target="_blank">
                  <div
                    className={`card-wrapper-case-study ${
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
                      <div className={'headingCaseStudy'} style={{ minHeight: '40px' }}>
                        {content.title}
                      </div>
                      <div className={'timestamp'}>{content.date}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div> */}
      {/* </div> */}
      {/* </FadeInSection> */}
      {/* <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
      {/* <FadeInSection>
        <div className="testimonials">
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
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div> */}
      <FadeInSection>
        <div className="partner-with-us">
          <p className="partner-with-us-main-text">Partner with us</p>
          <p>Write to us at: outreach@samagragovernance.in</p>
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      {/* <FadeInSection>
        <div
          className="headingCaseStudy"
          style={{ color: '#418F37', margin: '50px auto', fontSize: mobile ? '20px' : '30px' }}>
          View more <i>Success Stories of Impact</i>
        </div>
        <div className={'cards-section'}>
          {['', '', ''].map((news, index) => {
            return (
              <a href={''} target="_blank">
                <div
                  className={`card-wrapper-case-study ${
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
                    <div className={'headingCaseStudy'} style={{ minHeight: '40px' }}>
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
      </div> */}
    </section>
  );
};

const KSK = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout slug={data.markdownRemark.fields.slug}>
      <KSKTemplate
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

KSK.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default KSK;

export const pageQuery = graphql`
  query KSKQuery($id: String!) {
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
