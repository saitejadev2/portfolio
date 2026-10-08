// Add, remove, or reorder project objects here.
// `art` supports: "dashboard", "phone", or "commerce".
export const projectsHeading = 'Selected work.';

export const projects = [
  {
    title: 'Pulse Analytics',
    type: 'Full-stack',
    year: '2026',
    featured: true,
    description: 'A focused analytics workspace that turns live product data into clear decisions.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    art: 'dashboard',
    link: '#contact',
  },
  {
    title: 'Finflow',
    type: 'Mobile experience',
    year: '2025',
    featured: false,
    description: 'A personal finance experience designed to make everyday money habits easier.',
    technologies: ['Next.js', 'TypeScript', 'API'],
    art: 'phone',
    link: '#contact',
  },
  {
    title: 'Northstar Shop',
    type: 'Web platform',
    year: '2025',
    featured: false,
    description: 'A quick, accessible storefront with a simple content and checkout experience.',
    technologies: ['React', 'Stripe', 'CMS'],
    art: 'commerce',
    link: '#contact',
  },
];
