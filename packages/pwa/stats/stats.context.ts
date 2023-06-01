import { createContext, useContext } from 'react';

interface IStatsContextData {
  registerAction: (name: string, details?: unknown) => void;
  storedCount: number;
  sync: () => void;
  loading: boolean;
}

export const StatsContext = createContext<IStatsContextData | null>(null);
export const useStats = () => {
  const data = useContext(StatsContext);
  if (!data) throw new Error('Cannot use useStats outside StatsProvider');
  return data;
};
