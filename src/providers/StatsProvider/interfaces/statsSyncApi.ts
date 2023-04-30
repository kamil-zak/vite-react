import { IStatsAction } from './statsAction';

export interface IStatsSyncApi {
  sync: (actions: IStatsAction[]) => Promise<void>;
}
