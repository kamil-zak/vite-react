import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('action', (config: unknown) => ipcRenderer.invoke('action', config));
contextBridge.exposeInMainWorld(
  'subscribe',
  ({ name, callback }: { name: string; callback: (data: unknown) => void }) => {
    ipcRenderer.on(name, (e, data) => callback(data));
    return { unsubscribe: () => ipcRenderer.removeListener(name, callback) };
  },
);
