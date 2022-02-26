import { useContext } from 'react';
import PicsContext from '../../context/picsContext';
const PicsContainer = () => {
  const { state } = useContext(PicsContext);
  return (
    <div>
      {state.images.map((item) => (
        <div key={item.id}>
          <img src={item.urls.thumb} alt='' />
        </div>
      ))}
    </div>
  );
};

export default PicsContainer;
