import ArrowIcon from '../ArrowIcon';
import { hero } from '../../data/hero';
import { profile } from '../../data/profile';

export default function Hero() {
  const titleStart = hero.title.replace(/\s+\S+$/, '');
  const titleEnd = hero.title.match(/\S+$/)?.[0];

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot"></span>{profile.availability}</p>
          <h1 id="hero-title">{titleStart} <em>{titleEnd}</em></h1>
          <p className="hero-intro">I’m {profile.name}, {hero.introduction.charAt(0).toLowerCase() + hero.introduction.slice(1)}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={hero.primaryAction.href}>{hero.primaryAction.label} <ArrowIcon /></a>
            <a className="text-link" href={hero.secondaryAction.href}>{hero.secondaryAction.label} <span>↗</span></a>
          </div>
        </div>
        <aside className="profile-card reveal reveal-delay" aria-label="Developer profile">
          <div className="profile-visual">
            <div className="profile-monogram">{profile.initials}</div>
            <span className="orbit orbit-one"></span><span className="orbit orbit-two"></span>
            <span className="code-tag tag-one">&lt;/&gt;</span><span className="code-tag tag-two">{'{ }'}</span>
          </div>
          <div className="profile-meta">
            <div><span className="meta-label">Based in</span><strong>{profile.location}</strong></div>
            <div><span className="meta-label">Speciality</span><strong>{profile.specialty}</strong></div>
          </div>
        </aside>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to discover</span><span className="scroll-line"></span></a>
    </section>
  );
}
