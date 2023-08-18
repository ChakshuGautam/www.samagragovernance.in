import React from 'react';
import '../../styles/index.scss';
import Carousel from './Carousel'
import linkedInIconActive from '../../img/linkedin.png';
import youtubeIconActive from '../../img/youtube.png';
import instagramIconActive from '../../img/instagram.png';
import SushasanLogo from '../../img/Sushasan.png';

const SushasanPageComponent = ({ content }) => {
    const items = [{url: 'https://www.youtube.com/embed/evr-R7iC1VM/', desc: 'Trailer'}, {url: 'https://www.youtube.com/embed/vLrZOL0X81k', desc: 'EP 01'}, {url: 'https://www.youtube.com/embed/zidabJy7ous', desc: 'EP 02'}, {url: 'https://www.youtube.com/embed/evr-R7iC1VM/', desc: 'EP 03'}];
  return (
    <div className={'container career-section-second'}>
      <div className="row">
        <div className="overflow-hidden mx-4">
                <div style={{width: '100%', textAlign: 'center'}}><img className='sushasan-logo'src={SushasanLogo} alt="Sushasan Logo" /></div>
          <div className={'sushasan-channel-trailer-container'}>
            <iframe
              className={'sushasan-channel-trailer'}
              src="https://www.youtube.com/embed/evr-R7iC1VM/"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <p className="sushasan-channel-trailer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, porro error quis eligendi animi maxime est, quibusdam,
              fugit praesentium iusto excepturi hic numquam aspernatur unde
              labore. Recusandae magnam ab illo. Nostrum, earum! Laboriosam,
              accusamus quas pariatur facilis sed praesentium velit atque et
              minus omnis impedit voluptates magni. Quidem harum, voluptate
              voluptatibus error ad obcaecati accusantium ut officia, dolor
              quaerat iste! Iure omnis dignissimos, ab quisquam dolor corrupti
              molestiae explicabo reprehenderit alias similique, in eaque.
              Consequuntur accusantium porro sapiente voluptatibus
              necessitatibus rerum doloremque suscipit quo exercitationem ab
              nemo accusamus, ipsam voluptas.
            </p>
          </div>

          <div className="mt-5 main-text text-center">
            <h3 style={{ fontWeight: 'bold' }}>Sushasan Episodes</h3>
            <h5>New episodes every week!</h5>
            <Carousel items={items} />
          </div>

          <div className={'mt-4 py-5 text-center f-23 main-text'}>
            Follow Sushasan for the latest updates and episodes
            <ul className={'nav py-2'} style={{ justifyContent: 'center' }}>
              <li>
                <a
                  style={{ paddingRight: '0.5rem' }}
                  href="https://www.instagram.com/samagragovernance/?hl=en">
                  <img
                    className={'sushasan-social-icons'}
                    src={instagramIconActive}
                  />
                </a>
              </li>
              <li>
                <a
                  style={{ paddingRight: '0.5rem' }}
                  href="https://www.linkedin.com/company/samagra-transforming-governance/">
                  <img
                    className={'sushasan-social-icons'}
                    src={linkedInIconActive}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCfkXErS-f87xUQkmSKSC8bg">
                  <img
                    className={'sushasan-social-icons'}
                    src={youtubeIconActive}
                  />
                </a>
              </li>
            </ul>
            <p style={{ marginBottom: 0 }}>We would love to hear from you!</p>
            <p>Write to us at: {`<Sushasan mail>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushasanPageComponent;
