import React, { useRef, useEffect, useState } from 'react';
import './PicCard.css';

const PicCard = ({ data }) => {
  const { urls, alt_description } = data;
  const image = useRef();
  const [span, setSpan] = useState(20);
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    const span = Math.round((image.current.clientHeight + 10) / 12);
    setSpan(span);
    setLoad(true);
  };

  const height = load === true ? '100%' : 'none';

  return (
    <div style={{ gridRowEnd: ` span ${span}` }} className='card'>
      <div className='card_over-lay'>

      </div>
      <img
        onLoad={onLoad}
        style={{ height }}
        ref={image}
        className='card-image'
        src={urls.thumb}
        alt={alt_description}
      />
    </div>
  );
};

export default PicCard;
