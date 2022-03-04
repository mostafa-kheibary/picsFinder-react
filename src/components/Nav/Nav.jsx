import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav>
      <ul className='header-nav'>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
        <a href='https://unsplash.com' className='nav-link'>
          Unsplash API
        </a>
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
