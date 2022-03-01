import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PicsContext from '../../context/picsContext';
import PicCard from '../PicCard/PicCard';
import './PicContainer.css';
const PicsContainer = () => {
  const { state,nextPage } = useContext(PicsContext);
  return (
    <div className='image-container'>
      <div className="wrapper">
      {state.loader !==true ?(state.images.map((image) =><PicCard key={uuidv4()} data={image}/>)):<h1>loader</h1>}
      </div>
      <div className="status">
      <button className='load-more' onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default PicsContainer;
