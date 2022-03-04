import { useEffect, useContext } from 'react';
import PicsContext from '../../context/picsContext';
import PicsContainer from '../../Layouts/PicsContainer/PicsContainer';
import SearchForm from '../../components/SearchForm/SearchForm';
import heroImage from '../../image/hero.png';
import './Home.css';

const Home = () => {
  const { loadRandom } = useContext(PicsContext);
  useEffect(() => {
    loadRandom();
  }, []);
  return (
    <div className='home-page'>
      <div className='hero-section'>
        <div className='hero-section__content'>
          <h2 className='hero-section__title'>Get evry image that you wnat</h2>
          <p className='hero-section__info'>image powerd by unsplash API</p>
          <SearchForm />
        </div>
        <div>
          <img className='hero-section__main-image' src={heroImage} alt='' />
        </div>
      </div>
      <h4 className='images-info'>images :</h4>
      <PicsContainer />
    </div>
  );
};

export default Home;
