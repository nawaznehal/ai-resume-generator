import axios from 'axios';


export const generateResume = async (formData) => {
    try {
        const response = await axios.post('http://localhost:5000/generate-resume', formData);
        return response.data;
    } catch (error) {
        console.error("Error generating resume", error);
        return { success: false, message: "failed to generate resume."};
    }

};