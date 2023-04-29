export const onlineInterval = (cb: () => void, timeout: number) => {
  let interval: number | null = null;
  const start = () => {
    interval = setInterval(cb, timeout);
    cb();
  };
  const stop = () => {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  };

  if (navigator.onLine) start();
  window.addEventListener('online', start);
  window.addEventListener('offline', stop);

  const clear = () => {
    stop();
    window.removeEventListener('online', start);
    window.removeEventListener('offline', stop);
  };

  return { clear };
};
