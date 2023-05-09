import { IActions } from '../interfaces/actions';

export type ActionName = keyof IActions;
export type ActionParameters<T extends ActionName> = Parameters<IActions[T]>;
export type ActionValue<T extends ActionName> = ReturnType<IActions[T]>;
export type ActionsHandler = <T extends keyof IActions>(config: {
  name: T;
  args: Parameters<IActions[T]>;
}) => ReturnType<IActions[T]>;
