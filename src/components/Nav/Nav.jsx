import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav>
      <ul className='header-nav'>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
        <li className='nav-link'>Unsplash API</li>
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
