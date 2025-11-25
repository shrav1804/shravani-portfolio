import React, { useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Projects from './Projects';
import About from './About';
import profilePic from '../assets/profile.jpg';
import ResumeModal from '../components/ResumeModal';

const Home = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <div className="single-page-container">
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

            <section id="home" className="section-container home-section">
                <div className="home-container">
                    <motion.div
                        className="home-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Hello, <span className="highlight">Shravani Chekuri</span> here 👋</h1>
                        <p className="overview">
                            I am a Software Engineer with 4 years of experience building responsive, high-performance web applications using React.js, JavaScript, HTML5, CSS3, and modern UI frameworks. Skilled in developing user-centric interfaces, creating RESTful APIs, and collaborating in Agile environments. Experienced across full-stack development, cloud platforms (AWS, Azure), and modern DevOps tools. Passionate about scalable systems, frontend engineering, and data-driven applications.
                        </p>
                        <button onClick={() => setIsResumeOpen(true)} className="resume-btn">
                            Resume
                        </button>
                    </motion.div>
                    <motion.div
                        className="home-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="image-placeholder">
                            <img src={profilePic} alt="Shravani Chekuri" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="projects" className="section-container">
                <Projects />
            </section>

            <section id="about" className="section-container">
                <About />
            </section>
        </div>
    );
};

export default Home;
