import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

hydrateRoot(document.getElementById('root'),
<BrowserRouter>
<App />
</BrowserRouter>
);
