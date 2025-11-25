import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "Oklahoma State University",
            period: "2023–2025",
            details: [
                "Developed a mobile-friendly React Native app for animal & forage data, improving efficiency by 40%.",
                "Built RESTful Node.js APIs, increasing backend speed by 50%.",
                "Implemented JWT RBAC for secure access, improving data security by 60%.",
                "Created Tableau dashboards for decision-making (+30%).",
                "Integrated ML models for growth & yield predictions (+25% accuracy)."
            ]
        },
        {
            role: "Software Engineer",
            company: "Hewlett Packard Enterprise",
            period: "2022–2023",
            details: [
                "Worked on HPE GreenLake hybrid cloud platform, boosting resource visibility by 45%.",
                "Built dashboards using React.js, Grommet, HPE Design System.",
                "Developed backend services with Java & Node.js (+50% API performance).",
                "Integrated Azure services, reducing provisioning time by 60%.",
                "Implemented OAuth2, JWT, RBAC for security (+70%).",
                "Automated CI/CD pipelines using Jenkins, Docker, Kubernetes (65% faster releases)."
            ]
        }
    ];

    const skills = {
        "Programming Languages": ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
        "Frontend": ["React.js", "React Hooks", "React Native", "AngularJS"],
        "UI/UX & Design": ["Redux", "Bootstrap", "Material UI", "jQuery", "SASS", "Figma", "Illustrator", "WCAG"],
        "Version Control & Tools": ["Git", "GitHub", "GitLab", "Bitbucket", "VS Code"],
        "Testing": ["Jest", "Mocha", "Selenium"],
        "Cloud & DevOps": ["Azure", "AWS", "GCP (Basics)", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
        "ML/AI": ["Gen AI", "AI Agents", "NLP", "CNN", "Deep Learning", "RAG"],
        "Databases": ["MySQL", "MongoDB", "PostgreSQL"]
    };

    return (
        <div className="about-container">
            <motion.section
                className="section journey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2>My Journey</h2>
                <p>
                    My journey began with a strong interest in full-stack development, UI/UX design, and cloud technologies. Over the years, I gained experience building scalable applications, working across frontend and backend systems, and contributing to research-driven engineering solutions. My journey spans enterprise software development at Hewlett Packard Enterprise and applied research in agricultural technologies at Oklahoma State University.
                </p>
            </motion.section>

            <motion.section
                className="section experiences"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2>Experiences</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="exp-header">
                                <h3>{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                                <span className="period">{exp.period}</span>
                            </div>
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="section skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2>Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>
                            <div className="skill-tags">
                                {items.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className="section contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className="contact-container">
                    <span className="contact-text">Get in touch: <a href="mailto:shravanichekuri18@gmail.com">shravanichekuri18@gmail.com</a></span>
                    <div className="contact-icons">
                        <a href="mailto:shravanichekuri18@gmail.com" aria-label="Email">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                        </a>
                        <a href="https://linkedin.com/in/shravanichekuri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
