import React from "react";

const ResumeDisplay = ({ resumeData }) => {
    if (!resumeData) return <div>No resume generated yet.</div>;

    return (
        <div>
            <h2>
                Your Resume
            </h2>
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
        </div>
    );
};

export default ResumeDisplay