import React, { useState } from 'react';
import '../styles/education.css';

const Education = ({ education, setEducation }) => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [field, setField] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedSchool, setEditedSchool] = useState('');
  const [editedDegree, setEditedDegree] = useState('');
  const [editedField, setEditedField] = useState('');
  const [editedStartDate, setEditedStartDate] = useState('');
  const [editedEndDate, setEditedEndDate] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const addEducation = () => {
    if (school &&   field && startDate ) {
      setEducation([
        ...education,
        {
          id: Date.now(),
          institution: school,
          degree,
          field,
          startDate,
          endDate,
          description,
        }
      ]);
      setSchool('');
      setDegree('');
      setField('');
      setStartDate('');
      
    }
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const startEditing = (edu) => {
    setEditingId(edu.id);
    setEditedSchool(edu.institution);
    setEditedDegree(edu.degree);
    setEditedField(edu.field);
    setEditedStartDate(edu.startDate);
    setEditedEndDate(edu.endDate);
    setEditedDescription(edu.description);
  };

  const saveEdit = (id) => {
    setEducation(education.map((edu) =>
      edu.id === id
        ? {
            ...edu,
            institution: editedSchool,
            degree: editedDegree,
            field: editedField,
            startDate: editedStartDate,
            endDate: editedEndDate,
            description: editedDescription,
          }
        : edu
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  
  return (
    <div className="education-component">
      <h2>Education</h2>

      <div className="education-form">
        <input
          type="text"
          placeholder="School name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
       
        <input
          type="text"
          placeholder="Field of Study"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
        <input
          type="month"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
       
        <button onClick={addEducation}>Add</button>
      </div>

      <ul className="education-list">
        {education.map((edu) => (
          <li key={edu.id}>
            {editingId === edu.id ? (
              <>
                <input
                  type="text"
                  value={editedSchool}
                  onChange={(e) => setEditedSchool(e.target.value)}
                />
              
                <input
                  type="text"
                  value={editedField}
                  onChange={(e) => setEditedField(e.target.value)}
                />
                <input
                  type="month"
                  value={editedStartDate}
                  onChange={(e) => setEditedStartDate(e.target.value)}
                />
              
               
                <button onClick={() => saveEdit(edu.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span><strong>{edu.institution}</strong></span> - <span>{edu.degree}</span> - <span>{edu.field}</span> - <span>{edu.startDate}  {edu.endDate}</span>
                <p>{edu.description}</p>
                <button onClick={() => startEditing(edu)}>Edit</button>
                <button onClick={() => deleteEducation(edu.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
