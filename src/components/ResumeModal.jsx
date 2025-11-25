import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaTimes, FaDownload } from 'react-icons/fa';
import './ResumeModal.css';
import resumePdf from '../assets/resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="resume-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="resume-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <div className="resume-header">
                        <h2>Shravani Chekuri</h2>
                        <div className="resume-contact">
                            <a href="tel:+14052692419"><FaPhone /> +1 (405) 269-2419</a>
                            <span>|</span>
                            <a href="mailto:shravanichekuri18@gmail.com"><FaEnvelope /> shravanichekuri18@gmail.com</a>
                            <span>|</span>
                            <a href="https://www.linkedin.com/in/shravanichekuri/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/shravanichekuri</a>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h3>Summary</h3>
                        <p>
                            Software Engineer with 4 years of experience creating responsive, high-performance web applications using React.js, JavaScript, HTML5, and CSS3. Skilled in building user-centric interfaces, integrating APIs, and collaborating in Agile teams to deliver scalable, visually engaging solutions that enhance user experience and business impact.
                        </p>
                    </div>

                    <div className="resume-section">
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li><strong>Programming Languages:</strong> Java, Python, SQL, HTML, CSS, JavaScript, TypeScript</li>
                            <li><strong>Frontend Technologies:</strong> React.js, React Hooks, React Native, AngularJS</li>
                            <li><strong>UI Frameworks & Libraries:</strong> Redux, Bootstrap, Material-UI, jQuery, SASS</li>
                            <li><strong>Design & Prototyping:</strong> UI/UX, CMS, Figma, Adobe Illustrator, WCAG</li>
                            <li><strong>Version Control & Tools:</strong> Git, GitHub, Copilot, GitLab, Bitbucket, Visual Studio Code, NPM</li>
                            <li><strong>Testing & Debugging:</strong> Jest, Mocha, Selenium</li>
                            <li><strong>Development Methodologies:</strong> Agile, Scrum</li>
                            <li><strong>Data Visualization & Analytics:</strong> Tableau</li>
                            <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
                            <li><strong>Cloud & DevOps:</strong> Azure, AWS, GCP (basics), Jenkins, Docker, CI/CD, Kubernetes</li>
                            <li><strong>AI & ML:</strong> Gen AI, AI Agents, NLP, CNN, Deep Learning, RAG, Prompting</li>
                        </ul>
                    </div>

                    <div className="resume-section">
                        <h3>Work Experience</h3>

                        <div className="job">
                            <div className="job-header">
                                <h4>Oklahoma State University, Stillwater, OK</h4>
                                <span>Oct 2023 – Aug 2025</span>
                            </div>
                            <div className="job-role">Research Assistant | Frontend Developer</div>
                            <ul>
                                <li>Developed a <strong>responsive, mobile-friendly React Native application</strong> that allowed farmers and researchers to seamlessly record and analyze animal and forage data, improving on-field data entry efficiency by 40%.</li>
                                <li>Built <strong>RESTful APIs</strong> with Node.js and Express for farm activity management, increasing data processing speed by 50%.</li>
                                <li>Integrated JWT-based <strong>Role-based access control (RBAC)</strong> to ensure secure access for farmers, managers, and researchers, strengthening data security by 60%.</li>
                                <li>Created dashboards with <strong>Tableau</strong> to visualize growth and forage metrics, boosting analytical decision-making by 30%.</li>
                                <li>Incorporated <strong>Machine Learning models</strong> to predict animal growth and forage yield trends, increasing forecasting accuracy by 25% and supporting data-driven agricultural management.</li>
                            </ul>
                        </div>

                        <div className="job">
                            <div className="job-header">
                                <h4>Hewlett Packard Enterprise, Bangalore, India</h4>
                                <span>Jan 2022 – Jul 2023</span>
                            </div>
                            <div className="job-role">Software Engineer</div>
                            <ul>
                                <li>Developed the <strong>HPE GreenLake hybrid cloud platform</strong>, enabling enterprises to manage workloads across on-premises, edge, and cloud, improving <strong>resource visibility by 45%.</strong></li>
                                <li>Designed <strong>responsive front-end dashboards</strong> using React.js, Grommet, and HPE Design System, enhancing <strong>user engagement by 40%.</strong></li>
                                <li>Collaborated with design teams to translate UI mockups into <strong>CMS</strong> ready web components, ensuring brand consistency.</li>
                                <li>Built <strong>RESTful backend services</strong> with Java and Node.js, improving <strong>API performance and scalability by 50%.</strong></li>
                                <li>Integrated Microsoft Azure services, reducing <strong>manual provisioning time by 60%</strong> and strengthening identity management.</li>
                                <li>Implemented OAuth2, JWT, and RBAC security, improving data protection and compliance by 70%.</li>
                                <li>Automated deployments through <strong>CI/CD pipelines</strong> using Jenkins, Docker, and Kubernetes, cutting <strong>release time by 65%</strong> and improving reliability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h3>Projects</h3>

                        <div className="project-item">
                            <h4>Hybrid CNN Models for Automated Waste Classification</h4>
                            <ul>
                                <li>Developed a <strong>hybrid CNN ensemble model</strong> (Inception–ResNet-v2, EfficientNetB3, DenseNet201) to classify waste into nine categories, improving model generalization through transfer learning and advanced data augmentation, and optimized training pipelines to reduce computation time by 40%, enabling scalable real-time classification.</li>
                            </ul>
                        </div>

                        <div className="project-item">
                            <h4>Hospital Management Platform Using Java Spring Boot and React.js</h4>
                            <ul>
                                <li>Developed a full-stack <strong>Hospital Management Platform</strong> using Java Spring Boot, React.js and implemented RBAC authentication with JWT, building analytics dashboards that improved operational efficiency by 45%, enhanced patient–doctor coordination, and enabled 30% faster data-driven reporting.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h3>Education</h3>
                        <div className="education-item">
                            <div className="job-header">
                                <h4>Oklahoma State University, Stillwater, OK, USA</h4>
                                <span>Aug 2023 – Aug 2025</span>
                            </div>
                            <div className="job-role">Master of Science in Computer Science</div>
                            <p><strong>Core:</strong> DSA; OOPs Concepts; Database Systems; Web Development; Cloud Computing; Distributed Systems; AI & ML</p>
                            <p><strong>Certifications:</strong> Azure Fundamentals (AZ 900), Tableau Desktop Specialist, Generative AI</p>
                        </div>
                    </div>

                    <div className="resume-footer">
                        <a href={resumePdf} download="Shravani_Chekuri_Resume.pdf" className="download-btn">
                            <FaDownload /> Download PDF
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;
