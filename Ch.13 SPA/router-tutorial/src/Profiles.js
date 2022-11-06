import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
       
    return (
        <div>
            <h3>
                User List
            </h3>
            <ul>
                <li>
                    <Link to="velopert">Velopert</Link>
                </li>
                <li>
                    <Link to="gildong">Gildong</Link>
                </li>
            </ul>
           
            <Routes>
                <Route path='/*' element={<div>Choose User</div>}/>
                <Route path=':username' element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default Profiles;