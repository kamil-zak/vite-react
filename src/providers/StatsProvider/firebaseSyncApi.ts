import { IStatsAction } from './interfaces/statsAction';
import { IStatsSyncApi } from './interfaces/statsSyncApi';

export const getFirebaseSyncApi = (projectId: string): IStatsSyncApi => {
  const collectionName = 'actions';
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:commit`;

  const sync = async (actions: IStatsAction[]) => {
    if (!actions.length) return;
    const writes = actions.map((action) => ({
      update: {
        name: `projects/${projectId}/databases/(default)/documents/${collectionName}/${action.id}`,
        fields: {
          timestamp: {
            timestampValue: action.timestamp.toISOString(),
          },
          name: {
            stringValue: action.name,
          },
        },
      },
    }));

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ writes }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error('Error saving data');
  };

  return { sync };
};

import.meta.env.VITE_FIREBASE_PROJECT_ID;
