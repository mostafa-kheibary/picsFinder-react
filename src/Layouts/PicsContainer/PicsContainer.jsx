import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PicsContext from '../../context/picsContext';
import PicCard from '../PicCard/PicCard';
import Loader from '../../components/Loader/Loader';
import './PicContainer.css';
const PicsContainer = () => {
  const { state, nextPage } = useContext(PicsContext);
  return (
    <div className='image-container'>
      <div className='wrapper'>
        {state.loader !== true ? (
          state.images.map((image) => <PicCard key={uuidv4()} data={image} />)
        ) : (
          <Loader />
        )}
      </div>
      {state.images.length > 0 && state.loader !== true && (
        <div className='more-image-container'>
          <button className='load-more' onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default PicsContainer;
