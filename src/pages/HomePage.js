import React, {useState} from 'react';
import Form from '../components/Form';
import ResumeDisplay from '../components/ResumeDisplay';
import { generateResume } from '../api/api';

const HomePage = () => {
    const [resumeData, setResumeData] = useState(null);

    const handleSubmit = async (formData) => {
        const generatedResume = await generateResume(formData);
        setResumeData(generatedResume);
    };

    return (
        <div>
            <h1>AI Resume Generator</h1>
            <Form onSubmit={handleSubmit} />
            <ResumeDisplay resumeData={resumeData} />
        </div>
    );
};

export default HomePage;