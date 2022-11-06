import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name: 'Test',
        desc: 'React Developer'
    },
    gildong: {
        name: 'dong',
        desc: 'Javascript Developer'
    }
}

const Profile = () => {
    const params = useParams();

    const { username } = params;
    const profile = data[username];

    if(!profile) {
        return <div>Not Found User!</div>
    }
    
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.desc}</p>
        </div>
    );
};

export default Profile;