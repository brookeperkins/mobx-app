import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BookProvider } from './stores/BookContext';

render(
  <BookProvider>
    <App />
  </BookProvider>,
  document.getElementById('root')
);
