import SectionHeading from '../SectionHeading';
import { skills, skillsHeading } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <SectionHeading index="02" label="Skills">{skillsHeading[0]}<br />{skillsHeading[1]}</SectionHeading>
      <div className="skill-groups">
        {skills.map((group, index) => (
          <article className="skill-group reveal" key={group.title}>
            <div className="skill-number">{String(index + 1).padStart(2, '0')}</div>
            <div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <ul className="tags" aria-label={`${group.title} skills`}>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
