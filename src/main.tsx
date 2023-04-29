import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { initMonitor } from './pwa/versionMonitor.ts';

registerSW({ immediate: true });
initMonitor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
