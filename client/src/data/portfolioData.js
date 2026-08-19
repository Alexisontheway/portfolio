import {
  Code2,
  Workflow,
  Lightbulb,
  Brain,
  Layers,Shield
} from 'lucide-react';

const EMAIL = "priyanshualex@gmail.com";
const LOCATION = 'Kolkata, India';
const GITHUB = 'https://github.com/Alexisontheway';
const LINKEDIN = 'https://linkedin.com/in/priyanshu-pramanik-422124245';


export const personalInfo = Object.freeze({
  name: 'Priyanshu Pramanik',
  title: 'Software Engineer',
  tagline: 'Building production-ready software, intelligent automation, and AI-powered systems from architecture to deployment.',
  location: LOCATION,
  email: EMAIL,
  phone: '+91 6204058150',
  linkedin: LINKEDIN,
  github: GITHUB,
  resumeUrl: '/resume.pdf?v=' + new Date().getTime(),
});

export const systemProfile = Object.freeze({
  status: 'Available',
  location: LOCATION,
  focusAreas: ['Full-Stack Systems', 'Intelligent Automation', 'AI Engineering'],
  currentStack: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'Python', 'Docker'],
  highlights: [
    { value: '4+', label: 'Applications' },
    { value: '100+', label: 'Leads / Day' },
    { value: '8.95', label: 'CGPA' },
  ],
});

export const aboutText = {
  headline: 'Engineering Reliable Software Systems.',
  paragraphs: [
    "I'm a Computer Science undergraduate focused on building end-to-end systems — from responsive frontends to resilient backends and automated workflows.",
    "My work spans full-stack web development, intelligent data processing, and workflow automation. I've built tools that clean messy datasets, automate lead generation, and streamline repetitive operations — with a focus on reliability and maintainability.",
    "I care about systems that are clean, performant, and production-ready — not just functional on localhost.",
  ],
  highlights: [
    { label: 'Leads Generated Daily', value: '100+' },
    { label: 'Data Cleaning Time Saved', value: '85%' },
    { label: 'End-to-End Application Development', value: "4+"}
  ],
};

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,

    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
    ],
  },

  {
    title: "Frontend",
    icon: Layers,

    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Workflow,

    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "JWT",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    icon: Brain,

    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Neon PostgreSQL",
    ],
  },

  {
    title: "Tools & Platforms",

    icon: Lightbulb,

    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "VS Code",
    ],
  },
];
export const projects = [
  {
    id: 'jarvis',
    title: 'Jarvis',
    subtitle: 'Local-First AI Assistant with Voice',
    description:
      'A modular personal AI assistant running 100% on your PC — no cloud, no API keys. Text/voice chat, web search, file ops, reminders, and hands-free wake word ("hey jarvis") or clap detection. Built as an event-bus OS where 7 isolated modules communicate only through typed async events.',
    impact: 'Zero-cost, fully private AI assistant with voice I/O, local LLM (Ollama), and tool-calling — all in one Python process.',
    techStack: ['Python', 'FastAPI', 'Ollama', 'faster-whisper', 'Piper TTS', 'openWakeWord', 'SQLite', 'DuckDuckGo', 'sounddevice'],
    features: [
      'Event-bus architecture: 7 modules (brain, tools, memory, speech, wake, web, kernel) with zero inter-module imports — swap any component in isolation',
      'Hands-free voice: wake-phrase ("hey jarvis") + clap detection (crest-factor signal analysis) → records command → local STT/TTS roundtrip',
      'Tool-calling agent loop with per-conversation locks, gated conversation resets (LLM requests, user confirms), and Ollama-native streaming with think:false for 3x speed',
      'Persistent memory: SQLite-backed conversation history + long-term facts + reminders, auto-expires stale threads',
      'Real-time dashboard: SSE streams tokens + live orb state (listening→thinking→speaking→idle) driven by actual module events',
      '30+ test suite: mock LLM providers, HTTP transports, fake audio — zero external deps in CI',
    ],
    github: 'https://github.com/Alexisontheway/Jarvis',
    demo: null,
    status: 'Source',
    featured: true,
    category: 'ai',
  },
  {
    id: "movie-recommender",
    title: 'Wanna Watch',
    subtitle: 'AI-Powered Movie Discovery Platform',
    description:
      'A full-stack movie recommendation platform that combines machine learning with real-time TMDB integration.',
    impact: 'Hybrid ML + TMDB engine delivering personalized recommendations across 800,000+ movies with cosine similarity scoring, 100-point quiz algorithm, and real-time enrichment.',
    techStack: ['React', 'Node.js', 'Express', 'FastAPI', 'Python', 'scikit-learn', 'PostgreSQL', 'TMDB API', 'JWT Auth', 'Vercel', 'Render'],
    features: [
      'ML content-based filtering using TF-IDF & Cosine Similarity on 4,800+ movies with TMDB enrichment',
      'Hybrid recommendation engine combining ML similarity scores with TMDB similar movies API',
      '5-question personality quiz with 100-point scoring algorithm (genre 50pts, rating 20pts, era 15pts)',
      'Full movie detail pages with YouTube trailers, cast photos, where to watch, and budget/revenue',
      'JWT authentication with watchlist, favorites, star ratings, and "Recommend from Favorites" feature',
      'Real-time global search across 800,000+ movies with debounced instant dropdown results',
      'Multi-movie mode: pick up to 5 movies for combined AI-powered suggestions',
      'Microservices architecture deployed across Vercel (frontend), Render (backend + ML), and Neon (PostgreSQL)',
    ],
    github: 'https://github.com/Alexisontheway/movie-recommender',
    demo: 'https://movie-recommender-ten-weld.vercel.app',
    status: 'Live',
    featured: true,
    category: 'ai',
  },
   {
    id: "data-cleaner",
    title: 'CleanFlow',
    subtitle: 'Automated Data Pipeline',
    description:
      'An automated pipeline that ingests raw datasets, identifies inconsistencies, removes duplicates, validates formats, and outputs clean, analysis-ready data. Built to handle messy real-world data efficiently with detailed reporting.',
    impact: 'Automated ETL pipeline for validating, transforming, and standardizing structured datasets with real-time reporting.',
    techStack: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Uvicorn', 'RESTful APIs'],
    features: [
      'Automated duplicate detection and removal',
      'Format validation for emails, phones, and dates',
      'Business-rule validation checks for schema consistency',
      'Structured Excel reports for stakeholder review',
      'Batch processing for large-scale datasets',
    ],
    github: 'https://github.com/Alexisontheway/intelligent-data-cleaning-tool',
    demo: 'https://intelligent-data-cleaning-tool.onrender.com/',
    status: 'Live',
    featured: true,
    category: 'automation',
  },
  {
    id: 'dailytaskapp',
    title: 'TaskForce',
    subtitle: 'Full-Stack Productivity Platform',
    description:
      'A comprehensive task management application built with a modern full-stack architecture. Features real-time updates, priority-based organization, deadline tracking, and a clean dashboard interface designed for daily productivity workflows.',
    impact: 'Designed using scalable MVC architecture with secure JWT authentication and PostgreSQL-backed persistence.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Vanilla JS', 'REST API', 'JWT Auth'],
    features: [
      'Priority-based task organization with smart sorting',
      'Real-time status updates and progress tracking',
      'Secure authentication with JWT tokens',
      'RESTful API with input validation and error handling',
      'Responsive UI with dark/light mode support',
    ],
    github: 'https://github.com/Alexisontheway/Daily-Task-App',
    demo: 'https://daily-task-app-2.onrender.com',
    status: 'Live',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'applyai',
    title: 'ApplyAI',
    subtitle: 'AI Job-Search Co-Pilot',
    description:
      'An AI-powered job-search campaign manager that turns the manual grind of applying into a data-driven pipeline — track applications on a kanban board, match your resume to job descriptions with machine learning, and auto-draft tailored cover letters with a local LLM.',
    impact: 'End-to-end job-search campaign manager with ML resume-JD matching, OSINT job discovery, and zero-cost, private LLM cover letters.',
    techStack: ['React', 'TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'FastAPI', 'Supabase', 'Ollama'],
    features: [
      'Pipeline kanban: drag applications through 7 stages, from Saved to Offer',
      'ML resume-JD matching with Sentence Transformers — semantic scoring, not keyword counting',
      'OSINT job discovery across LinkedIn, Indeed, Naukri, and career pages',
      'Local LLM cover-letter generation via Ollama — zero API cost, fully private',
      'Analytics: funnel metrics, board ROI, and best-performing resume',
    ],
    github: 'https://github.com/Alexisontheway/applyai',
    demo: null,
    status: 'Source',
    featured: true,
    category: 'automation',
  },]

  ;

export const experience = [
  {
    role: 'Technical Intern',
    company: 'GAOTek Inc.',
    location: 'Remote — Kolkata, India',
    period: 'August 2025 – November 2025',
    type: 'Internship',
    description:
      'Handled AI-assisted technical writing, product documentation, and lead generation operations across automation and SaaS workflows.',
    achievements: [
      'Documented 120+ products (4–5 daily) with detailed specifications, supplier links, and feature descriptions into a standardized internal database',
      'Designed a repeatable product documentation workflow that reduced manual entry errors and improved data organization',
      'Generated 100+ qualified leads daily using Apollo and Clay, maintaining database accuracy for follow-up',
      'Built and executed automated email outreach campaigns using Apollo and Thunderbird for scalable lead engagement',
      'Integrated multiple SaaS tools (Apollo, Clay, Thunderbird) to create a unified lead generation pipeline',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Swami Vivekananda University',
    location: 'Kolkata, India',
    period: '2024 – 2027 (Expected)',
    grade: 'CGPA: 8.89 / 10',
    type: 'Undergraduate',
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Engineering',
    institution: 'Government Polytechnic Khutri',
    location: 'Khutri, India',
    period: '2021 – 2024',
    grade: 'Distinction',
    type: 'Diploma',
  },
];


export const certifications = [
  {
    title: "CS50's Introduction to Computer Science",
    issuer: 'HarvardX (edX)',
    year: '2024',
    icon: Code2,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Software Engineering',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2024',
    icon: Layers,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: 'HarvardX (edX)',
    year: '2025',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: "OSINT Using Python",
    issuer: 'CyberVidyaPeeth',
    year: '2023',
    icon: Shield,
    color: 'from-slate-500 to-indigo-600',
  }
  
];


  
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
