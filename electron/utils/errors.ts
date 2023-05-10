import { dialog } from 'electron';

export const terminateMessage = (message: string) => {
  dialog.showMessageBoxSync({ message, type: 'error', title: 'Error' });
  process.exit(0);
};
