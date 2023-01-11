import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img01 from '../../imagens/slide-show/slide01.gif';
import img02 from '../../imagens/slide-show/slide02.gif';
import img03 from '../../imagens/slide-show/slide03.png';
import img04 from '../../imagens/slide-show/slide04.png';
import img05 from '../../imagens/slide-show/slide05.gif';
import './styles.css';

export const Slideshow = () => {
  return (
    <section>
      <div className="main-slide">
        <Carousel variant="dark">
          <Carousel.Item interval={3000}>
            <img className="d-block w-10" src={img01} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={img02} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={img03} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={img04} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={img05} alt="First slide" style={{ width: 1340 }} />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
