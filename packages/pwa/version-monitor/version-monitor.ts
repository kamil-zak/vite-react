import { initOnlineInterval } from '../utils';

const reloadServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.update();
    }
  }
};

export const initVersionMonitor = (jsonUrl: string, version: string) => {
  const checkVersion = () => {
    return fetch(jsonUrl)
      .then((res) => res && res.json())
      .then(async (pwaInfo) => {
        if (pwaInfo.version && pwaInfo.version !== version) reloadServiceWorker();
      })
      .catch(() => null);
  };

  initOnlineInterval(checkVersion, 60000);
};
