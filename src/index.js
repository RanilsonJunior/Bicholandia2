import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu1 } from './components/Menu1';
import { Menu2 } from './components/Menu2';
import SlidShow from './components/SlidShow';
import './styles/global-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu1 />
    <Menu2 />
    <SlidShow />
  </React.StrictMode>,
);
