import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PicsContext from '../../context/picsContext';
import PicCard from '../PicCard/PicCard';
import Loader from '../../components/Loader/Loader';
import './PicContainer.css';
const PicsContainer = () => {
  const { state, nextPage } = useContext(PicsContext);

  const renderImage = state.images.map((image) => {
    return <PicCard key={uuidv4()} data={image} />;
  });

  return (
    <div className='image-container'>
      <div className='wrapper'>
        {state.loader !== true ? renderImage : <Loader />}
      </div>
    </div>
  );
};

export default PicsContainer;
