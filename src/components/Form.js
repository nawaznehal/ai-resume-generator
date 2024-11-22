import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',

        email: '',

        phone: '',

        skills: '',

        experience: '',

        education: '',

        languages: 'English',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //basically stopping default behavior for now, we implement after

        onSubmit(formData);
    };
return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Skills:
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </label>
      <label>
        Work Experience:
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </label>
      <label>
        Education:
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
      </label>
      <label>
        Languages:
        <select
          name="languages"
          value={formData.languages}
          onChange={handleChange}
        >
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </label>
      <button type="submit">Generate Resume</button>
    </form>
  );

};

export default Form;