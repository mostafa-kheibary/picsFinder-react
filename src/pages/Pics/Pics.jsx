import { useEffect, useState, useContext } from 'react';
import PicsContext from '../../context/picsContext';
import { useParams, Link } from 'react-router-dom';
import getData from '../../API/unsplash';
import ShareModal from '../../Layouts/ShareModal/ShareModal';
import Loader from '../../components/Loader/Loader';
import './Pic.css';

const Pics = () => {
  const params = useParams();
  const [image, setImage] = useState(null);
  const { state, changeModal } = useContext(PicsContext);

  useEffect(async () => {
    const image = await getData(`/photos/${params.id}`);
    setImage(image);
  }, []);

  const renderImage = image ? (
    <div className='pic-page__image-container'>
      <div className='pic-page_image-section'>
        <img className='pic-page-image' src={image.urls.regular} alt='' />
        <div className='pic-page__like-count'>
          <span className='pic-page__like-count__text'>{image.likes}</span>
          <i className='fa-solid fa-heart pic-page__like-count__icon'></i>
        </div>
      </div>
      <div className='pic-page__content'>
        <div className='pic-page__content__head'>
          <div className='tag-container'>
            {image.tags_preview.map((tag, i) => (
              <Link to={`/search/${tag.title}`} className='tags' key={i}>
                {tag.title}
              </Link>
            ))}
          </div>
        </div>
        <h4 className='pic-page__title'>
          {image.description ? image.description : 'This image dont have Title'}
        </h4>
        <p className='pic-page__description'>
          {image.alt_description
            ? image.alt_description
            : 'this image dont have description'}
        </p>
        <div className='pic-page__content__buttons'>
          <button onClick={changeModal} className='button share-button'>
            share
          </button>
          <a href={image.urls.full} className='button download-button'>
            download
          </a>
        </div>
        <div className='pic-page__user-info'>
          <div>
            <img
              className='pic-page__user-info__avatar'
              src={image.user.profile_image.medium}
              alt=''
            />
          </div>
          <div>
            <a
              href={image.user.links.html}
              className='pic-page__user-info__user-name'
            >
              {image.user.username}
            </a>
            <span className='pic-page__user-info__name'>{image.user.name}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );

  return (
    <div className='pic-page'>
      {state.modalShow === true && <ShareModal />}
      {renderImage}
    </div>
  );
};

export default Pics;
