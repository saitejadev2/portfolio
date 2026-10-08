import SectionHeading from '../SectionHeading';
import { about } from '../../data/about';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <SectionHeading index="01" label="About">{about.heading[0]}<br />{about.heading[1]}</SectionHeading>
      <div className="about-content reveal">
        <p className="lead">{about.lead}</p>
        <div className="about-columns">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="stats" aria-label="Career highlights">
          {about.stats.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}
