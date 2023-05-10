import { useEffect, useMemo } from 'react';

const modalRoot = document.getElementById('overlay');

export const usePortalContainer = () => {
  const el = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    if (!modalRoot) return;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return el;
};
