import { useContext, createContext } from 'react';

interface IDeepArContext {
  start: () => void;
  stop: () => void;
  takeCapture: () => Promise<string>;
  switchEffect: () => void;
}

export const DeepArContext = createContext<IDeepArContext | null>(null);

export const useDeepAr = () => {
  const data = useContext(DeepArContext);
  if (!data) throw new Error('Cannot use useDeepAr outside provider');
  return data;
};
