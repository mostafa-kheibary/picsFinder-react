import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import Nav from '../../components/Nav/Nav';
import logo from '../../image/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='left-section'>
        <div className='header-logo'>
          <Link to={'/'}>
            <img src={logo} className='logo-image' alt='logo of the website' />
          </Link>
          <h1 className='logo-text'>Pics Finder</h1>
        </div>
        <SearchForm />
      </div>
      <div className='right-section'>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
