"use client"
import React, { useState } from 'react';

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    contractData: {
      email: '',
      phone: '',
      address: '',
      github: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      stackOverflow: '',
      devUsername: '',
    },
    educationData: [
      { title: '', duration: '', institution: '' },
    ],
    experienceData: [
      { title: '', company: '', duration: '' },
    ],
    personalData: {
      name: '',
      profile: '',
      designation: '',
      description: '',
      email: '',
      phone: '',
      address: '',
      github: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      stackOverflow: '',
      leetcode: '',
      devUsername: '',
      resume: '',
    },
    projectData: [
      { name: '', description: '', tools: [''], role: '', code: '', demo: '', image: '' },
    ],
    skillData: [''],
  });

  const handleChange = (e, section, index, field) => {
    const value = e.target.value;
    setFormData(prevState => {
      const updatedSection = Array.isArray(prevState[section])
        ? [...prevState[section]]
        : { ...prevState[section] };

      if (Array.isArray(prevState[section])) {
        updatedSection[index][field] = value;
      } else {
        updatedSection[field] = value;
      }

      return { ...prevState, [section]: updatedSection };
    });
  };

  const handleAddItem = (section) => {
    setFormData(prevState => ({
      ...prevState,
      [section]: [...prevState[section], { title: '', duration: '', institution: '' }],
    }));
  };

  const handleRemoveItem = (section, index) => {
    setFormData(prevState => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contract Data</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.contractData.email}
          onChange={(e) => handleChange(e, 'contractData', null, 'email')}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={formData.contractData.phone}
          onChange={(e) => handleChange(e, 'contractData', null, 'phone')}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={formData.contractData.address}
          onChange={(e) => handleChange(e, 'contractData', null, 'address')}
        />
      </div>
      {/* Repeat for other contract data fields */}

      <h2>Education Data</h2>
      {formData.educationData.map((item, index) => (
        <div key={index}>
          <label>Title</label>
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleChange(e, 'educationData', index, 'title')}
          />
          <label>Duration</label>
          <input
            type="text"
            value={item.duration}
            onChange={(e) => handleChange(e, 'educationData', index, 'duration')}
          />
          <label>Institution</label>
          <input
            type="text"
            value={item.institution}
            onChange={(e) => handleChange(e, 'educationData', index, 'institution')}
          />
          <button type="button" onClick={() => handleRemoveItem('educationData', index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddItem('educationData')}>Add Education</button>

      {/* Repeat for Experience Data, Personal Data, Project Data, and Skill Data */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PortfolioForm;
