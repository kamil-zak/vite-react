import { FC, useEffect, useState } from 'react';
import { actionsApi } from '../../api';
import { INodeChildrenProps } from '../../interfaces/nodeChildrenProps';
import { IConfig } from '../../../common/interfaces/config';
import { ConfigContext } from './ConfigContext';

export const ConfigProvider: FC<INodeChildrenProps> = ({ children }) => {
  const [config, setConfig] = useState<IConfig | null>(null);

  useEffect(() => {
    actionsApi.getConfig().then(setConfig);
  }, []);

  if (!config) return <></>;
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
