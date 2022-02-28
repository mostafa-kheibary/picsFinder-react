import { useContext } from 'react';
import PicsContext from '../../context/picsContext';
import PicCard from '../PicCard/PicCard';
import './PicContainer.css';
const PicsContainer = () => {
  const { state,nextPage } = useContext(PicsContext);
  return (
    <div className='image-container'>
      {state.loader !==true ?(state.images.map((image) =><PicCard key={image.id} data={image}/>)):<h1>loader</h1>}
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default PicsContainer;
