import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/app.css';
import Skills from './components/skills';
import Languages from './components/language';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import ProfessionalSummary from './components/summary';
import Preview from './components/preview';

function App() {
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [professionalSummary, setProfessionalSummary] = useState('');

  const loadExample = () => {
    setContact({
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "123-456-7890",
      address: "123 Example Street, City",
      website: 'CODEON.COM',
      linkedin: "linkedin.com/in/janedoe",
      github: "github.com/janedoe",
    });

    setProfessionalSummary("Experienced software developer with a strong background in full-stack web development and cloud infrastructure.");

    setSkills([
      { id: uuidv4(), name: "JavaScript", level: "50" },
      { id: uuidv4(), name: "React", level: "100" },
      { id: uuidv4(), name: "HTML", level: "90" },
      { id: uuidv4(), name: "CSS", level: "60" },
      { id: uuidv4(), name: "JAVA", level: "90" },
      { id: uuidv4(), name: "C++", level: "90" },
    ]);

    setLanguages([
      { id: uuidv4(), name: "English", level: "78" },
      { id: uuidv4(), name: "French", level: "90" },
      { id: uuidv4(), name: "ARABIC", level: "50" },
      { id: uuidv4(), name: "TURKISH", level: "70" },
      { id: uuidv4(), name: "SOOMALI", level: "90" },
    ]);

    setEducation([
      {
        id: uuidv4(),
        institution: "University of Technology",
        degree: "BSc Computer Science",
        startDate: "2021",
      },
       {
        id: uuidv4(),
        institution: "University of Challengers",
        degree: "BSc depate theory",
        startDate: "2028",
      },
      {
        id: uuidv4(),
        institution: "University of Tabliiq",
        degree: "BSc of INDHO ADEYG",
        startDate: "2025",
      },
    ]);

    setExperience([
      {
        id: uuidv4(),
        company: "Riseup",
        role: "Frontend Developer",
        duration: "2023",
      },
    ]);

    setProjects([
      {
        id: uuidv4(),
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my skills and projects.",
      },
    ]);
  };

  const clearAll = () => {
    setContact({});
    setProfessionalSummary('');
    setSkills([]);
    setLanguages([]);
    setEducation([]);
    setExperience([]);
    setProjects([]);
  };

  return (
    <div className="app-container">

      <div className="form-section">
      <div className="button-group" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button onClick={loadExample}>Load Example CV</button>
        <button onClick={clearAll} style={{ marginLeft: '1rem' }}>Clear All</button>
      </div>
        <Contact contact={contact} setContact={setContact} />
        <ProfessionalSummary 
          summary={professionalSummary} 
          setSummary={setProfessionalSummary} 
        />
        <Skills skills={skills} setSkills={setSkills} />
        <Languages languages={languages} setLanguages={setLanguages} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
        <Projects projects={projects} setProjects={setProjects} />
      </div>

      <div className="preview-section">
        <Preview 
          contact={contact}
          professionalSummary={professionalSummary}
          skills={skills}
          languages={languages}
          education={education}
          experience={experience}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
