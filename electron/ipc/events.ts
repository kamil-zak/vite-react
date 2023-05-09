import { BrowserWindow } from 'electron';
import { ISubscriptions } from '../../common/interfaces/subscriptions';

export const sendEvent = <T extends keyof ISubscriptions>(name: T, data: ISubscriptions[T]) => {
  BrowserWindow.getAllWindows().forEach((window) => window.webContents.send(name, data));
};
