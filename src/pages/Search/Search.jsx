import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PicsContext from '../../context/picsContext';
import PicsContainer from '../../Layouts/PicsContainer/PicsContainer';
import './Search.css';
const Search = () => {
  const { data, search } = useContext(PicsContext);
  const params = useParams();

  useEffect(() => {
    if (params.text !== undefined) {
      search(params.text);
    }
  }, [params.text]);

  return (
    <div>
      <div className='status'>
        <h4 className='status-text'>result of {params.text}</h4>
        <h4 className='status-count'>{data.total} resualt found</h4>
      </div>
      <PicsContainer />
    </div>
  );
};

export default Search;
