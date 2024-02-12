import React from 'react';
import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';

const FrameworkSectionThird = ({ content }) => {
  console.log(content);
  return (
    <>
      <div className={'frameworks-section'}>
        {content.frameworks.map((c) => {
          return (
            <div className={'items'}>
              {/*<div className={'item-image'} style={{*/}
              {/*    backgroundSize: 'contain',*/}
              {/*    backgroundPosition: 'center',*/}
              {/*    backgroundRepeat: 'no-repeat',*/}
              {/*    backgroundImage: `url(${*/}
              {/*        !!c.image.childImageSharp ? c.image.childImageSharp.fluid.src : c.image*/}
              {/*    })`*/}
              {/*}}>*/}

              {/*</div>*/}
              <img
                src={
                  !!c.image.childImageSharp
                    ? c.image.childImageSharp.fluid.src
                    : c.image
                }
                width={'100%'}
                className={'item-image'}
              />
              <div className="details">
                <div style={{ flex: 1 }}>
                  <p>{c.text}</p>
                </div>
                <div className="actions">
                  {c.actions.map((a) => {
                    return (
                      <div className={'action'}>
                        <PrimaryButton
                          classes={'py-2 text-uppercase'}
                          style={{
                            padding: '2px 25px',
                            width: '128px',
                            textAlign: 'center',
                          }}
                          click={() => {
                            window.open(a.link, '_blank');
                          }}>
                          <div
                            style={{
                              display: 'flex',
                              margin: 'auto',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            {a.icon && (
                              <img
                                style={{ marginRight: '5px' }}
                                width={20}
                                height={20}
                                src={
                                  !!a.icon.childImageSharp
                                    ? a.icon.childImageSharp.fluid.src
                                    : a.icon
                                }
                              />
                            )}
                            {a.text}
                          </div>
                        </PrimaryButton>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '35px',
        }}>
        <p style={{ margin: '15px 10px' }}>
          Subscribe to our LinkedIn bi-weekly newsletter on Governance Frameworks
        </p>
        <a class="libutton" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7107653256859836416" target="_blank">Subscribe on LinkedIn</a>
      </div>
    </>
  );
};

export default FrameworkSectionThird;
