import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import CaseStudiesRoll from '../../components/CaseStudiesRoll';
import backgroundImage from '../../img/team-banner-img.jpg';
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
      <div className={'container career-section-second'}>
        <div className="row">
          <div className="col-11 mx-auto">
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <img src={spacer} alt="" />
            </div>
            <div className="mt-4" style={{ textAlign: 'center' }}>
              <img src={amritSeriesLogo} alt="" width={mobile ? "250px" : "400px"} />
            </div>
            <div
              className={'py-5 text-center f-23 color-text-primary main-text'}>
              Since its inception in 2012, Samagra has been working with
              governments at various levels across the country. We have
              synthesized our learnings from these 10 years in the form of two
              frameworks- The Governance Matrix and Panchsutras for Governance
              Transformation. These frameworks will be useful for those working
              in the government as well as for those working with the
              government.
            </div>
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
              }}
              className={
                'py-2 text-center f-28 color-text-primary main-text text-bold'
              }>
              View our collection of Success Stories
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
    </Layout>
  );
}
