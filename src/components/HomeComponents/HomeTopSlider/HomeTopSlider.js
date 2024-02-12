import React from 'react';
import { HomeTopSliderBannerOne } from './Banners/HomeTopSliderBannerOne/HomeTopSliderBannerOne';
import homeVideo from '../../../img/home_video.mp4';

let firstBanner, secondBanner, thirdBanner, fourthBanner, mainBanner;

export class HomeTopSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSlider: false,
      showVideo: false,
      selectedTextIndex: 0,
    };
  }

  componentDidMount() {
    this.resetAnimations();
  }

  resetAnimations = (skip = 0) => {
    if (mainBanner) clearTimeout(mainBanner);
    if (firstBanner) clearTimeout(firstBanner);
    if (secondBanner) clearTimeout(secondBanner);
    if (thirdBanner) clearTimeout(thirdBanner);
    if (fourthBanner) clearTimeout(fourthBanner);
    if (skip === 5) {
      this.setState({
        firstBannerActive: true,
        secondBannerActive: true,
        thirdBannerActive: true,
        fourthBannerActive: true,
      });
      mainBanner = setTimeout(() => {
        this.resetAnimations();
      }, 10000);
      return;
    }
    if (skip === 4) {
      this.setState({
        firstBannerActive: true,
        secondBannerActive: true,
        thirdBannerActive: true,
        fourthBannerActive: false,
      });
      fourthBanner = setTimeout(() => {
        this.setState({ fourthBannerActive: true });
      }, 10000);
      mainBanner = setTimeout(() => {
        this.resetAnimations();
      }, 20000);
      return;
    }
    if (skip === 3) {
      this.setState({
        firstBannerActive: true,
        secondBannerActive: true,
        thirdBannerActive: false,
        fourthBannerActive: false,
      });
      thirdBanner = setTimeout(() => {
        this.setState({ thirdBannerActive: true });
      }, 10000);
      fourthBanner = setTimeout(() => {
        this.setState({ fourthBannerActive: true });
      }, 20000);
      mainBanner = setTimeout(() => {
        this.resetAnimations();
      }, 30000);
    }
    if (skip === 2) {
      this.setState({
        firstBannerActive: true,
        secondBannerActive: false,
        thirdBannerActive: false,
        fourthBannerActive: false,
      });
      secondBanner = setTimeout(() => {
        this.setState({ secondBannerActive: true });
      }, 10000);
      thirdBanner = setTimeout(() => {
        this.setState({ thirdBannerActive: true });
      }, 20000);
      fourthBanner = setTimeout(() => {
        this.setState({ fourthBannerActive: true });
      }, 30000);
      mainBanner = setTimeout(() => {
        this.resetAnimations();
      }, 40000);
    }
    if (skip === 1) {
      this.setState(
        {
          firstBannerActive: false,
          secondBannerActive: false,
          thirdBannerActive: false,
          fourthBannerActive: false,
          slideTitleVisible: false,
        },
        () => {
          this.resetAnimations();
        }
      );
    }

    firstBanner = setTimeout(() => {
      this.setState({ firstBannerActive: true });
    }, 10000);
    secondBanner = setTimeout(() => {
      this.setState({ secondBannerActive: true });
    }, 20000);

    thirdBanner = setTimeout(() => {
      this.setState({ thirdBannerActive: true });
    }, 30000);

    fourthBanner = setTimeout(() => {
      this.setState({ fourthBannerActive: true });
    }, 40000);

    mainBanner = setTimeout(() => {
      this.setState(
        {
          firstBannerActive: false,
          secondBannerActive: false,
          thirdBannerActive: false,
          fourthBannerActive: false,
          slideTitleVisible: false,
        },
        () => {
          this.resetAnimations();
        }
      );
    }, 50000);

    setTimeout(() => {
      this.setState({ slideTitleVisible: true });
    }, 1000);
  };

  render() {
    const {
      firstBannerActive,
      showVideo,
      slideTitleVisible,
      secondBannerActive,
      thirdBannerActive,
      fourthBannerActive,
    } = this.state;
    const allBanners = [];
    let found = false;
    if (this.props.subBanners) {
      allBanners.push({ active: !!fourthBannerActive && !found, id: 5 });
      if (fourthBannerActive) {
        found = true;
      }
      allBanners.splice(0, 0, {
        active: !!thirdBannerActive && !found,
        id: 4,
      });
      if (thirdBannerActive) {
        found = true;
      }
      allBanners.splice(0, 0, {
        active: !!secondBannerActive && !found,
        id: 3,
      });
      if (secondBannerActive) {
        found = true;
      }
      allBanners.splice(0, 0, { active: !!firstBannerActive && !found, id: 2 });
      if (firstBannerActive) {
        found = true;
      }
    }
    allBanners.splice(0, 0, { active: !found, id: 1 });

    return (
      <div
        className={'home-top-slider-wrapper'}
        style={{ background: '#444444' }}>
        <div className="video-background">
          <video
            controls={false}
            muted
            autoplay="autoplay"
            loop={true}
            style={{
              width: '100%',
              backgroundImage: 'linear-gradient(rgb(12,10,1), rgb(28,10,3))',
              height: '100vh',
            }}
            autoPlay={true}>
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="translucent-dark-overlay" />
        <div className={'container'}>
          <div className={'slider-content'}>
            <div className={'left-text-section'}>
              <div className={`title ${slideTitleVisible ? 'visible' : ''}`}>
                {this.props.baseBanner && this.props.baseBanner.titleLines ? (
                  this.props.baseBanner.titleLines.map((line) => {
                    return <div>{line.text}</div>;
                  })
                ) : (
                  <span />
                )}
                <div className="sub-homeetitle">
                  {this.props.baseBanner.subTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeTopSliderBannerOne
          bannerActive={firstBannerActive}
          banner={this.props.subBanners[0]}
        />
        <HomeTopSliderBannerOne
          bannerActive={secondBannerActive}
          banner={this.props.subBanners[1]}
        />
        <HomeTopSliderBannerOne
          bannerActive={thirdBannerActive}
          banner={this.props.subBanners[2]}
        />
        <HomeTopSliderBannerOne
          bannerActive={fourthBannerActive}
          banner={this.props.subBanners[3]}
        />
        {allBanners.length > 1 ? (
            <div className="bubble-wrapper">
              {allBanners.map((b, index) => {
                return (
                  <div
                    onClick={() => {
                      this.resetAnimations(b.id);
                    }}
                    className={`navigation-bubble large ${
                      b.active ? 'active' : 'in-active'
                    }`}
                  />
                );
              })}
            </div>
        ) : null}
      </div>
    );
  }
}
