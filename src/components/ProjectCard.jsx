import React from 'react';
import { LinkButton, SectionLabel } from './Elements';
import { MobilePhoneTrio } from './MobilePhoneTrio';

export function ProjectCard({ project, featured = false }) {
  const isZen = project.id === 'zen-stack';

  return (
    <section
      id={project.id}
      className={`paper project-card ${featured ? 'featured' : ''} ${isZen ? 'zen-project-card' : ''}`}
      aria-labelledby={`${project.id}-title`}
    >
      <SectionLabel
        number={featured ? '03' : '04'}
        right={featured ? 'FEATURED PROJECT / ONLINE' : 'MOBILE PROJECT / ANDROID'}
      >
        {featured ? 'FEATURED PROJECT' : 'PROJECT SHOWCASE'}
      </SectionLabel>

      <div className="project-heading">
        <div>
          <span className="script-note">{isZen ? 'Relaxing & nature-inspired' : 'Made from scratch.'}</span>
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

      <div className={`project-media ${isZen ? 'zen-trio-media' : ''}`}>
        {isZen ? (
          <MobilePhoneTrio project={project} />
        ) : project.screenshot ? (
          <img src={project.screenshot} alt={project.screenshotAlt} />
        ) : (
          <div className="media-placeholder">
            <div className="media-top">
              <span>GAMEPLAY CAPTURE / 01</span>
              <span>WORK IN PROGRESS</span>
            </div>
            <div className="media-center">
              <span className="outline-name">{project.name}</span>
              <span className="capture-note">Gameplay screenshot coming soon</span>
              <span className="media-rule" />
              <span className="media-small">A real game. A work in progress.</span>
            </div>
            <div className="media-bottom">
              <span>UNITY / C# / MULTIPLAYER</span>
              <span>ANDROID + PC</span>
            </div>
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
        {project.links?.itch && (
          <LinkButton url={project.links.itch} primary>
            <span aria-hidden="true">🎮</span> Play on Itch.io <span aria-hidden="true">↗</span>
          </LinkButton>
        )}
        <LinkButton url={project.links?.gameplay} unavailable="Gameplay soon">
          <span aria-hidden="true">▷</span> Watch Gameplay
        </LinkButton>
      </div>

      <p className="repo-note">
        {project.links.repository ? (
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
