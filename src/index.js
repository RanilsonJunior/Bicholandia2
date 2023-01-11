import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global-styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Menu1 } from './components/Menu1';
// import { Menu2 } from './components/Menu2';
// import { Slideshow } from './components/Slideshow';
// import { MaisVendidos } from './components/MaisVendidos';
// import { SlideLogo } from './components/SlideLogo';
// import { Footer } from './components/Footer';
// import { BackToTopButton } from './components/BackToTopButton';
// import ThumbnailSlider from './components/ThumbnailSlider';
// import { InformacaoProduto } from './components/InformacaoProduto';
import { ContainerProduto } from './components/ContainerProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Menu1 />
    <Menu2 />
    <Slideshow />
    <MaisVendidos />
    <SlideLogo />
    <Footer />
    <BackToTopButton /> */}
    {/* <ThumbnailSlider /> */}
    {/* <InformacaoProduto /> */}
    <ContainerProduto />
  </React.StrictMode>,
);
