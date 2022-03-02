import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PicsContext from '../../context/picsContext';
import './Search.css';

// the component
const Search = () => {
  const [text, setText] = useState('');
  const { search } = useContext(PicsContext);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    search(text);
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

export default Search;
