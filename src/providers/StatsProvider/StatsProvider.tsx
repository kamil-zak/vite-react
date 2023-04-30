import { IDBPDatabase, openDB } from 'idb';
import { FC, useState, useEffect, useCallback } from 'react';
import { generateId } from './utils/generateId';
import { StatsContext } from './statsContext';
import { INodeChildrenProps } from '../../interfaces/nodeChildrenProps';
import { IStatsSyncApi } from './interfaces/statsSyncApi';
import { onlineInterval } from '../../utils/onlineInterval';

interface IStatsProviderProps extends INodeChildrenProps {
  syncApi: IStatsSyncApi;
}

export const StatsProvider: FC<IStatsProviderProps> = ({ children, syncApi }) => {
  const [storedCount, setStoredCount] = useState<number>(0);
  const [db, setDb] = useState<IDBPDatabase | null>(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sync = useCallback(async () => {
    if (loading || !db) return;

    const clear = () => {
      setStoredCount(0);
      db.clear('actions');
    };

    const actions = await db.getAll('actions');
    setLoading(true);
    syncApi
      .sync(actions)
      .then(clear)
      .catch(() => null)
      .finally(() => setLoading(false));
  }, [db, loading, syncApi]);

  useEffect(() => {
    openDB('stats', 1, {
      upgrade: (database) => database.createObjectStore('actions', { keyPath: 'id' }),
    })
      .then((database) => {
        setDb(database);
        return database.count('actions');
      })
      .then(setStoredCount)
      .catch(() => setIsError(true));
  }, []);

  useEffect(() => {
    const interval = onlineInterval(sync, 60000);
    return () => interval.clear();
  }, [sync]);

  if (!db || isError) return <></>;

  const registerAction = (name: string) => {
    const id = generateId();
    const timestamp = new Date();
    db.put('actions', { id, name, timestamp }).then(() => setStoredCount((prev) => prev + 1));
  };

  const value = { registerAction, storedCount, sync, loading };

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
};
