import ArrowIcon from '../ArrowIcon';
import SectionHeading from '../SectionHeading';
import { experience, experienceHeading, resume } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <SectionHeading index="04" label="Experience">{experienceHeading[0]}<br />{experienceHeading[1]}</SectionHeading>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item reveal" key={`${item.period}-${item.role}`}>
            <p className="timeline-date">{item.period}</p>
            <div className="timeline-role"><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.description}</p></div>
            <span className="timeline-marker" aria-hidden="true"></span>
          </article>
        ))}
      </div>
      <a className="button button-outline reveal" href={resume.href} download>{resume.label} <ArrowIcon download /></a>
    </section>
  );
}
