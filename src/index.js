import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './components/styles/App.scss';

render((
    <App />
), document.querySelector('[data-root="app"]'));
