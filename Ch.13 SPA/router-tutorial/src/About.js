import React from 'react'
import qs from 'qs'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨 앞 ? 생략
    });

    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>About</h1>
            <b>About Page</b>
            {showDetail && <p>detail Show!</p>}
        </div>
    )
}

export default About