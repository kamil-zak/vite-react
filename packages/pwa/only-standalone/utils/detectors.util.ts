export const isSupportPWA = () => 'serviceWorker' in navigator;

export const isStandalonePWA = () => window.matchMedia('(display-mode: standalone)').matches;

export const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isAndroid = () => /android/i.test(navigator.userAgent);
