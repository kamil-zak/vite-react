import { ipcMain } from 'electron';
import { actions } from './actions';
import { ActionName, ActionParameters } from '../../common/types/actionsApi';
import { terminateMessage } from '../utils/errors';

ipcMain.handle('action', <T extends ActionName>(e, { name, args }: { name: T; args: ActionParameters<T> }) => {
  const handler = actions[name];
  return handler.call(null, ...args).catch((e) => terminateMessage(e.message));
});
