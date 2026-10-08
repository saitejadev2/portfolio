// Add, remove, or reorder project objects here.
// `art` supports: "dashboard", "phone", or "commerce".
export const projectsHeading = 'Selected work.';

export const projects = [
  {
    title: 'Codebase Assistant',
    type: 'Multi-agent AI platform',
    featured: true,
    description: 'A repository-aware AI assistant with semantic code search, debugging support, and validated code-change suggestions across five programming languages.',
    technologies: ['LangGraph', 'OpenAI API', 'Qdrant', 'MCP', 'Tree-sitter', 'FastAPI'],
    art: 'dashboard',
    link: 'https://github.com/saitejaps1/codebase-assistant',
  },
  {
    title: 'Chat App',
    type: 'Distributed real-time system',
    featured: false,
    description: 'A scalable messaging system with WebSocket communication, Redis Pub/Sub, offline delivery, presence tracking, read states, and reconnect synchronization.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'React', 'TypeScript', 'Docker'],
    art: 'phone',
    link: 'https://github.com/saiteja-29/chat-app',
  },
  {
    title: 'Conversational RAG API',
    type: 'Document-grounded AI system',
    featured: false,
    description: 'A conversational question-answering API with PDF and text ingestion, dense retrieval, cross-encoder reranking, persistent chat memory, source citations, and grounded-answer evaluation.',
    technologies: ['FastAPI', 'OpenAI', 'Sentence Transformers', 'Chroma', 'SQLite', 'PyPDF'],
    art: 'commerce',
    link: 'https://github.com/saitejadev2/rag-app',
  },
];
