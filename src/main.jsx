import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Skills from './components/skills.jsx'
import Languages from './components/language.jsx'
import Experience from './components/experience.jsx'
import Contact from './components/contact.jsx'
import Education from './components/education.jsx'
import Projects from './components/projects.jsx'
import ProfessionalSummary from './components/summary.jsx'
import Preview from './components/preview.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App />
  </StrictMode>,
)
