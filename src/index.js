import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global-styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu1 } from './components/Menu1';
import { Menu2 } from './components/Menu2';
import SlidShow from './components/SlidShow';
import { MaisVendidos } from './components/MaisVendidos';
import { SlideLogo } from './components/SlideLogo';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu1 />
    <Menu2 />
    <SlidShow />
    <MaisVendidos />
    <SlideLogo />
    <Footer />
  </React.StrictMode>,
);
