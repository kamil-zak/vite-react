import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { initVersionMonitor } from '@picsane/pwa/version-monitor';
import { OnlyStandalone } from '@picsane/pwa/only-standalone';
import pwaInfo from './pwaInfo.json';

registerSW({ immediate: true });
initVersionMonitor('/pwaInfo.json', pwaInfo.version);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <OnlyStandalone>
      <App />
    </OnlyStandalone>
  </>,
);
