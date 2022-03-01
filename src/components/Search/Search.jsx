import { useState, useContext } from 'react';
import PicsContext from '../../context/picsContext';
import './Search.css';
const Search = () => {
  const [text, setText] = useState('');
  const { search } = useContext(PicsContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
