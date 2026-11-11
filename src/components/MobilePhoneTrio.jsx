import React from 'react';

export function MobilePhoneTrio({ project }) {
  const isBlock = project?.id === 'block-shadow';

  const screenshots = project?.mobileScreenshots || (isBlock ? [
    '/images/Block Shadow (1).jpg',
    '/images/Block Shadow (2).jpg',
    '/images/Block Shadow (3).jpg',
  ] : [
    '/images/Zenstack (3).jpg',
    '/images/Zenstack (1).jpg',
    '/images/Zenstack (2).jpg',
  ]);

  const labels = isBlock ? [
    { step: '01', name: 'TARGET SHADOW' },
    { step: '02', name: '3D GRID PLACEMENT' },
    { step: '03', name: 'SHADOW MATCH & CLEAR' },
  ] : [
    { step: '01', name: 'TITLE & START' },
    { step: '02', name: 'BASE & CONTROLS' },
    { step: '03', name: 'TOWER STACK' },
  ];

  return (
    <div className="mobile-trio-showcase">
      <div className="media-top trio-media-top">
        <span>PORTRAIT MOBILE CAPTURE / 03 SCREENS</span>
        <span>ANDROID (UNITY) · TOUCH CONTROLS</span>
      </div>

      <div className="phones-row" role="region" aria-label={`${project?.name || 'Mobile'} gameplay screens`}>
        {/* Phone 1 */}
        <div className="phone-device phone-left">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[0] ? (
                <img
                  src={screenshots[0]}
                  alt={`${project?.name} - Screen 1`}
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : null}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">{labels[0].step}</span>
            <span className="phone-name">{labels[0].name}</span>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="phone-device phone-center">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[1] ? (
                <img
                  src={screenshots[1]}
                  alt={`${project?.name} - Screen 2`}
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : null}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">{labels[1].step}</span>
            <span className="phone-name">{labels[1].name}</span>
          </div>
        </div>

        {/* Phone 3 */}
        <div className="phone-device phone-right">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[2] ? (
                <img
                  src={screenshots[2]}
                  alt={`${project?.name} - Screen 3`}
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : null}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">{labels[2].step}</span>
            <span className="phone-name">{labels[2].name}</span>
          </div>
        </div>
      </div>

      <div className="media-bottom trio-media-bottom">
        <span>PORTRAIT (9:19.5 RATIO) · MOBILE TOUCH GAMEPLAY</span>
        <span>ACTUAL GAMEPLAY SCREENSHOTS · ANDROID UNITY BUILD</span>
      </div>
    </div>
  );
}
