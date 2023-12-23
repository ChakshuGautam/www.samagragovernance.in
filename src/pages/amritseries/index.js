import React from 'react';
import Layout from '../../components/Layout';
import CaseStudiesRoll from '../../components/CaseStudiesRoll';
import backgroundImage from '../../img/team-banner-img.jpg';
export default class CaseStudiesIndexPage extends React.Component {
  componentDidMount() {
    if(window){
      window.location.href = '/';
    }
  }
  render() {
    return (
      <></>
      // <Layout>
      //   <div
      //     className={'home-top-slider-wrapper media-page-banner'}
      //     style={{
      //       height: '600px',
      //       backgroundImage: `url(${backgroundImage})`,
      //     }}>
      //     <div
      //       className="translucent-dark-overlay"
      //       style={{ height: 'auto' }}></div>
      //     <div className=" container content-section">
      //       <div className="title">Amrit Series</div>
      //     </div>
      //   </div>
      //   <div className={'container career-section-second'}>
      //     <div className="row">
      //       <div className="col-11 mx-auto">
      //         <div
      //           className={
      //             'mt-4 py-5 text-center f-23 color-text-primary main-text'
      //           }>
      //           Since its inception in 2012, Samagra has been working with
      //           governments at various levels across the country. We have
      //           synthesized our learnings from these 10 years in the form of two
      //           frameworks- The Governance Matrix and Panchsutras for Governance
      //           Transformation. These frameworks will be useful for those
      //           working in the government as well as for those working with the
      //           government.
      //         </div>
      //         <div
      //         style={{fontWeight: 'bold'}}
      //           className={
      //             'py-2 text-center f-28 color-text-primary main-text text-bold'
      //           }>
      //           Case Studies for 2023 Coming Soon!
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <section className="section">
      //     <div className="container-fluid">
      //       <div className="content">
      //         <CaseStudiesRoll />
      //       </div>
      //     </div>
      //   </section>
      // </Layout>
    );
  }
}
