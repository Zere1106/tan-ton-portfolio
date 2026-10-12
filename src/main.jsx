import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { XMarks, SectionLabel, CvButton, ContactLinks, LinkButton } from './components/Elements';
import { ProjectCard } from './components/ProjectCard';
import { ZenStackDetail } from './components/ZenStackDetail';
import './styles.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import '@fontsource/kalam/latin-400.css';

function App() {
  const [route, setRoute] = React.useState(() => window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      if (window.location.hash === '#zen-stack-detail' || window.location.hash.startsWith('#/project/zen-stack')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const zenProject = projects.find((p) => p.id === 'zen-stack');
  const isZenDetail = route === '#zen-stack-detail' || route.startsWith('#/project/zen-stack');

  if (isZenDetail && zenProject) {
    return (
      <ZenStackDetail
        project={zenProject}
        onBack={() => {
          window.location.hash = '#zen-stack';
        }}
      />
    );
  }

  const email = profile.contacts.find((contact) => contact.label === 'Email');

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="wordmark">
            {profile.name}
            <span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#regnora">REGNORA</a>
            <a href="#zen-stack">Zen Stack</a>
            <a href="#skills">Skills</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </nav>
          <CvButton />
        </div>
      </header>
      <main id="main" className="portfolio">
        <section id="home" className="paper hero" aria-labelledby="hero-title">
          <SectionLabel number="01" right={`SELECTED WORK / ${profile.year}`}>
            GAME DEVELOPER PORTFOLIO
          </SectionLabel>
          <div className="hero-body">
            <XMarks />
            <span className="hero-note script-note">Turning ideas into play.</span>
            <h1 id="hero-title">
              PORTFOLIO<span className="title-period">.</span>
            </h1>
            <div className="hero-subtitle">
              <span>{profile.role}</span>
              <span className="subtitle-rule" />
              <span>{profile.specialty}</span>
            </div>
          </div>
          <div className="hero-footer">
            <div>
              <strong>{profile.name.toUpperCase()}</strong>
              <span>{profile.location}</span>
            </div>
            <a className="hero-explore" href="#regnora">
              EXPLORE MY WORK <span aria-hidden="true">↓</span>
            </a>
            <span className="hero-year">{profile.year}</span>
          </div>
          <div className="corner-lines" aria-hidden="true" />
        </section>

        <div className="between-cards">
          <span>BUILT WITH CURIOSITY. POWERED BY COFFEE.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

        <section id="about" className="paper about" aria-labelledby="about-title">
          <SectionLabel number="02">THE PERSON BEHIND THE PIXELS</SectionLabel>
          <div className="about-grid">
            <div className="portrait-window">
              <div className="window-bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>about_me.unity</span>
                <span aria-hidden="true">− ×</span>
              </div>
              <div className="portrait-content">
                {profile.portrait ? (
                  <img src={profile.portrait} alt={profile.name} />
                ) : (
                  <>
                    <span className="portrait-coordinate">10.8231° N / 106.6297° E</span>
                    <span className="monogram">
                      TT<span>.</span>
                    </span>
                    <span className="portrait-caption">
                      PLAYER ONE
                      <br />
                      <strong>{profile.name.toUpperCase()}</strong>
                    </span>
                    <span className="portrait-placeholder">PORTRAIT PLACEHOLDER</span>
                  </>
                )}
              </div>
              <div className="window-footer">
                <span>BASED IN VIETNAM</span>
                <span>LOCAL TIME / UTC +7</span>
              </div>
            </div>
            <div className="about-copy">
              <div className="about-title">
                <div>
                  <span className="script-note">A little introduction</span>
                  <h2 id="about-title">ABOUT ME</h2>
                </div>
                <XMarks />
              </div>
              <h3>
                {profile.name.toUpperCase()}
                <span> / UNITY GAME DEVELOPER</span>
              </h3>
              <p>{profile.about}</p>
              <p className="availability">
                <span aria-hidden="true">✳</span>
                {profile.availability}
              </p>
              <ContactLinks compact />
            </div>
          </div>
        </section>

        {/* Featured Project: REGNORA */}
        <ProjectCard project={projects[0]} featured />

        {/* Additional Game Projects */}
        {projects.length > 1 && (
          <div className="projects-collection" aria-label="Other game projects">
            {projects.slice(1).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewProject={() => {
                  window.location.hash = '#zen-stack-detail';
                }}
              />
            ))}
          </div>
        )}

        {/* Hidden anchor for router validation */}
        <div id="zen-stack-detail" aria-hidden="true" style={{ display: 'none' }} />

        <section id="skills" className="paper skills" aria-labelledby="skills-title">
          <SectionLabel number="05" right="ALWAYS A WORK IN PROGRESS">
            THE TOOLKIT
          </SectionLabel>
          <div className="skills-heading">
            <div>
              <span className="script-note">Tools of the trade</span>
              <h2 id="skills-title">SKILLS</h2>
            </div>
            <p>
              From gameplay on the screen
              <br />
              to the systems behind it.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className={group.learning ? 'learning' : ''}>
                <span className="skill-number">{group.number} /</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.learning && <span className="learning-note">STILL LEVELING UP ✳</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="cv" className="paper cv" aria-labelledby="cv-title">
          <SectionLabel number="06">EXPERIENCE & EDUCATION</SectionLabel>
          <div className="cv-grid">
            <div>
              <span className="script-note">The short version</span>
              <h2 id="cv-title">MY CV</h2>
              <p>
                Learning by building.
                <br />
                One system at a time.
              </p>
              <CvButton primary />
              <span className="pdf-note">
                {`/Tan-Ton-CV.pdf` ? 'Full CV available as PDF.' : 'Full CV as PDF · coming soon'}
              </span>
            </div>
            <div className="cv-details">
              <article>
                <span className="eyebrow">EDUCATION</span>
                <h3>{profile.education}</h3>
                <p>Focused on game development and practical software projects.</p>
              </article>
              <article>
                <span className="eyebrow">MAIN PROJECT EXPERIENCE</span>
                <h3>
                  {projects[0].name}
                  <span> / SOLO UNITY GAME DEVELOPER</span>
                </h3>
                <p className="experience-status">IN DEVELOPMENT / {profile.year}</p>
                <ul>
                  {profile.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="paper contact" aria-labelledby="contact-title">
          <SectionLabel number="07" right="LET’S MAKE SOMETHING PLAYABLE">
            NEXT CHAPTER
          </SectionLabel>
          <XMarks />
          <span className="script-note">Have a game in mind?</span>
          <h2 id="contact-title">
            THANK YOU<span>.</span>
          </h2>
          <p className="contact-subtitle">Let’s talk about games.</p>
          <p className="contact-availability">{profile.availability}</p>
          <LinkButton url={email?.url} primary unavailable="Email soon">
            Send Email
          </LinkButton>
          <ContactLinks />
          <div className="contact-bottom">
            <span>{profile.location}</span>
            <span>GOOD GAMES START WITH A CONVERSATION.</span>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>
          © {profile.year} {profile.name}. Built with care.
        </span>
        <a href="#home">BACK TO TOP ↑</a>
        <span>UNITY / C# / A LITTLE CURIOSITY</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
