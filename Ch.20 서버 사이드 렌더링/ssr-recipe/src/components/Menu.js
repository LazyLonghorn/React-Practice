import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; 
import RedPage from '../pages/RedPage';
import BluePage from '../pages/BluePage';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/red'>Red</Link>
                </li>
                <li>
                    <Link to='/blue'>Blue</Link>
                </li>
            </ul>
            
            {
            // Menu 컴포넌트 내에서 Route 가 설정된다. 따라서 위에 나타남
            /* <Routes>
                <Route path="/red" element={<RedPage/>}/>
                <Route path="/blue" element={<RedPage/>}/>
            </Routes> */}
        </div>
    );
};

export default Menu;