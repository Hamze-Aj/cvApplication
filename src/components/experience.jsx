import React, { useState } from 'react';
import '../styles/experience.css'; 

const Experience = ({ experience, setExperience }) => {
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newDuration, setNewDuration] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editedCompany, setEditedCompany] = useState('');
  const [editedRole, setEditedRole] = useState('');
  const [editedDuration, setEditedDuration] = useState('');

  const addExperience = () => {
    if (newCompany && newRole && newDuration) {
      setExperience([
        ...experience,
        {
          id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
          company: newCompany,
          role: newRole,
          duration: newDuration,
        },
      ]);
      setNewCompany('');
      setNewRole('');
      setNewDuration('');
    }
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const startEditing = (exp) => {
    setEditingId(exp.id);
    setEditedCompany(exp.company);
    setEditedRole(exp.role);
    setEditedDuration(exp.duration);
  };

  const saveEdit = (id) => {
    setExperience(
      experience.map(exp =>
        exp.id === id
          ? {
              ...exp,
              company: editedCompany,
              role: editedRole,
              duration: editedDuration,
            }
          : exp
      )
    );
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="experience-component">
      <h2>Experience</h2>

      <div className="experience-form">
        <input
          type="text"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          placeholder="Company"
        />
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Role"
        />
        <input
          type="number"
          value={newDuration}
          onChange={(e) => setNewDuration(e.target.value)}
          placeholder="year"
        />
        <button onClick={addExperience}>Add Experience</button>
      </div>

      <ul className="experience-list">
        {experience.map((exp) => (
          <li key={exp.id}>
            {editingId === exp.id ? (
              <>
                <input
                  type="text"
                  value={editedCompany}
                  onChange={(e) => setEditedCompany(e.target.value)}
                />
                <input
                  type="text"
                  value={editedRole}
                  onChange={(e) => setEditedRole(e.target.value)}
                />
                <input
                  type="number"
                  value={editedDuration}
                  onChange={(e) => setEditedDuration(e.target.value)}
                />
                <button onClick={() => saveEdit(exp.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{exp.company}</strong> – {exp.role} ({exp.duration})
                <button onClick={() => startEditing(exp)}>Edit</button>
                <button onClick={() => deleteExperience(exp.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
