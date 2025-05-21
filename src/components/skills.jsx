import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/skills.css';

const Skills = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState('');
  const [newLevel, setNewLevel] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedLevel, setEditedLevel] = useState('');

  const addSkill = () => {
    if (newSkill && newLevel) {
      setSkills([...skills, { id: uuidv4(), name: newSkill, level: Number(newLevel) }]);
      setNewSkill('');
      setNewLevel('');
    }
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const startEditing = (skill) => {
    setEditingId(skill.id);
    setEditedName(skill.name);
    setEditedLevel(skill.level);
  };

  const saveEdit = (id) => {
    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, name: editedName, level: Number(editedLevel) } : skill
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="skills-component">
      <h2>Skills</h2>

      <div className="skill-form">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Skill name"
        />
        <input
          type="number"
          value={newLevel}
          onChange={(e) => setNewLevel(e.target.value)}
          placeholder="Skill level"
          min="1"
          max="100"
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>

      <ul className="skill-list">
        {skills.map((skill) => {
          let content;

          if (editingId === skill.id) {
            content = (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="number"
                  value={editedLevel}
                  onChange={(e) => setEditedLevel(e.target.value)}
                  min="1"
                  max="100"
                />
                <button onClick={() => saveEdit(skill.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            );
          } else {
            content = (
              <>
                <span>{skill.name}</span> - <span>{skill.level}%</span>
                <button onClick={() => startEditing(skill)}>Edit</button>
                <button onClick={() => deleteSkill(skill.id)}>Delete</button>
              </>
            );
          }

          return <li key={skill.id}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
