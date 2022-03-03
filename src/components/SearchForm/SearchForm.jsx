import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import PicsContext from '../../context/picsContext';
import './SearchForm.css';

// the component
const SearchForm = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    setText('');
  };
  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          placeholder='search anything you want'
          className='search-input'
          type='text'
        />
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
      </form>
    </div>
  );
};

export default SearchForm;
