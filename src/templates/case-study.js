import '../styles/CaseStudy.scss';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import img2 from '../../static/img/gosugamimg2.gif';
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
import impactImg from '../img/gosugam-casestudy-img.png';
import icon1 from '../img/Icon1.svg';
import icon2 from '../img/Icon2.svg';
import icon3 from '../img/Icon3.svg';
import icon4 from '../img/Icon4.svg';
import icon5 from '../img/Icon5.svg';
import LineDrawingOnScrollRL from '../components/CaseStudyComponents/LinkDrawingOnScrollRL';
import LineDrawingOnScrollLR from '../components/CaseStudyComponents/LinkDrawingOnScrollLR';
import gosugamImpactImg from '../../static/img/gosugam-impact.jpeg';
import gosugamLinksImg from '../../static/img/gosugam-links.jpeg';

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
      <div className="share">
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
      </div>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div
          className="case-study-main-heading heading"
          style={{ color: '#418F37', fontSize: '32px', width: '80%', margin: 'auto' }}>
          This is the story of how India’s first Centralised Monitoring Centre
          for Agricultural Governance came about…
        </div>
      </FadeInSection>
      <div className="spacer">
        <img src={spacer} alt="" />
      </div>
      <FadeInSection>
        <div className="text" style={{ width: '80%', margin: 'auto' }}>
          But to make the “how” clear, let’s take you on a journey of where it
          all started… <br></br>Agriculture as a domain has always been complex and
          diverse. <br></br>Back in 2017, the Agricultural Government Officials
          in Odisha were faced with <br></br>multiple challenges surrounding transparency
          and efficiency.
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
      {!mobile && <LineDrawingOnScrollRL />}
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
          </div>
          <div className="case-study-summary-text">
            <div
              className="heading"
              style={{
                textAlign: 'center',
                color: '#418F37',
                marginBottom: '25px',
              }}>
              With a vision to ease the life of agricultural officials in Odisha, while sustainably building system capacity to address complex questions of governance, Krushi Samiksha Kendra was introduced in 2022.
            </div>
            {/* <div className="text" style={{ textAlign: 'left' }}>
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
      {!mobile && <LineDrawingOnScrollRL />}
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
              style={{
                position: 'relative',
                top: '55%',
                color: 'white',
                width: '90%',
                margin: 'auto',
                fontSize: mobile ? '20px' : '36px',
              }}>
              Over the next year, in what initially seemed like an insurmountable task, lives of officials at the last mile were rapidly transformed with innovation. Take a look…
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
                border: '4px solid #A97F2B',
              }}
              src="https://www.youtube.com/embed/evr-R7iC1VM?si=5WMWmFosgB07mvvT"
              // title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className="heading" style={{ color: '#418F37', width: '80%', margin: 'auto' }}>
          The system responded positively to the approach taken and the numbers spoke for themselves…
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
              <img src={icon1} alt="" />
              <p
                className="text"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                92%
              </p>
              <p
                className="text"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  width: '80%',
                }}>
                officials leverage **KSK weekly for decision-making on
                agricultural operations<br></br>
                **Krushi Samiksha Kendra
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
              <img src={icon2} alt="" />
              <p
                className="text"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                90%
              </p>
              <p
                className="text"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  width: '80%',
                }}>
                officials conduct monthly top-down reviews using the KPIs
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
              <img src={icon3} alt="" />
              <p
                className="text"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                87%
              </p>
              <p
                className="text"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  width: '80%',
                }}>
                officials receive regular nudges and reminders based on KPI
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
              <img src={icon4} alt="" />
              <p
                className="text"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                85%
              </p>
              <p
                className="text"
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  width: '80%',
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
              <img src={icon5} alt="" />
              <p
                className="text"
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: 0,
                  paddingTop: 0,
                }}>
                100%
              </p>
              <p
                className="text"
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
              justifyContent: 'center',
            }}>
            <button
              className="casestudy-btn"
              style={{ marginTop: '20px', cursor: 'pointer' }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = infographic;
                link.download = 'infographic.gif';
                link.click();
              }}>
              Download Infographic
            </button>
          </div>
        </div>
      </FadeInSection>
      {!mobile && <LineDrawingOnScrollLR />}
      <FadeInSection>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          className="case-study-links-container">
          <div style={{ width: mobile ? '80%' : '50%', marginBottom: 'auto' }}>
            <div
              className="heading"
              style={{
                textAlign: 'left',
                color: '#418F37',
                paddingTop: mobile ? '25px' : 0,
              }}>
              Read the story of how Odisha transformed the way government officials use data & real-time analytics on key agri-operations
            </div>
            <div>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px',
                }}>
                Blog
              </p>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                }}>
                How Odisha has operationalised India’s First Command & Control
                Centre in Agriculture
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
                  fontSize: '28px',
                }}>
                Op-Ed
              </p>
              <p
                className="text"
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
            </div>
            {/* <div>
              <p
                className="text"
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                  paddingBottom: '0',
                  fontSize: '28px',
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
                  fontSize: '28px',
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
      <FadeInSection>
        <div
          className="heading"
          style={{ color: '#418F37', width: '80%', margin: 'auto' }}>
          This breakthrough is a result of consistent support and meaningful collaborations that we have received from our partners in the ecosystem. Here are some insights from the ecosystem…
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
      <FadeInSection>
        <div
          className="heading"
          style={{ color: '#418F37', margin: '50px auto' }}>
          View more case studies
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
