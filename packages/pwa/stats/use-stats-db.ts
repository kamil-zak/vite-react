import { IDBPDatabase, openDB } from 'idb';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useStatsDb = () => {
  const [storedCount, setStoredCount] = useState<number>(0);
  const [db, setDb] = useState<IDBPDatabase | null>(null);
  const [isError, setIsError] = useState(false);

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

  const getAll = useCallback(async () => {
    if (!db) return;
    return db.getAll('actions');
  }, [db]);

  const clear = useCallback(async () => {
    if (!db) return;
    setStoredCount(0);
    await db.clear('actions');
  }, [db]);

  const registerAction = useCallback(
    (type: string, details?: unknown) => {
      if (!db) return;
      const id = uuidv4();
      const timestamp = new Date();
      db.put('actions', { id, type, details, timestamp }).then(() => setStoredCount((prev) => prev + 1));
    },
    [db],
  );

  const isReady = !!db;
  return { storedCount, isReady, isError, getAll, clear, registerAction };
};
