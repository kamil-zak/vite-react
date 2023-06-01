import axios from 'axios';
import { IImportActionsData, IRegisterData, IRegisterResponse } from './interfaces';
import { IMPORT_ENDPOINT, REGISTER_ENDPOINT } from './constants';

export const registerDevice = async ({ campaignId, name }: IRegisterData) => {
  const { data } = await axios.post<IRegisterResponse>(REGISTER_ENDPOINT, { campaignId, name });
  if (!data.accessToken) throw new Error('Unable to register device');
  return data;
};

export const importActions = async ({ actions, token }: IImportActionsData) => {
  await axios.post(IMPORT_ENDPOINT, { actions }, { headers: { Authorization: `Bearer ${token}` } });
};
