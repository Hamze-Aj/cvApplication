import React, { useState } from "react";
import '../styles/language.css'; 


const Languages = ({ languages, setLanguages }) => {
  const [newLanguage, setNewLanguage] = useState('');
  const [newLevel, setNewLevel] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedLevel, setEditedLevel] = useState('');

  const addLanguage = () => {
    if (newLanguage && newLevel) {
      setLanguages([
        ...languages,
        { id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(), name: newLanguage, level: Number(newLevel) }
      ]);
      setNewLanguage('');
      setNewLevel('');
    }
  };

  const deletLanguage = (id) => {
    setLanguages(languages.filter(language => language.id !== id));
  };

  const startEditing = (language) => {
    setEditingId(language.id);
    setEditedName(language.name);
    setEditedLevel(language.level);
  };

  const saveEdit = (id) => {
    setLanguages(languages.map(language =>
      language.id === id
        ? { ...language, name: editedName, level: Number(editedLevel) }
        : language
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="language-Compnent">
      <h2>languages</h2>

      <div className="languageForm">
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          placeholder="new language"
          min="1"
          max="100"
        />
        <input
          type="number"
          value={newLevel}
          onChange={(e) => setNewLevel(e.target.value)}
          placeholder="Level"
          min="1"
          max="100"
        />
        <button onClick={addLanguage}> add Language </button>
      </div>

      <ul className="language-list">
        {languages.map((language) => {
          let content;
          if (editingId === language.id) {
            content = (
              <>
                <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                <input type="number" value={editedLevel} onChange={(e) => setEditedLevel(e.target.value)} />
                <button onClick={() => saveEdit(language.id)}>save</button>
                <button onClick={cancelEdit}>cancel</button>
              </>
            );
          } else {
            content = (
              <>
                <span>{language.name}</span> - <span>{language.level}%</span>
                <button onClick={() => startEditing(language)}>Edit</button>
                <button onClick={() => deletLanguage(language.id)}>Delete</button>
              </>
            );
          }
          return <li key={language.id}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default Languages;
