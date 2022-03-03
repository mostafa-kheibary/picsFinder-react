import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PicsContext from '../../context/picsContext';
import PicCard from '../PicCard/PicCard';
import Loader from '../../components/Loader/Loader';
import noResault from '../../image/no-resault.png';
import './PicContainer.css';
const PicsContainer = () => {
  const { state } = useContext(PicsContext);

  const renderImage = state.images.map((image) => {
    return <PicCard key={uuidv4()} data={image} />;
  });

  const nothingFound = state.images.length === 0 && state.loader === false && (
    <div className='no-resault'>
      <img className='no-resault_image' src={noResault} alt='' />
      <h4 className='no-resault_title'>No Resault Found !</h4>
    </div>
  );
  return (
    <div className='image-container'>
      {nothingFound}
      <div className='wrapper'>
        {state.loader !== true ? renderImage : <Loader />}
      </div>
    </div>
  );
};

export default PicsContainer;
