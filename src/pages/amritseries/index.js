import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import CaseStudiesRoll from '../../components/CaseStudiesRoll';
import backgroundImage from '../../../static/img/amrit-series-top-banner.jpg';
import amritSeriesLogo from '../../../static/img/amrit-series-logo.png';
import amritSeriesDoodle from '../../../static/img/amrit-series-text-doodle.svg';
import spacer from '../../../static/img/yellow-spacer.png';
export default function CaseStudiesIndexPage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <></>
    <Layout>
      <div
        className={'home-top-slider-wrapper media-page-banner'}
        style={{
          height: '600px',
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div
          className="translucent-dark-overlay"
          style={{ height: 'auto' }}></div>
        <div className=" container content-section">
          <div className="title">Amrit Series</div>
        </div>
      </div>
      <div
        style={{
          height: '1px',
          width: '75px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
          margin: '75px auto',
        }}></div>
      <div
        className={'career-section-second'}
        style={{ maxWidth: mobile ? '80%' : '75%', margin: 'auto' }}>
        <div className="row">
          <div className="mx-auto">
            {/* <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <img src={spacer} alt="" />
            </div> */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <img
                src={amritSeriesLogo}
                alt=""
                width={mobile ? '250px' : '400px'}
              />
            </div>
            <div className={'sushasan-channel-trailer-container'}>
              <iframe
                style={{
                  padding: '10px',
                  borderWidth: '1px',
                  borderImage: 'linear-gradient(to right, #418F37, #FFE81D) 1',
                  borderImageSlice: 1,
                }}
                className={'sushasan-channel-trailer'}
                src="https://www.youtube.com/embed/r0gQp1zQLoM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
              <p className="sushasan-channel-trailer-text">
                <div
                  className={
                    'py-2 text-left f-18 color-text-primary main-text'
                  }>
                  At Samagra, we are on a mission to improve the quality of life
                  of citizens through better governance. <br></br>
                  <br></br>The Amrit Series is a collection of success stories
                  of large scale impact through our work across domains and
                  states. Many of these are stories of direct impact on
                  citizens, while some are new ways of doing things in
                  governance that are transformative.
                </div>
              </p>
            </div>
            <div
              style={{
                height: '1px',
                width: '75px',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderImage: 'linear-gradient(to left, #418F37, #FFE81D) 1',
                margin: '75px auto',
              }}></div>

            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
              }}
              className={
                'py-2 text-center f-28 color-text-primary main-text text-bold'
              }>
              View our Success Stories of Impact!
              <div>
                <img
                  src={amritSeriesDoodle}
                  alt=""
                  width="24px"
                  style={{ marginBottom: '28px', marginLeft: '4px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid">
          <div className="content">
            <CaseStudiesRoll />
          </div>
        </div>
      </section>
      <div
        className="partner-with-us"
        style={{ marginTop: mobile ? '0px' : '25px' }}>
        <p className="partner-with-us-main-text">Partner with us today!</p>
        <p>Write to us at: outreach@samagragovernance.in</p>
      </div>
    </Layout>
  );
}
