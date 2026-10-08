import SectionHeading from '../SectionHeading';
import { projects, projectsHeading } from '../../data/projects';
import ProjectArt from './ProjectArt';

const artColors = ['one', 'two', 'three'];

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <SectionHeading index="03" label="Projects">{projectsHeading}</SectionHeading>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card reveal${project.featured ? ' project-featured' : ''}`} key={project.title}>
            <div className={`project-art art-${artColors[index % artColors.length]}`} aria-hidden="true"><ProjectArt type={project.art} /></div>
            <div className="project-info">
              <div><p className="project-type">{project.type} · {project.year}</p><h3>{project.title}</h3><p>{project.description}</p></div>
              <a className="project-link" href={project.link} aria-label={`View ${project.title}`}>↗</a>
            </div>
            <ul className="project-tech">{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
