import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    });
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
