import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/preview.css'; 

const Preview = ({
  contact,
  professionalSummary,
  skills,
  languages,
  education,
  experience,
  projects
}) => {
  return (
    <div className="cv-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <img 
          src={contact.photo || 'NONE'} 
          alt="Profile" 
          className="profile-img"  
        />
        
        {/* Contact Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Contact</h3>
          <ul className="contact-list">
            <li><FaPhone /> {contact.phone || ''}</li>
            <li><FaEnvelope /> {contact.email || ''}</li>
            <li><FaMapMarkerAlt /> {contact.address || ''}</li>
            <li><FaGlobe /> {contact.website || ''}</li>
            <li><FaLinkedin /> {contact.linkedin || ''}</li>
            <li><FaGithub /> {contact.github || ''}</li>
          </ul>
        </div>
        
        {/* Skills Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Skills</h3>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill.id}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Languages Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Languages</h3>
          <ul className="skills-list">
            {languages.map(language => (
              <li key={language.id}>
                <span className="skill-name">{language.name}</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${language.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        <h1 className="name">{contact.name || 'Your Name'}</h1>
        <h2 className="title">{contact.title || 'Professional Title'}</h2>
        
        {/* Professional Summary */}
        <section className="section">
          <h3 className="section-title">Professional Summary</h3>
          <p className="description">
            {professionalSummary || 'Enter your professional summary here...'}
          </p>
        </section>
        
        
        
        {/* Education */}
        <section className="section">
          <h3 className="section-title">Education</h3>
          {education.map(edu => (
            <div className="education-item" key={edu.id}>
               <h4>{edu.field}</h4>
              <div className="item-header">
                <div className="degree">{edu.degree}</div>
                <div className="date">{edu.startDate}</div>
              </div>
              <div className="university">{edu.institution}</div>
            </div>
          ))}
        </section>  


        {/* Work Experience */}
        <section className="section">
          <h3 className="section-title">Work Experience</h3>
          {experience.map(exp => (
            <div className="experience-item" key={exp.id}>
              <div className="item-header">
                <div className="company">{exp.company}</div>
                <div className="date">{exp.duration}</div>
              </div>
              <div className="position">{exp.role}</div>
            </div>
          ))}
        </section>
        
        {/* Projects */}
        <section className="section">
          <h3 className="section-title">Projects</h3>
          {projects.map(project => (
            <div className="experience-item" key={project.id}>
              <div className="company">{project.title}</div>
            
              <p className="description">{project.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};



export default Preview;