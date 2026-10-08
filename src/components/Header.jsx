import { navigation } from '../data/navigation';
import { profile } from '../data/profile';
import { resume } from '../data/resume';

export default function Header({ active, menuOpen, setMenuOpen, scrolled }) {
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Go to home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">{profile.initials}</span>
        <span className="brand-name">{profile.name}</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="sr-only">Toggle navigation</span><span></span><span></span>
      </button>
      <nav id="main-nav" className={`main-nav${menuOpen ? ' open' : ''}`}>
        {navigation.map((item) => (
          <a key={item} href={`#${item}`} className={active === item ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            {item[0].toUpperCase() + item.slice(1)}
          </a>
        ))}
        <a className="resume-nav-link" href={resume.href} target="_blank" rel="noreferrer">
          {resume.label} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
