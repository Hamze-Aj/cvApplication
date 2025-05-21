import React, { useState } from 'react';
import '../styles/projects.css';

const Projects = ({ projects, setProjects }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const addProject = () => {
    if (!newTitle || !newDescription) return;
    const newProject = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
    };
    setProjects([...projects, newProject]);
    setNewTitle('');
    setNewDescription('');
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const startEditing = (project) => {
    setEditingId(project.id);
    setEditedTitle(project.title);
    setEditedDescription(project.description);
  };

  const saveEdit = (id) => {
    setProjects(projects.map((project) =>
      project.id === id
        ? { ...project, title: editedTitle, description: editedDescription }
        : project
    ));
    setEditingId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  return (
    <div className="projects-component">
      <h2>Projects</h2>

      <div className="project-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Project title"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Project description"
          rows={3}
          cols={30}
        />
        <button onClick={addProject}>Add Project</button>
      </div>

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            {editingId === project.id ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Edit title"
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Edit description"
                  rows={3}
                  cols={30}
                />
                <button onClick={() => saveEdit(project.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span><strong>{project.title}</strong></span> — <span>{project.description}</span>
                <button onClick={() => startEditing(project)}>Edit</button>
                <button onClick={() => deleteProject(project.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
