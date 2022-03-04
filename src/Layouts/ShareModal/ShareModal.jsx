import { useState, useContext, useEffect, useRef } from 'react';
import PicsContext from '../../context/picsContext';
import { motion, AnimatePresence } from 'framer-motion';
import './ShareModal.css';
const ShareModal = () => {
  const [notif, setNotif] = useState(false);
  const [url, setUrl] = useState('');
  const { changeModal } = useContext(PicsContext);
  const urlInput = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    urlInput.current.select();
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 1000);
  };
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <AnimatePresence>
      <div className='modal-container'>
        <motion.div
          onClick={changeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='overlay'
        ></motion.div>
        <motion.div
          initial={{ scale: 0.9, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, x: '-50%', y: '-50%' }}
          exit={{ scale: 0.9, x: '-50%', y: '-50%' }}
          className='share-modal'
        >
          <button onClick={changeModal} className=' close-modal'>
            <i className='fa-solid fa-xmark close-modal__icon'></i>
          </button>
          <h4 className='share-modal-title'>Share image with this link</h4>
          <div className='share-modal__image-link'>
            <input
              ref={urlInput}
              readOnly
              className='share-modal__image-link__input'
              contentEditable='false'
              type='text'
              value={url}
            />
            <span className={`copy-notif ${notif && 'show'}`}>copyd !</span>
            <button
              onClick={handleCopy}
              className='share-modal__image-link__button'
            >
              copy
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShareModal;
