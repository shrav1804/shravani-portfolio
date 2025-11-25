import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';

const projectsData = [
    {
        id: 1,
        title: "Hybrid CNN Models for Automated Waste Classification",
        summary: "Developed a hybrid CNN ensemble model combining Inception–ResNet-v2, EfficientNetB3, and DenseNet201 to classify waste into nine categories with high accuracy. Enhanced model generalization through transfer learning and advanced data augmentation.",
        fullDetails: "Optimized training pipelines to reduce computation time by 40%, supporting scalable real-time image classification. Built multi-model fusion architecture to increase inference accuracy and robustness.",
        skills: "Python, CNN, Deep Learning, Transfer Learning, TensorFlow/Keras, Data Augmentation",
        link: "https://example.com/waste-classification",
        image: project1Img
    },
    {
        id: 2,
        title: "Hospital Management Platform (Java Spring Boot + React.js)",
        summary: "Built a full-stack hospital management platform integrating Spring Boot backend and React.js frontend with role-based authentication. Designed dashboards for doctors and patients to improve communication and workflow.",
        fullDetails: "Implemented JWT-based RBAC authentication, analytics dashboards that improved operational efficiency by 45%, and created a scalable backend that enabled 30% faster data-driven reporting. Enhanced patient-doctor coordination through dynamic scheduling and secure record management.",
        skills: "Java, Spring Boot, React.js, JWT, RBAC, REST APIs, SQL, Analytics Dashboards",
        link: "https://example.com/hospital-platform",
        image: project2Img
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
