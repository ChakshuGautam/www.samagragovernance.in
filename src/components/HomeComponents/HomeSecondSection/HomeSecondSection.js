import React from 'react';
import visionImage from '../../../img/home-page/home-our-vision.jpg';
import approachImage from '../../../img/home-page/Approach.png';
import approachVideo from '../../../img/approach_view.mp4';

export class HomeSecondSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSectionAnimation: false,
      secondSectionAnimation: false,
      enableVideo: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', (e) => {
      if (
        (document.documentElement.scrollTop < 100 ||
          document.documentElement.scrollTop > 1.5 * window.screen.height) &&
        this.state.firstSectionAnimation
      ) {
        this.setState({ firstSectionAnimation: false });
      } else if (
        !this.state.firstSectionAnimation &&
        document.documentElement.scrollTop > window.screen.height / 1.5 &&
        !(document.documentElement.scrollTop > 1.5 * window.screen.height)
      ) {
        this.setState({ firstSectionAnimation: true });
      }
      if (
        (document.documentElement.scrollTop < 100 ||
          document.documentElement.scrollTop > 2 * window.screen.height) &&
        this.state.secondSectionAnimation
      ) {
        this.setState({ secondSectionAnimation: false });
      } else if (
        !this.state.secondSectionAnimation &&
        document.documentElement.scrollTop > window.screen.height &&
        !(document.documentElement.scrollTop > 2 * window.screen.height)
      ) {
        this.setState({ secondSectionAnimation: true });
      }

      if (document.getElementById('our-image-approach-wrapper')) {
        if (
          !this.state.enableVideo &&
          document
            .getElementById('our-image-approach-wrapper')
            .getBoundingClientRect().top <
            window.screen.height - 600 &&
          document
            .getElementById('our-image-approach-wrapper')
            .getBoundingClientRect().bottom > 0
        ) {
          this.setState({ enableVideo: true });
        } else if (
          this.state.enableVideo &&
          !(
            document
              .getElementById('our-image-approach-wrapper')
              .getBoundingClientRect().top <
              window.screen.height - 600 &&
            document
              .getElementById('our-image-approach-wrapper')
              .getBoundingClientRect().bottom > 0
          )
        ) {
          this.setState({ enableVideo: false });
        }
      }
    });
  }

  render() {
    const { firstSectionAnimation, secondSectionAnimation } = this.state;
    const { homeContent } = this.props;
    return (
      <div className={'home-second-section-wrapper'} style={{ padding: 0 }}>
        <div className={'title'} style={{ padding: '50px 20px 0px 20px' }}>
          {homeContent.secondSection.title}
        </div>
        {/*<div className={'sub-title'}>*/}
        {/*    We work with the system to make it better.*/}
        {/*</div>*/}
        <div
          className={'content-section'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '80px',
          }}>
          <div className={'image-section'} style={{ paddingTop: '10px' }}>
            {/* <div className="image-background-section"/> */}
            <iframe
              className={'home-second-section-iframe'}
              src="https://www.youtube.com/embed/Y-iHVVfSHRg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            {/* <div className={`image-wrapper ${(firstSectionAnimation ? 'enable-animation' : '')}`}
                             style={{
                                 backgroundImage: `url(${
                                     !!(homeContent.secondSection.ourModel.image && homeContent.secondSection.ourModel.image.childImageSharp) ? homeContent.secondSection.ourModel.image.childImageSharp.fluid.src : homeContent.secondSection.ourModel.image
                                 })`
                             }}>

                        </div> */}
          </div>
          <div className={'text-section'} style={{ paddingTop: 0 }}>
            <div className={'title'}>
              {homeContent.secondSection.ourModel.title}
            </div>
            <div className={'description'}>
              {homeContent.secondSection.ourModel.description.map(
                (desription) => {
                  return (
                    <div>
                      {desription.subTitle ? (
                        <div
                          className={'sub-title'}
                          style={{
                            marginBottom: '15px',
                            marginTop: '20px',
                          }}>
                          {desription.subTitle}
                        </div>
                      ) : (
                        <span />
                      )}
                      <p>{desription.text}</p>
                    </div>
                  );
                }
              )}
              {/* <a href="https://www.samagragovernance.in/amritseries">Learn More</a> */}
            </div>
          </div>
        </div>
        <div className={'content-section reverse'}>
          <div className={`image-section `}>
            <div
              className={`image-wrapper`}
              id={'our-image-approach-wrapper'}
              style={{
                backgroundImage: `url(${
                  !!(
                    homeContent.secondSection.ourApproach.image &&
                    homeContent.secondSection.ourApproach.image.childImageSharp
                  )
                    ? homeContent.secondSection.ourApproach.image
                        .childImageSharp.fluid.src
                    : homeContent.secondSection.ourApproach.image
                })`,
              }}>
              {this.state.enableVideo ? (
                <video
                  ref={(video) => {
                    if (video) {
                      video.playbackRate = 2;
                    }
                  }}
                  controls={false}
                  loop={false}
                  style={{
                    width: '100%',
                    backgrounColor: 'white',
                    height: '100%',
                  }}
                  autoPlay={true}>
                  <source src={approachVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <span />
              )}
            </div>
          </div>
          <div className={'text-section'}>
            <div className={'title'}>
              {homeContent.secondSection.ourApproach.title}
            </div>

            <div className={'description'}>
              {homeContent.secondSection.ourApproach.description.map(
                (desription) => {
                  return (
                    <div>
                      {desription.subtitle ? (
                        <div
                          className={'sub-title'}
                          style={{
                            marginBottom: '15px',
                            marginTop: '20px',
                          }}>
                          {desription.subtitle}
                        </div>
                      ) : (
                        <span />
                      )}
                      <p>{desription.text}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
