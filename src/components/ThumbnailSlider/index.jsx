import './styles.css';
import { useState, useRef } from 'react';
// import ReactImageMagnify from 'react-image-magnify';

const images = [
  '../images/produto1.png',
  '../images/produto2.png',
  '../images/produto3.png',
  '../images/produto1.png',
  '../images/produto2.png',
];
export const ThumbnailSlider = () => {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove('active');
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {images.map((image, i) => (
            <div
              className={i == 0 ? 'img_wrap active' : 'img_wrap'}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <img src={image} alt="imagens de produto" />
            </div>
          ))}
        </div>
        <div className="left_2">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
