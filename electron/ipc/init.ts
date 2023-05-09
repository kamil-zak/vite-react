import { ipcMain } from 'electron';
import { actions } from './actions';
import { ActionName, ActionParameters } from '../../common/types/actionsApi';

const isActionName = (name: string): name is ActionName => name in actions;

ipcMain.handle('action', <T extends ActionName>(e, { name, args }: { name: T; args: ActionParameters<ActionName> }) => {
  if (!isActionName(name)) throw new Error('Handler not found');
  const handler = actions[name];
  return handler(...args);
});
