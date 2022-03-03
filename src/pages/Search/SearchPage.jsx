import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PicsContext from '../../context/picsContext';
import PicsContainer from '../../Layouts/PicsContainer/PicsContainer';
import StatusBar from '../../components/StatusBar/StatusBar';
import './SearchPage.css';
const SearchPage = () => {
  const { data, search } = useContext(PicsContext);
  const params = useParams();

  useEffect(() => {
    if (params.text !== undefined) {
      search(params.text);
    }
  }, [params.text]);

  return (
    <div className='search-page'>
      <StatusBar />
      <PicsContainer />
    </div>
  );
};

export default SearchPage;
