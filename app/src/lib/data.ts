// Static data for all public website content
// Easily swappable with a headless CMS (Sanity, Contentful) later

export const solutions = [
  {
    id: 'web-platform',
    icon: '🌐',
    title: 'Web & Platform Development',
    description: 'Fast, responsive, and scalable websites & web apps built with cutting-edge technology.',
    features: ['Next.js & React', 'Custom Web Apps', 'E-commerce', 'API Integration'],
    color: 'accent',
  },
  {
    id: 'ai-automation',
    icon: '🤖',
    title: 'AI & Automation Systems',
    description: 'Chatbots, CRM automation, workflow tools, and AI-powered processes that save time.',
    features: ['AI Chatbots', 'CRM Automation', 'Workflow Tools', 'Data Pipelines'],
    color: 'teal',
  },
  {
    id: 'growth-marketing',
    icon: '📈',
    title: 'Growth Marketing',
    description: 'SEO, paid ads, funnel optimization, and analytics-driven strategies for real results.',
    features: ['SEO & Content', 'Paid Ads', 'Funnel Optimization', 'Analytics'],
    color: 'accent',
  },
  {
    id: 'custom-software',
    icon: '⚙️',
    title: 'Custom Software',
    description: 'Tailor-made dashboards, CRM, ERP systems designed exactly for your business needs.',
    features: ['Custom Dashboards', 'CRM Systems', 'ERP Solutions', 'SaaS Products'],
    color: 'teal',
  },
];

export const caseStudies = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    metrics: ['+250% Traffic', '+120% Sales'],
    description: 'Complete e-commerce rebuild with AI-powered recommendations.',
    tags: ['React', 'Next.js', 'AI'],
  },
  {
    id: 'startup-launch',
    title: 'Startup Launch',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    metrics: ['0 → 10K Users', '90 Days'],
    description: 'Full product build from concept to 10,000 users in just 90 days.',
    tags: ['Product', 'Growth', 'DevOps'],
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    metrics: ['-70% Manual Work', '3× Faster'],
    description: 'Automated workflows replacing hours of repetitive manual processes daily.',
    tags: ['AI', 'Automation', 'CRM'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    feedback: 'Infotech transformed our entire digital presence. The results exceeded every KPI we set. Truly a world-class team.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Founder, GrowthLab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    feedback: 'The AI automation they built saved us 30+ hours per week. ROI was visible within the first month of launch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Marketing Director, ScaleUp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    feedback: 'Working with Infotech felt like having a dedicated product team. Delivery was on time and quality was exceptional.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'CTO, FinanceFlow',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    feedback: 'Their custom software replaced three separate tools we were paying for. Cleaner, faster, and exactly what we needed.',
    rating: 5,
  },
];

export const blogPosts = [
  {
    slug: 'ai-automation-business-2025',
    title: 'How AI Automation is Reshaping Businesses in 2025',
    excerpt: 'AI is no longer a future concept — it\'s actively reducing operational costs and driving growth for businesses of all sizes.',
    category: 'AI Trends',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    date: '2026-08-10',
    readTime: '5 min read',
  },
  {
    slug: 'nextjs-web-performance',
    title: 'Next.js 14: Why Performance-First Development Wins',
    excerpt: 'Deep dive into why the world\'s fastest growing companies are choosing Next.js for their web infrastructure.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    date: '2026-08-05',
    readTime: '7 min read',
  },
  {
    slug: 'seo-growth-strategies-2025',
    title: '8 SEO Strategies That Actually Drive Growth in 2025',
    excerpt: 'From AI-generated search results to semantic optimization — the SEO playbook has changed. Here\'s what\'s working now.',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    date: '2026-07-28',
    readTime: '6 min read',
  },
];

export const announcements = [
  { id: 1, title: '🚀 New AI Automation Package Launched', link: '/updates', pinned: true },
  { id: 2, title: '🏆 Infotech Ranked Top 10 Digital Agency 2026', link: '/updates', pinned: true },
  { id: 3, title: '📢 Internship Applications Now Open — Apply Today!', link: '/careers', pinned: false },
  { id: 4, title: '🎉 100+ Projects Delivered Milestone Reached', link: '/updates', pinned: false },
  { id: 5, title: '💡 Free Website Audit — Limited Slots Available', link: '/contact', pinned: false },
];

export const internships = [
  {
    id: 1,
    role: 'Full-Stack Developer Intern',
    duration: '3 Months',
    skills: ['React', 'Node.js', 'TypeScript'],
    location: 'Remote / Hybrid',
    description: 'Build real production features on live client projects. Mentored by senior engineers.',
  },
  {
    id: 2,
    role: 'Digital Marketing Intern',
    duration: '2 Months',
    skills: ['SEO', 'Analytics', 'Content'],
    location: 'Remote',
    description: 'Run real campaigns, analyze data, and learn growth marketing hands-on.',
  },
  {
    id: 3,
    role: 'UI/UX Design Intern',
    duration: '3 Months',
    skills: ['Figma', 'Prototyping', 'Design Systems'],
    location: 'Remote / Hybrid',
    description: 'Design interfaces for client products with guidance from senior designers.',
  },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
];

export const footerLinks = {
  services: [
    { label: 'Web Development', href: '/#solutions' },
    { label: 'AI & Automation', href: '/#solutions' },
    { label: 'Growth Marketing', href: '/#solutions' },
    { label: 'Custom Software', href: '/#solutions' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Updates', href: '/updates' },
  ],
  resources: [
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'ROI Calculator', href: '/#tools' },
    { label: 'Free Audit', href: '/#tools' },
  ],
};

export const socialLinks = [
  { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { platform: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
];

export const whyInfotech = [
  { icon: '⚡', title: 'Fast Delivery with Agile Process', desc: 'Sprint-based delivery means you see progress every single week.' },
  { icon: '🤖', title: 'AI-Driven Development', desc: 'We integrate AI tools to build smarter, faster, and more scalable solutions.' },
  { icon: '📊', title: 'ROI-Focused Execution', desc: 'Every decision is tied back to measurable business outcomes and growth.' },
  { icon: '🔒', title: 'Secure & Scalable Architecture', desc: 'Enterprise-grade security and infrastructure that scales with your growth.' },
  { icon: '🤝', title: 'Dedicated Support Team', desc: '24/7 support with a named account manager for every client.' },
];
