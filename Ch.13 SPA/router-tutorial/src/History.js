import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
		navigate(-1);
	}

    const handleGoHome = () => {
		navigate('/');
	}

    return (
        <div>
            <button name="back" onClick={handleGoBack}>Back</button>
            <button name="go" onClick={handleGoHome}>Home</button>
        </div>
    )
};

export default History;