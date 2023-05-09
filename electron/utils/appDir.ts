import { join } from 'path';

export const getAppDirPath = (...segments: string[]) => {
  return process.env.PORTABLE_EXECUTABLE_DIR || join(__dirname, '..', '..', 'appDir', ...segments);
};
