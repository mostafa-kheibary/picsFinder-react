import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PicCard.css';

const PicCard = ({ data }) => {
  const { urls, alt_description, id, description } = data;
  const navigate = useNavigate();
  const image = useRef();
  // states
  const [span, setSpan] = useState(30);
  const [load, setLoad] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // local function
  const onLoad = () => {
    const span = Math.round((image.current.clientHeight + 10) / 12);
    setSpan(span);
    setLoad(true);
  };

  const handlePageChange = (id) => {
    navigate(`/photo/${id}`);
  };
  const handleOpen = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };
  const handleCloseDropdown = () => {
    setDropdown(false);
  };
  const height = load === true ? '100%' : 'none';

  return (
    <motion.div
      onClick={() => handlePageChange(id)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ gridRowEnd: ` span ${span}` }}
      className='card'
    >
      <div onMouseLeave={handleCloseDropdown} className='card_over-lay'>
        <h4 className='card-over-lay__title'>
          {description && description.slice(0, 15)}{description && ' ...'}
        </h4>
        <button
          onClick={handleOpen}
          className='more-info fa-solid fa-ellipsis-vertical'
        >
          {dropdown === true && (
            <div className='dropdown-container'>
              <a
                href={urls.full}
                download='image.jpg'
                target='_blank'
                className='dropdown-item download'
              >
                <i className='fa-solid fa-download dropdown-icon'></i>
                <span className='dropdown-text'>download</span>
              </a>
            </div>
          )}
        </button>
      </div>
      <img
        onLoad={onLoad}
        style={{ height }}
        ref={image}
        className='card-image'
        src={urls.thumb}
        alt={alt_description}
      />
    </motion.div>
  );
};

export default PicCard;
