import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import History from './History';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          {/* <Link to="/profiles">Profiles</Link> */}
          <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'yellow' })} to="/profiles">Profiles</NavLink>
          {/* <NavLink className={({ isActive }) => ({ color: isActive ? 'check-ul' : 'default-ul' })} to="/profiles">Profiles</NavLink> */}
        </li>
        {/* <li>
          <Link to="/profiles/velopert">Velopert Profile</Link>
        </li>
        <li>
          <Link to="/profile/gildong">Gildong Profile</Link>
        </li> */}
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="profiles/*" element={<Profiles/>}>
          {/* <Route path=':username' element={<Profile/>}/> */}
        </Route>
        <Route path="history/*" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
