import { IConfig } from './config';

export interface IActions {
  saveCapture: (base64: string) => Promise<string>;
  getEffectUrls: () => Promise<string[]>;
  getConfig: () => Promise<IConfig>;
}
