import { Project, SkillCategory, EducationMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Ankit Kumar',
  role: 'Full-Stack Developer',
  tagline: 'Turning Ideas Into Functional Digital Experiences.',
  subtext: 'I build modern web applications, explore new technologies and develop practical solutions through code.',
  introduction: "I'm Ankit Kumar, a BCA student and aspiring Full-Stack Developer passionate about building modern web applications and exploring the intersection of software development and financial technology. I enjoy turning ideas into functional digital products through continuous learning and practical project development.",
  educationShort: 'BCA Student | Graphic Era Deemed to be University',
  graduationDate: 'May 2028',
  location: 'Dehradun, Uttarakhand, India',
  email: 'ankit.ojha1666@gmail.com',
  github: 'https://github.com/ankitojha16',
  linkedin: 'https://www.linkedin.com/in/ankitojha16',
  availability: 'Available for Summer & Semester Full-Stack Internships',
  interests: [
    'Full-Stack Development',
    'Software Architecture',
    'Frontend & Web Systems',
    'Financial Technology',
    'Financial Research',
    'Personal Finance',
    'Financial Markets'
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'wealthtrack',
    title: 'WealthTrack',
    category: 'Personal Finance',
    badge: 'Offline-First PWA',
    tagline: 'Privacy-focused local personal finance and budget engine',
    description: 'An offline-first personal financial tracker engineered with Next.js, React, and TypeScript. All sensitive transactions, income records, and budgetary goals are persisted locally inside the client browser using IndexedDB, guaranteeing total privacy with zero mandatory cloud telemetry.',
    problem: 'Most modern budgeting apps demand cloud account creation, invasive third-party telemetry, and persistent internet access just to record a daily expense.',
    solution: 'Engineered a lightning-fast Progressive Web App (PWA) with client-side IndexedDB persistence, reactive analytics charts, category breakdowns, and exportable financial logs.',
    features: [
      'IndexedDB offline-first local transactional database with zero cloud leak',
      'PWA installation support with service worker offline caching',
      'Interactive income, expense, and category allocation visualizations',
      'Custom budget caps with dynamic visual threshold warnings',
      'Instant transaction filtering by date range, category, and payment mode'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'PWA'],
    myContribution: 'Architected the entire client data layer using IndexedDB, designed the UI system in Tailwind CSS, implemented responsive charts, and configured PWA service workers for offline capability.',
    githubUrl: 'https://github.com/ankitojha16/wealthtrack',
    liveUrl: 'https://wealthtrack-gamma.vercel.app/',
    status: 'Live & Production',
    verifiedNote: 'Fully deployed and functional offline-first PWA with IndexedDB local storage.',
    iconName: 'Wallet',
    previewImage: 'projects/wealthtrack.svg'
  },
  {
    id: 'wealthlens',
    title: 'WealthLens',
    category: 'FinTech Insights',
    badge: 'FinTech Insights',
    tagline: 'Financial intelligence, company research, and market analytics platform',
    description: 'A modern financial analysis platform developed with Next.js, TypeScript, and Supabase. WealthLens provides structured company analytics, financial data visualization, and market metrics designed to empower informed individual investment decisions.',
    problem: 'Retail investors and students often encounter cluttered financial portals full of noise, ads, and disjointed fundamental valuation indicators.',
    solution: 'Designed an editorial dashboard consolidating company financial metrics, research summaries, and market insights into high-readability visual components.',
    features: [
      'Comprehensive company financial profile and ratio dashboards',
      'Supabase database integration foundation for watchlists and user research',
      'Responsive financial metric charts and comparison cards',
      'Clean distinction between verified market indicators and analytical projections',
      'Tailwind CSS dark aesthetic with responsive data tables'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    myContribution: 'Built the front-end layout, integrated Supabase schema foundation, implemented responsive financial data cards, and designed high-density company detail views.',
    githubUrl: 'https://github.com/ankitojha16/wealthlens',
    liveUrl: 'https://wealthlens-inky.vercel.app/',
    status: 'Live Foundation',
    verifiedNote: 'Live deployment showcasing UI architecture, financial data views, and Supabase integration.',
    iconName: 'TrendingUp',
    previewImage: 'projects/wealthlens.svg'
  },
  {
    id: 'wealthcompass',
    title: 'WealthCompass',
    category: 'Personal Finance',
    badge: 'System Architecture',
    tagline: 'Comprehensive multi-asset personal wealth management architecture',
    description: 'A holistic wealth management architecture designed to model holistic net worth, diversified asset classes, liabilities, and long-term milestone goals in one unified schema.',
    problem: 'Personal finance is fragmented across disparate platforms: daily expenses in one app, investments in another, and loan amortizations in spreadsheets.',
    solution: 'Architected an integrated data model and UI workflow connecting income streams, fixed/variable expenses, investment portfolios, and loan amortization schedules.',
    features: [
      'Unified net-worth balance sheet computation logic',
      'Structured loan interest and amortization schedule planner',
      'Investment allocation breakdown (equities, debt, gold, liquid)',
      'Multi-year financial goal progress tracker with projected completion rates',
      'Extensible modular schema designed for future multi-currency support'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Modular Data Modeling'],
    myContribution: 'Formulated the financial data models, state calculation algorithms, and UI wireframes for asset vs liability consolidation.',
    githubUrl: 'https://github.com/ankitojha16/wealthcompas',
    status: 'Architecture & Planning',
    verifiedNote: 'Active architectural design and data-modeling phase; public repository is in development.',
    iconName: 'Compass',
    previewImage: 'projects/wealthcompass.svg'
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    category: 'Academic Systems',
    badge: 'Academic PBL Project',
    tagline: 'Console banking ledger and transactional state machine in C/C++',
    description: 'An academic Project-Based Learning (PBL) application developed in C/C++ modeling core automated teller machine workflows, atomic balance validation, and secure transactional ledgers.',
    problem: 'Understanding banking transactional consistency, input sanitization, and state persistence at the systems programming level.',
    solution: 'Implemented an object-oriented and procedural console application simulating ATM workflows with robust validation, PIN authentication, and transaction log history.',
    features: [
      'Cardholder PIN authentication with failed attempts lockout safety',
      'Atomic cash withdrawal with automated denomination and balance checks',
      'Direct account cash deposits with immediate ledger updates',
      'Real-time account balance inquiries with receipt generation',
      'Persistent audit trail logging timestamped transaction history to file storage'
    ],
    technologies: ['C', 'C++', 'Data Structures', 'File I/O', 'Console Systems'],
    myContribution: 'Wrote the core transactional state logic, balance validation rules, file I/O persistence routines, and interactive terminal interface.',
    status: 'Completed Academic PBL',
    verifiedNote: 'Academic Project-Based Learning system implementing all standard ATM banking operations.',
    iconName: 'CreditCard',
    previewImage: 'projects/atm-management.svg'
  },
  {
    id: 'smartreminder',
    title: 'SmartReminder',
    category: 'Productivity',
    badge: 'Task Management',
    tagline: 'Intuitive task management and scheduled notification system',
    description: 'A web-based smart reminder and productivity dashboard built to help students and developers track project milestones, upcoming assignment deadlines, and daily development habits.',
    problem: 'Generic reminder systems lack developer-centric workflow tags, priority matrices, and clean countdown visuals.',
    solution: 'Crafted a streamlined task tracking application with dynamic priority sorting, categorization, and persistent client state.',
    features: [
      'Multi-tier task prioritization (Urgent, Medium, Low)',
      'Deadline timers with relative humanized countdowns',
      'Category segregation for academic deadlines and coding milestones',
      'Search and filter capabilities by completion status',
      'Clean keyboard-friendly task insertion workflow'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local State Management'],
    myContribution: 'Developed the front-end user experience, interactive task cards, priority badge filtering, and local storage state persistence.',
    githubUrl: 'https://github.com/ankitojha16/SmartReminder',
    status: 'Completed Academic PBL',
    verifiedNote: 'Functional productivity reminder system with priority filtering and deadline tracking.',
    iconName: 'Bell',
    previewImage: 'projects/smartreminder.svg'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and high-performance user interfaces with modern web standards.',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5', category: 'frontend', highlight: true },
      { name: 'CSS3', category: 'frontend', highlight: true },
      { name: 'JavaScript (ES6+)', category: 'frontend', highlight: true },
      { name: 'TypeScript', category: 'frontend', highlight: true },
      { name: 'React', category: 'frontend', highlight: true },
      { name: 'Next.js', category: 'frontend', highlight: true },
      { name: 'Tailwind CSS', category: 'frontend', highlight: true }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Constructing robust server logic, API endpoints, and understanding scalable web architectures.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', category: 'backend', highlight: true },
      { name: 'RESTful APIs', category: 'backend', highlight: true },
      { name: 'HTTP & Routing', category: 'backend' },
      { name: 'Backend Fundamentals', category: 'backend', highlight: true },
      { name: 'Authentication Basics', category: 'backend' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Managing structured data, client-side offline persistence, and cloud backend databases.',
    iconName: 'Database',
    skills: [
      { name: 'Supabase', category: 'database', highlight: true },
      { name: 'IndexedDB (Offline)', category: 'database', highlight: true },
      { name: 'SQL Fundamentals', category: 'database', highlight: true },
      { name: 'Relational Schemas', category: 'database' },
      { name: 'LocalStorage & Cache', category: 'database' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Foundational systems and procedural programming powering deep analytical problem solving.',
    iconName: 'Code2',
    skills: [
      { name: 'C Language', category: 'programming', highlight: true },
      { name: 'C++', category: 'programming', highlight: true },
      { name: 'Data Structures Basics', category: 'programming', highlight: true },
      { name: 'Object-Oriented Logic', category: 'programming' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Cloud',
    description: 'Modern workflow tooling, version control, and automated deployment pipelines.',
    iconName: 'Cpu',
    skills: [
      { name: 'Git', category: 'tools', highlight: true },
      { name: 'GitHub', category: 'tools', highlight: true },
      { name: 'VS Code', category: 'tools', highlight: true },
      { name: 'Vercel Deployment', category: 'tools', highlight: true },
      { name: 'npm / Node Ecosystem', category: 'tools' }
    ]
  },
  {
    id: 'fintech',
    title: 'Domain & Professional Interests',
    description: 'Specialized focus on personal finance architectures, capital markets, and quantitative insights.',
    iconName: 'LineChart',
    skills: [
      { name: 'Financial Technology (FinTech)', category: 'finance', highlight: true },
      { name: 'Personal Finance Software', category: 'finance', highlight: true },
      { name: 'Financial Research', category: 'finance', highlight: true },
      { name: 'Financial Markets & Ratios', category: 'finance', highlight: true },
      { name: 'Offline-First Architectures', category: 'finance' }
    ]
  }
];

export const EDUCATION_LIST: EducationMilestone[] = [
  {
    id: 'geu-bca',
    institution: 'Graphic Era Deemed to be University',
    degreeOrClass: 'Bachelor of Computer Applications (BCA)',
    period: 'August 2025 – May 2028',
    location: 'Dehradun, Uttarakhand, India',
    scoreOrStatus: 'Currently Pursuing (Expected May 2028)',
    highlights: [
      'Focusing on Computer Science fundamentals, Object-Oriented Programming, and Web Development.',
      'Active developer building real-world projects alongside coursework.',
      'Special interest in Financial Technology applications and software architecture.'
    ],
    focusAreas: ['Data Structures', 'Database Management', 'Object-Oriented C++', 'Web Development', 'Software Engineering']
  },
  {
    id: 'vanasthali-xii',
    institution: 'Vanasthali Public School',
    degreeOrClass: 'Class XII – Senior Secondary',
    period: 'Completed March 2025',
    location: 'India',
    scoreOrStatus: 'Commerce with Mathematics',
    highlights: [
      'Developed strong mathematical foundation, calculus, statistics, and financial accounting principles.',
      'Bridged quantitative analytical thinking with programming and algorithm formulation.'
    ],
    focusAreas: ['Mathematics & Statistics', 'Financial Accounting', 'Business Studies', 'Economics']
  },
  {
    id: 'dav-x',
    institution: 'DAV Public School, Muzaffarpur',
    degreeOrClass: 'Class X – Secondary School',
    period: 'Completed March 2023',
    location: 'Muzaffarpur, Bihar, India',
    scoreOrStatus: 'Completed',
    highlights: [
      'Established foundational excellence in Science, Mathematics, and introductory computational logic.',
      'Active participant in school academic and science competitions.'
    ],
    focusAreas: ['Mathematics', 'Science', 'Information Technology Foundations']
  }
];
