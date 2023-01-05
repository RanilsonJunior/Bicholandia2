import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Menu1 } from './components/Menu1';
import { Menu2 } from './components/Menu2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu1 />
    <Menu2 />
  </React.StrictMode>,
);
