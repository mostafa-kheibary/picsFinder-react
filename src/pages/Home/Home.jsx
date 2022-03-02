import { useEffect, useContext } from 'react';
import PicsContext from '../../context/picsContext';
import PicsContainer from '../../Layouts/PicsContainer/PicsContainer';
const Home = () => {
  const { loadRandom, clear } = useContext(PicsContext);
  useEffect(() => {
    clear();
    loadRandom();
  }, []);
  return (
    <div className='home'>
      <h2>Home</h2>
      <PicsContainer />
    </div>
  );
};

export default Home;
