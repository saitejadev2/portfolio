import { contact } from '../../data/contact';
import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner reveal">
        <p className="section-index">05 / Contact</p>
        <h2 id="contact-title">{contact.heading[0]}<br /><em>{contact.heading[1]}</em></h2>
        <p className="contact-copy">{contact.message}</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <span>↗</span></a>
        <div className="contact-footer">
          <div className="social-links" aria-label="Social links">
            {contact.socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
          </div>
          <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        </div>
      </div>
    </section>
  );
}
