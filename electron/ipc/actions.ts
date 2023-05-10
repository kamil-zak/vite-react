import { writeFile, readdir, readFile } from 'fs/promises';
import { IActions } from '../../common/interfaces/actions';
import { getAppDirPath } from '../utils/appDir';
import { randomString } from '../utils/randomString';

export const actions: IActions = {
  saveCapture: (...args) => {
    const item = randomString(8);
    return writeFile(
      getAppDirPath('event', 'captures', 'ready', `${item}.jpg`),
      Buffer.from(args[0].split(';base64,').pop() as string, 'base64'),
    )
      .then(() => item)
      .catch(() => {
        throw new Error('Cannot save capture');
      });
  },
  getEffectUrls: async () =>
    readdir(getAppDirPath('config', 'effects'))
      .then((effects) => effects.map((effect) => 'file:///' + getAppDirPath('config', 'effects', effect)))
      .catch(() => {
        throw new Error('Cannot load config/effects directory');
      }),
  getConfig: async () =>
    readFile(getAppDirPath('config', 'config.json'))
      .then((res) => JSON.parse(res.toString()))
      .catch(() => {
        throw new Error('Cannot load config/config.json');
      }),
};
