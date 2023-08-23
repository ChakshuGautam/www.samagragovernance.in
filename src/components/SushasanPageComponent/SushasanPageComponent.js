import React from 'react';
import '../../styles/index.scss';
import Carousel from './Carousel';
import linkedInIconActive from '../../img/Sushasan_li_logo.png';
import youtubeIconActive from '../../img/Sushasan_yt_logo.png';
import instagramIconActive from '../../img/Sushasan_insta_logo.png';

const SushasanPageComponent = ({ content }) => {
  return (
    <div
      className={'container career-section-second'}
      style={{ maxWidth: '1200px' }}>
      <div className="overflow-hidden mx-4">
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img
            className="sushasan-logo"
            src={
              !!content.logo.childImageSharp
                ? content.logo.childImageSharp.fluid.src
                : content.logo
            }
            alt="Sushasan Logo"
          />
        </div>
        <div className={'sushasan-channel-trailer-container'}>
          <iframe
            className={'sushasan-channel-trailer'}
            src="https://www.youtube.com/embed/evr-R7iC1VM/"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <p className="sushasan-channel-trailer-text">
            <div dangerouslySetInnerHTML={{ __html: content.text }} />
          </p>
        </div>

        <div className="mt-5 main-text text-center">
          <h3 style={{ fontWeight: 'bold' }}>Sushasan Episodes</h3>
          <h5 className="py-2">New episodes every week!</h5>
          <Carousel items={content.podcasts} />
        </div>

        <div className={'py-3 text-center f-20 main-text'}>
          Follow Sushasan for the latest updates and episodes
          <ul className={'nav py-2'} style={{ justifyContent: 'center' }}>
            <li>
              <a
                style={{ paddingRight: '0.5rem' }}
                href="https://www.youtube.com/@SushasanThePodcast">
                <img
                  className={'sushasan-social-icons'}
                  src={youtubeIconActive}
                />
              </a>
            </li>
            <li>
              <a
                style={{ paddingRight: '0.5rem' }}
                href="https://www.linkedin.com/showcase/sushasan-the-podcast">
                <img
                  className={'sushasan-social-icons'}
                  src={linkedInIconActive}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sushasanthepodcast">
                <img
                  className={'sushasan-social-icons'}
                  src={instagramIconActive}
                />
              </a>
            </li>
          </ul>
          <div className="pt-4">
            <p style={{ marginBottom: 0 }}>We would love to hear from you!</p>
            <p style={{ marginBottom: 0 }}>
              Share your guest suggestions and feedback with us at:{' '}
              {content.mail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushasanPageComponent;
