import React from 'react';
import { SectionLabel, XMarks, LinkButton, CvButton } from './Elements';
import { MobilePhoneTrio } from './MobilePhoneTrio';

export function ZenStackDetail({ project, onBack }) {
  const handleBack = (e) => {
    if (e) e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '#zen-stack';
    }
  };

  return (
    <div id="detail-top" className="detail-page-wrapper">
      <div id="home" aria-hidden="true" style={{ display: 'none' }} />
      <header className="header detail-header">
        <div className="header-inner">
          <a href="#home" onClick={handleBack} className="wordmark">
            Tan Ton<span>.</span>
          </a>
          <nav aria-label="Project detail navigation" className="detail-nav">
            <a href="#detail-overview">Overview</a>
            <a href="#detail-gameplay">Gameplay</a>
            <a href="#detail-features">Features</a>
            <a href="#detail-tech">Technical</a>
            <a href="#detail-gallery">Media</a>
            <a href="#detail-reflection">Reflection</a>
          </nav>
          <div className="header-actions">
            <button type="button" onClick={handleBack} className="button button-back-nav" aria-label="Back to portfolio">
              <span aria-hidden="true">←</span> Back to Portfolio
            </button>
            <CvButton />
          </div>
        </div>
      </header>

      <main className="portfolio detail-portfolio">
        {/* Top Breadcrumb & Navigation */}
        <div className="detail-breadcrumb-bar">
          <button type="button" onClick={handleBack} className="back-link">
            <span aria-hidden="true">←</span> Back to Selected Projects
          </button>
          <span className="breadcrumb-tag">MOBILE CASE STUDY / ANDROID</span>
        </div>

        {/* Hero Section */}
        <section id="detail-overview" className="paper detail-hero" aria-labelledby="detail-title">
          <SectionLabel number="01" right="CASE STUDY / MOBILE GAME">ZEN STACK / OVERVIEW</SectionLabel>
          
          <div className="detail-heading">
            <div>
              <span className="script-note">Relaxing & physics-driven</span>
              <h1 id="detail-title">{project.name}<span>.</span></h1>
              <p className="detail-genre">{project.type}</p>
            </div>
            <div className="detail-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="badge-row" aria-label="Project badges">
            <span className="badge badge-platform">Platform: {project.platform}</span>
            <span className="badge badge-engine">Engine: {project.engine}</span>
            <span className="badge badge-genre">Genre: {project.genre}</span>
            <span className="badge badge-type">Type: {project.gameType}</span>
            <span className="badge badge-role">Role: {project.role}</span>
          </div>

          {/* Cover Media 3-Phone Trio Showcase */}
          <div className="project-media detail-media-cover zen-trio-media">
            <MobilePhoneTrio project={project} />
          </div>

          {/* Quick Meta Grid */}
          <div className="project-meta detail-meta">
            <div>
              <span>MY ROLE</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>TARGET PLATFORM</span>
              <strong>{project.platform}</strong>
            </div>
            <div>
              <span>ENGINE & TOOLS</span>
              <strong>Unity (C#) · 2D/3D Physics</strong>
            </div>
            <div>
              <span>VISUAL STYLE</span>
              <strong>{project.visualStyle}</strong>
            </div>
          </div>

          {/* Overview Text */}
          <div className="detail-section-block">
            <h2 className="detail-subheading">Overview</h2>
            <p className="detail-body-text">{project.overview}</p>
            <p className="detail-body-text">
              Every stone is governed by simulated physics, center-of-mass constraints, and surface friction. Rather than adding arbitrary countdown timers or high-stress obstacles, Zen Stack fosters mindfulness and patient problem-solving, making every balanced stone a quiet victory.
            </p>
          </div>
        </section>

        {/* Gameplay & Core Loop */}
        <section id="detail-gameplay" className="paper detail-section" aria-labelledby="gameplay-title">
          <SectionLabel number="02" right="THE CORE LOOP">GAMEPLAY FLOW</SectionLabel>
          <div className="section-title-wrap">
            <div>
              <span className="script-note">Intuitive & tactical</span>
              <h2 id="gameplay-title">CORE GAMEPLAY LOOP</h2>
            </div>
            <p className="section-desc">Players stack randomly generated stones, adjust angles, manage center of mass, and aim for maximum altitude.</p>
          </div>

          <div className="core-loop-grid">
            {project.coreLoop.map((item) => (
              <article key={item.step} className="loop-card">
                <div className="loop-header">
                  <span className="loop-number">{item.step}</span>
                  <span className="loop-phase">STAGE / {item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section id="detail-features" className="paper detail-section" aria-labelledby="features-title">
          <SectionLabel number="03" right="PLAYER EXPERIENCE">KEY FEATURES</SectionLabel>
          <div className="section-title-wrap">
            <div>
              <span className="script-note">Carefully crafted</span>
              <h2 id="features-title">DESIGN HIGHLIGHTS</h2>
            </div>
            <p className="section-desc">Blending relaxing aesthetics with tactile physics challenges tailored for mobile screens.</p>
          </div>

          <div className="features-grid">
            {project.features.map((feat) => (
              <article key={feat.title} className="feature-card">
                <span className="feature-bullet" aria-hidden="true">+</span>
                <div className="feature-content">
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section id="detail-tech" className="paper detail-section" aria-labelledby="tech-title">
          <SectionLabel number="04" right="UNDER THE HOOD">TECHNICAL IMPLEMENTATION</SectionLabel>
          <div className="section-title-wrap">
            <div>
              <span className="script-note">Built with Unity & C#</span>
              <h2 id="tech-title">TECHNICAL ARCHITECTURE</h2>
            </div>
            <p className="section-desc">Accurate breakdown of completed systems and planned post-prototype features.</p>
          </div>

          <div className="tech-cards-grid">
            {project.technicalImplementation.map((tech) => (
              <article key={tech.area} className="tech-card">
                <div className="tech-card-header">
                  <h3>{tech.area}</h3>
                  <span className={`status-tag ${tech.status.toLowerCase().includes('planned') ? 'status-planned' : 'status-implemented'}`}>
                    {tech.status}
                  </span>
                </div>
                <ul className="tech-points-list">
                  {tech.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Media Gallery */}
        <section id="detail-gallery" className="paper detail-section" aria-labelledby="gallery-title">
          <SectionLabel number="05" right="VISUAL ASSETS">MEDIA GALLERY</SectionLabel>
          <div className="section-title-wrap">
            <div>
              <span className="script-note">Genuine project capture</span>
              <h2 id="gallery-title">SCREENSHOT PLACEHOLDERS</h2>
            </div>
            <p className="section-desc">
              Placeholders reserved for genuine build screenshots. No simulated or artificial game mockups are shown.
            </p>
          </div>

          <div className="gallery-grid">
            {project.galleryPlaceholders.map((item) => (
              <article key={item.id} className="gallery-card">
                <div className={`gallery-preview-box ${item.image ? 'gallery-has-image' : ''}`}>
                  <div className="gallery-top-badge">{item.badge}</div>
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="gallery-card-img" loading="lazy" />
                  ) : (
                    <div className="gallery-diagram" aria-hidden="true">
                      <div className="diagram-frame">
                        <div className="diagram-stone-stack">
                          <span className="diagram-stone d-s1" />
                          <span className="diagram-stone d-s2" />
                          <span className="diagram-stone d-s3" />
                        </div>
                        <span className="diagram-label">{item.title}</span>
                      </div>
                    </div>
                  )}
                  <div className="gallery-bottom-status">
                    {item.image ? 'GENUINE BUILD CAPTURE' : 'BUILD CAPTURE READY'}
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Development Reflection */}
        <section id="detail-reflection" className="paper detail-section" aria-labelledby="reflection-title">
          <SectionLabel number="06" right="DEVELOPER INSIGHTS">DEVELOPMENT REFLECTION</SectionLabel>
          <div className="section-title-wrap">
            <div>
              <span className="script-note">Lessons & takeaways</span>
              <h2 id="reflection-title">DESIGN & ENGINEERING REFLECTION</h2>
            </div>
            <p className="section-desc">{project.reflection.intro}</p>
          </div>

          <div className="reflection-grid">
            {project.reflection.takeaways.map((item, index) => (
              <article key={item.title} className="reflection-card">
                <span className="reflection-index">0{index + 1} / CHALLENGE & SOLUTION</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Actions & Back Navigation */}
        <section className="paper detail-actions-section" aria-label="Project actions and return links">
          <SectionLabel number="07" right="NEXT STEPS">PROJECT ACTIONS</SectionLabel>
          <div className="detail-action-buttons">
            <button type="button" onClick={handleBack} className="button button-dark back-button-primary">
              <span aria-hidden="true">←</span> Back to All Projects
            </button>
            {project.links?.itch && (
              <LinkButton url={project.links.itch}>
                <span aria-hidden="true">🎮</span> Play on Itch.io <span aria-hidden="true">↗</span>
              </LinkButton>
            )}
            <LinkButton url={project.links.gameplay} unavailable="Gameplay soon">
              <span aria-hidden="true">▷</span> Watch Gameplay
            </LinkButton>
          </div>
          <p className="repo-note">{project.repositoryNote}</p>
        </section>
      </main>

      <footer className="footer detail-footer-bar">
        <button type="button" onClick={handleBack} className="footer-back-link">
          ← Back to Portfolio
        </button>
        <a href="#detail-top">BACK TO TOP ↑</a>
        <span>ZEN STACK · UNITY / C# / CASUAL MOBILE</span>
      </footer>
    </div>
  );
}
