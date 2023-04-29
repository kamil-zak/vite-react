import { onlineInterval } from '../utils/onlineInterval';
import pwaInfo from './pwaInfo.json';

const reloadServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.update();
    }
  }
};

const checkVersion = () => {
  return fetch('/pwaInfo.json')
    .then((res) => res && res.json())
    .then(async ({ version }) => {
      if (version && version !== pwaInfo.version) reloadServiceWorker();
    })
    .catch(() => null);
};

export const initMonitor = () => {
  onlineInterval(checkVersion, 60000);
};
