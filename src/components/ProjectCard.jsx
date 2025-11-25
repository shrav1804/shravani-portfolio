import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="project-card"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card-header">
                <div className="project-image">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="card-summary">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    {!isExpanded && (
                        <button
                            className="read-more-btn"
                            onClick={() => setIsExpanded(true)}
                        >
                            Read More
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="card-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="details-content">
                            <h4>Full Details</h4>
                            <p>{project.fullDetails}</p>

                            <h4>Skills Used</h4>
                            <p className="skills">{project.skills}</p>

                            <div className="action-buttons">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                    Visit Project
                                </a>
                                <button
                                    className="show-less-btn"
                                    onClick={() => setIsExpanded(false)}
                                >
                                    Show Less
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectCard;
