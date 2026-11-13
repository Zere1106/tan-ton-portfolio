import React from 'react';
import { LinkButton, SectionLabel } from './Elements';
import { MobilePhoneTrio } from './MobilePhoneTrio';

function parseYouTube(url) {
  if (!url) return null;
  let videoId = '';
  let isShort = false;

  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) {
    videoId = shortsMatch[1];
    isShort = true;
  } else {
    const watchMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
  }

  if (!videoId) return null;
  return {
    videoId,
    isShort,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`,
  };
}

export function ProjectCard({
  project,
  featured = false,
  sectionNumber,
  sectionRight,
  sectionTitle,
  onViewProject,
}) {
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);
  const [videoVariant, setVideoVariant] = React.useState('main'); // 'main' or 'shorts'

  const hasPhoneTrio = project.id === 'zen-stack' || project.id === 'block-shadow';

  const currentVideoUrl =
    videoVariant === 'shorts' && project.links?.shorts
      ? project.links.shorts
      : project.links?.gameplay;
  const videoInfo = parseYouTube(currentVideoUrl);

  const scriptNotes = {
    'regnora': 'Made from scratch.',
    'zen-stack': 'Relaxing & nature-inspired',
    'cozy-aquarium': 'Living aquascape & widget companion',
    'block-shadow': '3D spatial logic & shadow projection',
  };

  const handleToggleVideo = () => {
    const nextState = !isPlayingVideo;
    setIsPlayingVideo(nextState);
    if (nextState) {
      const cardEl = document.getElementById(project.id);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id={project.id}
      className={`paper project-card ${featured ? 'featured' : ''} ${hasPhoneTrio ? 'zen-project-card' : ''}`}
      aria-labelledby={`${project.id}-title`}
    >
      <SectionLabel
        number={sectionNumber || (featured ? '03' : '04')}
        right={sectionRight || (featured ? 'FEATURED PROJECT / ONLINE' : 'MOBILE PROJECT / ANDROID')}
      >
        {sectionTitle || (featured ? 'FEATURED PROJECT' : 'PROJECT SHOWCASE')}
      </SectionLabel>

      <div className="project-heading">
        <div>
          <span className="script-note">{scriptNotes[project.id] || 'Solo Game Development'}</span>
          <h2 id={`${project.id}-title`}>{project.name}</h2>
          <p>{project.type}</p>
        </div>
        <div className="heading-status-group">
          {project.badges && (
            <div className="project-badges" aria-label="Project category badges">
              <span className="badge badge-platform">{project.platform}</span>
              <span className="badge badge-engine">{project.engine || 'Unity'}</span>
              <span className="badge badge-genre">{project.genre || 'Casual'}</span>
            </div>
          )}
          <span className="status">
            <span aria-hidden="true" /> {project.status}
          </span>
        </div>
      </div>

      <div className={`project-media ${hasPhoneTrio ? 'zen-trio-media' : ''}`}>
        {isPlayingVideo && videoInfo ? (
          <div className={`inline-video-wrapper ${videoInfo.isShort ? 'is-short' : 'is-landscape'}`}>
            <div className="inline-video-header">
              <div className="video-title-group">
                <span className="video-status-dot" aria-hidden="true">●</span>
                <span>GAMEPLAY STREAM: {project.name.toUpperCase()}</span>
                {project.links?.shorts && (
                  <div className="video-variant-selector">
                    <button
                      type="button"
                      className={`video-pill ${videoVariant === 'main' ? 'active' : ''}`}
                      onClick={() => setVideoVariant('main')}
                    >
                      Showcase
                    </button>
                    <button
                      type="button"
                      className={`video-pill ${videoVariant === 'shorts' ? 'active' : ''}`}
                      onClick={() => setVideoVariant('shorts')}
                    >
                      Shorts
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="close-video-btn"
                onClick={() => setIsPlayingVideo(false)}
                title="Return to screenshots"
              >
                ✕ Close Video
              </button>
            </div>
            <div className="video-player-frame">
              <iframe
                src={videoInfo.embedUrl}
                title={`${project.name} Gameplay Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="media-visual-container">
            {hasPhoneTrio ? (
              <MobilePhoneTrio project={project} />
            ) : project.screenshot ? (
              <img src={project.screenshot} alt={project.screenshotAlt || project.name} />
            ) : (
              <div className="media-placeholder">
                <div className="media-top">
                  <span>GAMEPLAY CAPTURE</span>
                  <span>WORK IN PROGRESS</span>
                </div>
                <div className="media-center">
                  <span className="outline-name">{project.name}</span>
                </div>
              </div>
            )}
            {videoInfo && (
              <button
                type="button"
                className="media-play-overlay"
                onClick={handleToggleVideo}
                aria-label={`Watch ${project.name} gameplay video`}
              >
                <span className="play-triangle" aria-hidden="true">▶</span>
                <span className="play-overlay-text">Watch Gameplay in Portfolio</span>
              </button>
            )}
          </div>
        )}
      </div>

      <div className="project-meta">
        <div>
          <span>MY ROLE</span>
          <strong>{project.role}</strong>
        </div>
        <div>
          <span>PLATFORM</span>
          <strong>{project.platform}</strong>
        </div>
        <div>
          <span>TECH STACK</span>
          <strong>{project.tech.join(' · ')}</strong>
        </div>
      </div>

      <p className="project-intro">{project.shortDescription || project.description}</p>

      <div className="case-grid">
        <div>
          <h3>
            What I built<span>01 /</span>
          </h3>
          <ul className="built-list">
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            Technical highlights<span>02 /</span>
          </h3>
          <div className="highlight-list">
            {project.highlights.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="challenges">
        <h3>
          Challenges & solutions<span>03 /</span>
        </h3>
        <div className="challenge-grid">
          {project.challenges.map((item, index) => (
            <article key={item.title}>
              <span className="challenge-number">0{index + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="project-actions">
        {project.links?.playStore && (
          <LinkButton url={project.links.playStore} primary>
            <span aria-hidden="true">▶</span> Google Play <span aria-hidden="true">↗</span>
          </LinkButton>
        )}

        {project.links?.itch && (
          <LinkButton url={project.links.itch} primary={!project.links?.playStore}>
            <span aria-hidden="true">🎮</span> Play on Itch.io <span aria-hidden="true">↗</span>
          </LinkButton>
        )}

        {videoInfo ? (
          <button
            type="button"
            className={`link-btn inline-gameplay-btn ${isPlayingVideo ? 'active-video' : ''}`}
            onClick={handleToggleVideo}
          >
            <span aria-hidden="true">{isPlayingVideo ? '✕' : '▷'}</span>{' '}
            {isPlayingVideo ? 'Close Video' : 'Watch Gameplay'}
          </button>
        ) : (
          <LinkButton url={null} unavailable="Gameplay soon">
            <span aria-hidden="true">▷</span> Watch Gameplay
          </LinkButton>
        )}

        {currentVideoUrl && (
          <a
            href={currentVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-direct-link"
            title="Open on YouTube"
          >
            YouTube <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <p className="repo-note">
        {project.links?.repository ? (
          <a href={project.links.repository} target="_blank" rel="noopener noreferrer">
            View source on GitHub
          </a>
        ) : (
          project.repositoryNote
        )}
      </p>
    </section>
  );
}
