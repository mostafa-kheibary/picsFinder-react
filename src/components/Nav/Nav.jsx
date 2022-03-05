import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import SearchForm from '../SearchForm/SearchForm';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const LinksRender = () => {
    return (
      <>
        <NavLink onClick={handleChangeMenu} className='nav-link' to='/'>
          Home
        </NavLink>
        <a
          onClick={handleChangeMenu}
          href='https://unsplash.com'
          className='nav-link'
        >
          Unsplash API
        </a>
        <NavLink onClick={handleChangeMenu} className='nav-link' to='/about'>
          About
        </NavLink>
      </>
    );
  };
  const handleChangeMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <nav>
        <ul className='header-nav'>{<LinksRender />}</ul>
      </nav>
      <div className='mobile-nav'>
        <div
          onClick={handleChangeMenu}
          className={`mobile-nav__overlay ${menuOpen && 'show'}`}
        ></div>
        <button onClick={handleChangeMenu} className='mobile-nav__open-button'>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className={`mobile-nav__container ${menuOpen && 'open'}`}>
          <button
            className='mobile-menu__close-button'
            onClick={handleChangeMenu}
          >
            X
          </button>
          <SearchForm />
          <nav>
            <ul>{<LinksRender />}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
