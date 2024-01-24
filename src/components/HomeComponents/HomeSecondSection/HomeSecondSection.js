import React from 'react';
import visionImage from '../../../img/home-page/home-our-vision.jpg';
import approachImage from '../../../img/home-page/Approach.png';
import approachVideo from '../../../img/approach_view.mp4';
import AnimatedNumbers from './AnimatedNumbers'

export class HomeSecondSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSectionAnimation: false,
      secondSectionAnimation: false,
      enableVideo: false,
      startNumberAnimation: false,
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
      // Logic to determine when to start the number animation
      if (!this.state.startNumberAnimation) {
        const numbersSection = document.getElementById('numbers-section');
        if (
          numbersSection &&
          numbersSection.getBoundingClientRect().top <
            window.innerHeight - 100
        ) {
          this.setState({ startNumberAnimation: true });
        }
      }
    });
  }

  render() {
    const { firstSectionAnimation, secondSectionAnimation, startNumberAnimation } = this.state;
    const { homeContent } = this.props;
    return (
      <div className={'home-second-section-wrapper'}>
        <div className={'title'} style={{ padding: '0 20px' }}>
          {homeContent.secondSection.title}
        </div>
        {/*<div className={'sub-title'}>*/}
        {/*    We work with the system to make it better.*/}
        {/*</div>*/}
        <div className={'content-section first'}>
          {/* <div className={'image-section'}>
                        <div className="image-background-section"/>
                        <div className={`image-wrapper ${(firstSectionAnimation ? 'enable-animation' : '')}`}
                             style={{
                                 backgroundImage: `url(${
                                     !!(homeContent.secondSection.ourModel.image && homeContent.secondSection.ourModel.image.childImageSharp) ? homeContent.secondSection.ourModel.image.childImageSharp.fluid.src : homeContent.secondSection.ourModel.image
                                 })`
                             }}>

                        </div>
                    </div> */}
          <div id={'our-vision-text-section'} style={{ margin: 'auto' }}>
            <div className={'title'}>
              {homeContent.secondSection.ourModel.title}
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '10px' }}>
                <h2>Why?</h2>
                <div className={'description'}>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div style={{ margin: '10px' }}>
                <h2>What?</h2>
                <div className={'description'}>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div style={{ margin: '10px' }}>
                <h2>How?</h2>
                <div className={'description'}>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </div>
              </div>
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
          <div className={'text-section'} id={'our-approach-text-section'}>
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

        <div id="numbers-section">
          <h2>Our Impact in Numbers</h2>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          {[1000, 2000, 2500, 1700].map((num, index) => (
            <div key={index} style={{margin: '10px'}}>
              <AnimatedNumbers value={num} startAnimation={startNumberAnimation} />
              <div>Programs</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
