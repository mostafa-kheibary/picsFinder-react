import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  return (
    <div className='not-found'>
      <h4 className='not-found__title'>404</h4>
      <p className='not-found__description'>page not found</p>
      <Link to={'/'} className='button not-found__button'>back to Home</Link>
    </div>
  );
};

export default NotFound;
