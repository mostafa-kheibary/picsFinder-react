import { useContext } from 'react';
import PicsContext from '../../context/picsContext';
import './Search.css';
const Search = () => {
  const { state } = useContext(PicsContext);
  return (
    <div>
      <div className='status'>
        <h4 className='status-text'>result of {state.resultOf}</h4>
        <h4 className='status-count'>{state.resultCount} image</h4>
      </div>
    </div>
  );
};

export default Search;
