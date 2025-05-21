import React from 'react';
import '../styles/contact.css';

const Contact = ({ contact, setContact }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContact({ ...contact, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="contact-component">
      <h2>Contact Information</h2>

      <div className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={contact.name || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Professional title"
          value={contact.title || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={contact.phone || ''}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={contact.email || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Location"
          value={contact.address || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={contact.linkedin || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={contact.github || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website URL"
          value={contact.website || ''}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
      </div>

    
    </div>
  );
};

export default Contact;