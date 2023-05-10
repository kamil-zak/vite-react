import { join } from 'path';

const portableDir = process.env.PORTABLE_EXECUTABLE_DIR;

export const getAppDirPath = (...segments: string[]) => {
  if (portableDir) return join(portableDir, ...segments);
  return join(__dirname, '..', '..', 'appDir', ...segments);
};
