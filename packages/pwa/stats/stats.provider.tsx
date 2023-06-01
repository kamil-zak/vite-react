import { FC, useState, useEffect, useCallback, ReactNode } from 'react';
import { StatsContext } from './stats.context';
import { useStatsDb } from './use-stats-db';
import { RegisterForm } from './components/register-form';
import { importActions } from './api';
import { initOnlineInterval } from '../utils';

interface IStatsProviderProps {
  campaignId: string;
  children: ReactNode;
}

export const StatsProvider: FC<IStatsProviderProps> = ({ children, campaignId }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('stats-token'));

  const handleRegister = (token: string) => {
    localStorage.setItem('stats-token', token);
    setToken(token);
  };

  const { storedCount, isReady, isError, getAll, clear, registerAction } = useStatsDb();

  const sync = useCallback(async () => {
    if (!isReady || !token) return;
    const actions = await getAll();
    if (!actions) return;
    setLoading(true);
    importActions({ actions, token })
      .then(clear)
      .finally(() => setLoading(false));
  }, [getAll, isReady, token, clear]);

  useEffect(() => {
    const interval = initOnlineInterval(sync, 60000);
    return () => interval.clear();
  }, [sync]);

  if (!isReady || isError) return <></>;

  const value = { registerAction, storedCount, sync, loading };

  if (!token) return <RegisterForm onRegister={handleRegister} campaignId={campaignId} />;
  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};
