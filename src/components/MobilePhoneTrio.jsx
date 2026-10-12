import React from 'react';

export function MobilePhoneTrio({ project }) {
  // Order: 3, 1, 2 (Swapped position 2 and 3 as requested)
  // 1st (Left): Zenstack (3).jpg - Title screen & Start ("Chạm để bắt đầu")
  // 2nd (Center): Zenstack (1).jpg - Base platform & starting setup (0.0m)
  // 3rd (Right): Zenstack (2).jpg - Core gameplay tower stack (4.8m)
  const screenshots = project?.mobileScreenshots || [
    '/images/Zenstack (3).jpg',
    '/images/Zenstack (1).jpg',
    '/images/Zenstack (2).jpg',
  ];

  return (
    <div className="mobile-trio-showcase">
      <div className="media-top trio-media-top">
        <span>PORTRAIT MOBILE CAPTURE / 03 SCREENS (ORDER: 3 · 1 · 2)</span>
        <span>ANDROID (UNITY) · TOUCH CONTROLS</span>
      </div>

      <div className="phones-row" role="region" aria-label="Zen Stack mobile gameplay screens in order 3, 1, 2">
        {/* Phone 1: Zenstack (3).jpg - Title Screen & Chạm để bắt đầu */}
        <div className="phone-device phone-left">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[0] ? (
                <img
                  src={screenshots[0]}
                  alt="Zen Stack Title Screen - Xếp đá tĩnh tâm"
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : (
                <div className="mockup-content screen-menu">
                  <div className="phone-status-bar">
                    <span>09:41</span>
                    <span className="phone-icons">●● 78%</span>
                  </div>
                  <div className="menu-game-title">
                    <span className="script-mini">relaxing game</span>
                    <h4>Zen Stack</h4>
                    <span className="menu-high-score">BEST · 2,4 m</span>
                  </div>
                  <div className="menu-tap-btn">
                    <span>CHẠM ĐỂ BẮT ĐẦU</span>
                  </div>
                </div>
              )}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">01</span>
            <span className="phone-name">TITLE & START</span>
          </div>
        </div>

        {/* Phone 2: Zenstack (1).jpg - Base Platform & Starting Controls (Center / Featured) */}
        <div className="phone-device phone-center">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[1] ? (
                <img
                  src={screenshots[1]}
                  alt="Zen Stack Base Altar and Glue Abilities"
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : (
                <div className="mockup-content screen-ability">
                  <div className="game-hud-bar">
                    <span className="hud-badge">STABILITY</span>
                    <strong className="hud-metric">100%</strong>
                    <span className="hud-score">0,0 m</span>
                  </div>
                </div>
              )}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">02</span>
            <span className="phone-name">BASE & CONTROLS</span>
          </div>
        </div>

        {/* Phone 3: Zenstack (2).jpg - Core Gameplay Tower Stack (4.8m) */}
        <div className="phone-device phone-right">
          <div className="phone-bezel">
            <div className="phone-camera-hole" aria-hidden="true" />
            <div className="phone-screen">
              {screenshots[2] ? (
                <img
                  src={screenshots[2]}
                  alt="Zen Stack Gameplay - 4.8m Tower Balancing"
                  className="phone-screenshot-img"
                  loading="eager"
                />
              ) : (
                <div className="mockup-content screen-gameplay">
                  <div className="game-hud-bar">
                    <span className="hud-badge">ALTITUDE</span>
                    <strong className="hud-metric">4.8 m</strong>
                    <span className="hud-score">26 ĐÁ · 264 ĐIỂM</span>
                  </div>
                </div>
              )}
            </div>
            <div className="phone-chin-bar" aria-hidden="true" />
          </div>
          <div className="phone-label">
            <span className="phone-step">03</span>
            <span className="phone-name">TOWER STACK (4.8m)</span>
          </div>
        </div>
      </div>

      <div className="media-bottom trio-media-bottom">
        <span>PORTRAIT (9:19.5 RATIO) · SINGLE-PLAYER ENDLESS</span>
        <span>ACTUAL GAMEPLAY SCREENSHOTS · ANDROID UNITY BUILD</span>
      </div>
    </div>
  );
}
