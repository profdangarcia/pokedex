import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import GlobalStyles from './styles/global';

const root: any = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
);
