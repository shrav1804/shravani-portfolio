import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMenu, FiX, FiMail, FiLinkedin, FiGithub, FiAward } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiBootstrap, SiWordpress, SiDrupal, SiFigma, SiMysql, SiPostgresql, SiMongodb, SiGitlab } from 'react-icons/si';
import emailjs from '@emailjs/browser';

import profilePhoto  from './assets/profile.jpg';
import project1Img   from './assets/Screenshot 2026-03-16 185645.png';
import project2Img   from './assets/OSU.jpg';
import project3Img   from './assets/1_hVk451hshaIQgyI3dBtofQ.webp';



// ═════════════════════════════════════════════
// NAVBAR
// ═════════════════════════════════════════════
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About',          id: 'about'          },
    { label: 'Experience',     id: 'experience'     },
    { label: 'Projects',       id: 'projects'       },
    { label: 'Skills',         id: 'skills'         },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Connect',        id: 'connect'        },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-dark-900 bg-opacity-80 backdrop-blur-lg z-40 border-b border-accent-blue border-opacity-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent cursor-pointer"
          >
            Shravani Chekuri
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 lg:gap-10 xl:gap-12">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-accent-blue transition-colors duration-300 text-sm lg:text-base xl:text-lg font-medium tracking-wide"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-accent-blue" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 pt-2 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-accent-blue hover:bg-dark-700 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};


// ═════════════════════════════════════════════
// HERO
// ═════════════════════════════════════════════
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,179,237,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.3), transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.13, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(159,122,234,0.3), transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99,235,218,0.15), transparent 70%)' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-10">
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            Shravani Chekuri
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light tracking-wide">
          Software Engineer | Frontend & AI-Enabled Developer
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building accessible, high-performance web applications and modern digital experiences using React, WordPress, and scalable frontend technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button onClick={() => scrollToSection('connect')} className="btn-primary inline-flex items-center justify-center gap-2">
            Get In Touch <FiArrowRight />
          </button>
          <button className="btn-secondary inline-flex items-center justify-center gap-2">
            Download Resume <FiDownload />
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a href="https://linkedin.com/in/shravanichekuri" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-xl hover:text-accent-blue transition-colors">
            <FaLinkedin />
          </motion.a>
          {/* ✅ UPDATED: GitHub link */}
          <motion.a href="https://github.com/shrav1804" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-xl hover:text-accent-blue transition-colors">
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-accent-blue text-xl">↓</motion.div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// ABOUT
// ═════════════════════════════════════════════
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Intro</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-loose">
              I'm a Software Engineer specializing in responsive, accessible web applications — turning design concepts into polished, high-performance digital experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-loose">
              I build with React, modern frontend tooling, and CMS platforms. I enjoy collaborating across teams to deliver solutions that are both technically solid and visually engaging.
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass-card">
                <div className="text-sm text-gray-400 mb-2">Location</div>
                <div className="text-xl font-semibold text-accent-blue">United States</div>
              </div>
              <div className="glass-card">
                <div className="text-sm text-gray-400 mb-2">Status</div>
                <div className="text-xl font-semibold text-accent-cyan">Open to Opportunities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ UPDATED: Profile photo — small circle */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="glow-border rounded-full p-1">
              <div className="w-56 h-100 rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Shravani Chekuri"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-glow opacity-30 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// PROJECTS
// ═════════════════════════════════════════════
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Cloud Management Platform',
      shortDescription:
        'A large-scale cloud management interface with responsive dashboards and optimized front-end architecture for enterprise environments.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Cloud APIs'],
      image: project1Img,
    },
    {
      id: 2,
      title: 'Field Operations & Data Collection Platform',
      shortDescription:
        'A responsive web platform for field operations teams enabling real-time data collection, reporting, and operational visibility.',
      technologies: ['React', 'REST APIs', 'Responsive Design', 'Database Integration'],
      image: project2Img,
    },
    {
      id: 3,
      title: 'Website Redesign & Accessibility Optimization',
      shortDescription:
        'A complete web platform redesign focused on WCAG accessibility compliance, responsive components, and UX improvements.',
      technologies: ['React', 'HTML', 'CSS', 'Figma', 'Accessibility Standards'],
      image: project3Img,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-cyan opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -8 }} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-20 rounded-xl blur transition duration-300 group-hover:duration-200" />

              <div className="glass-card relative flex flex-col overflow-hidden h-full">

                {/* Project screenshot */}
                <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-5 text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Read More */}
                <motion.button whileHover={{ x: 4 }} className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors text-sm font-semibold mt-auto pt-4 border-t border-white border-opacity-10 w-full">
                  Read More <FiArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// EXPERIENCE
// ═════════════════════════════════════════════
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Mentor A Promise',
      period: 'Nov 2025 – Present',
      bullets: [
        "Led the redesign of the organization's website using React and modern frontend practices.",
        'Translated high-fidelity Figma mockups into responsive, accessible UI components.',
        'Implemented WCAG accessibility standards across the platform.',
        'Optimized site performance and improved mobile engagement.',
      ],
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Oklahoma State University',
      period: 'Sep 2023 – Aug 2025',
      bullets: [
        'Designed and maintained responsive web interfaces supporting thousands of users.',
        'Built reusable UI templates and improved navigation architecture.',
        'Collaborated with backend teams to integrate REST APIs and structured data systems.',
        'Improved site performance through frontend architecture optimizations.',
      ],
    },
    {
      id: 3,
      role: 'Software Engineer',
      company: 'Hewlett Packard Enterprise',
      period: 'Jan 2022 – Jul 2023',
      bullets: [
        'Developed responsive UI components aligned with enterprise design systems.',
        'Optimized application performance through improved asset delivery pipelines.',
        'Contributed to front-end architecture improvements across multiple products.',
        'Worked closely with UX designers to implement pixel-perfect interfaces.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan opacity-30" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div key={exp.id} variants={itemVariants} className={`relative ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto md:mr-0'}`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-dark-900 top-8 z-10" />
                <motion.div whileHover={{ x: idx % 2 === 0 ? 10 : -10 }} className={`glass-card ml-12 md:ml-0 ${idx % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-accent-blue">{exp.role}</h3>
                      <p className="text-base font-semibold text-white mt-0.5">{exp.company}</p>
                      <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="text-accent-blue mt-1.5 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// TECH STACK
// ═════════════════════════════════════════════
const TechStack = () => {
  const categories = [
    {
      name: 'Frontend',
      color: 'from-accent-blue to-accent-cyan',
      skills: [
        { name: 'HTML5',      icon: FaHtml5,     color: '#E34C26' },
        { name: 'CSS3',       icon: FaCss3Alt,   color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs,        color: '#F7DF1E' },
        { name: 'React',      icon: FaReact,     color: '#61DAFB' },
        { name: 'Next.js',    icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Bootstrap',  icon: SiBootstrap, color: '#7952B3' },
      ],
    },
    {
      name: 'CMS',
      color: 'from-accent-purple to-accent-blue',
      skills: [
        { name: 'WordPress', icon: SiWordpress, color: '#0073AA' },
        { name: 'Drupal',    icon: SiDrupal,    color: '#0678BE' },
      ],
    },
    {
      name: 'UI / UX',
      color: 'from-accent-cyan to-accent-purple',
      skills: [
        { name: 'Figma',          icon: SiFigma,   color: '#F24E1E' },
        { name: 'Wireframing',    icon: FaDatabase, color: '#3B82F6' },
        { name: 'Design Systems', icon: FaReact,   color: '#6B7280' },
      ],
    },
    {
      name: 'Databases',
      color: 'from-accent-blue to-accent-cyan',
      skills: [
        { name: 'MySQL',      icon: SiMysql,      color: '#00758F' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB',    icon: SiMongodb,    color: '#13AA52' },
      ],
    },
    {
      name: 'Dev Tools',
      color: 'from-accent-purple to-accent-blue',
      skills: [
        { name: 'Git',       icon: FaGitAlt,   color: '#F1502F' },
        { name: 'GitHub',    icon: FaGithub,   color: '#FFFFFF' },
        { name: 'CI/CD',     icon: SiGitlab,   color: '#FC6D26' },
        { name: 'REST APIs', icon: FaDatabase, color: '#3B82F6' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10">
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants} className="relative group">
              <div
                className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-xl blur transition duration-300 group-hover:duration-200"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--color1), var(--color2))`,
                  '--color1': category.color.split(' ')[1],
                  '--color2': category.color.split(' ')[3],
                }}
              />
              <div className="glass-card relative">
                <h3 className={`text-xl lg:text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div key={skill.name} variants={skillVariants} whileHover={{ y: -5, scale: 1.08 }} className="flex flex-col items-center justify-center p-4 lg:p-5 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all">
                        <Icon size={40} style={{ color: skill.color }} className="mb-3" />
                        <span className="text-xs lg:text-sm font-medium text-gray-300 text-center leading-tight">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// CERTIFICATIONS
// ═════════════════════════════════════════════
const Certifications = () => {
  const certifications = [
    { id: 1, title: 'Azure Fundamentals AZ-900',  icon: '☁️', color: 'from-blue-500 to-cyan-500'   },
    { id: 2, title: 'Tableau Desktop Specialist',    icon: '📊', color: 'from-orange-500 to-red-500'  },
    { id: 3, title: 'Generative AI Certification',   icon: '🤖', color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} whileHover={{ y: -12, rotateZ: 1 }} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-25 rounded-xl blur transition duration-300 group-hover:duration-200`} />
              <div className="glass-card relative flex flex-col items-center justify-center text-center py-10 px-6 overflow-hidden min-h-72">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="text-7xl mb-5">
                  {cert.icon}
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                <p className="text-sm lg:text-base text-accent-blue font-semibold mb-6 tracking-widest uppercase">{cert.credential}</p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-blue bg-opacity-10 border border-accent-blue border-opacity-30 text-accent-blue text-sm font-medium">
                  <FiAward size={16} /> Verified
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// CONNECT
// ═════════════════════════════════════════════
const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  }).catch((error) => {
    console.error('Email send failed:', error);
  });
};


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="connect" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-30" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto mt-4" />
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          If you are interested in collaborating, discussing opportunities, or learning more about my work, feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

          {/* Contact links */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.a variants={itemVariants} href="mailto:shravanichekuri18@gmail.com" whileHover={{ x: 10 }} className="glass-card group flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent-blue bg-opacity-20 flex items-center justify-center text-accent-blue text-xl group-hover:bg-opacity-30 transition-all">
                <FiMail />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">shravanichekuri18@gmail.com</p>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="https://linkedin.com/in/shravanichekuri" target="_blank" rel="noopener noreferrer" whileHover={{ x: 10 }} className="glass-card group flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent-blue bg-opacity-20 flex items-center justify-center text-accent-blue text-xl group-hover:bg-opacity-30 transition-all">
                <FiLinkedin />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-white font-semibold">linkedin.com/in/shravanichekuri</p>
              </div>
            </motion.a>

            {/* ✅ UPDATED: GitHub link in Connect section */}
            <motion.a variants={itemVariants} href="https://github.com/shrav1804" target="_blank" rel="noopener noreferrer" whileHover={{ x: 10 }} className="glass-card group flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent-blue bg-opacity-20 flex items-center justify-center text-accent-blue text-xl group-hover:bg-opacity-30 transition-all">
                <FiGithub />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="text-white font-semibold">github.com/shrav1804</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants} className="glass-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:border-opacity-50 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:border-opacity-50 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue focus:border-opacity-50 transition-colors resize-none" placeholder="Your message..." />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full btn-primary flex items-center justify-center gap-2 mt-6">
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
                {!isSubmitted && <FiArrowRight />}
              </motion.button>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: isSubmitted ? 1 : 0 }} className="text-center text-accent-cyan text-sm">
                {isSubmitted && "Thanks for your message! I'll get back to you soon."}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


// ═════════════════════════════════════════════
// FOOTER
// ═════════════════════════════════════════════
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative overflow-hidden border-t border-accent-blue border-opacity-10">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent mb-2">Shravani Chekuri</h3>
            <p className="text-gray-400 text-sm">Software Engineer | Frontend Developer</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Navigation</h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Experience'].map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent-blue transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                {['Skills', 'Certifications', 'Resume'].map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-accent-blue transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Social</h4>
              <ul className="space-y-2">
                {/* ✅ UPDATED: GitHub link in Footer */}
                <li><a href="https://linkedin.com/in/shravanichekuri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">LinkedIn</a></li>
                <li><a href="https://github.com/shrav1804" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">GitHub</a></li>
                <li><a href="mailto:shravanichekuri18@gmail.com" className="text-gray-400 hover:text-accent-blue transition-colors text-sm">Email</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-20 mb-8" />

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="text-gray-400 text-sm">© {currentYear} Shravani Chekuri. All rights reserved.</div>
          <div className="text-gray-400 text-sm">Built with <span className="text-accent-blue">React</span> & <span className="text-accent-cyan">Tailwind CSS</span></div>
        </motion.div>
      </motion.div>
    </footer>
  );
};


// ═════════════════════════════════════════════
// APP ROOT
// ═════════════════════════════════════════════
function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Certifications />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;