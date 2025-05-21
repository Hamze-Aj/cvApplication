import React, { useState } from 'react';
import '../styles/summary.css';

const ProfessionalSummary = ({ summary, setSummary }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="summary-component">
      <h2>Professional Summary</h2>
      {isEditing ? (
        <>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Write a short summary about yourself..."
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{summary}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ProfessionalSummary;
