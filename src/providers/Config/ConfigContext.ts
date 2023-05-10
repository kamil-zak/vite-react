import { useContext, createContext } from 'react';
import { IConfig } from '../../../common/interfaces/config';

export const ConfigContext = createContext<IConfig | null>(null);

export const useConfig = () => {
  const data = useContext(ConfigContext);
  if (!data) throw new Error('Cannot use useConfig outside provider');
  return data;
};
