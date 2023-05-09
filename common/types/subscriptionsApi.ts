import { ISubscriptions } from '../interfaces/subscriptions';

export type SubscriptionName = keyof ISubscriptions;
export type SubscriptionValue<T extends SubscriptionName> = ISubscriptions[T];
export type SubscriptionsHandler = <T extends keyof ISubscriptions>(config: {
  name: T;
  callback: (data: ISubscriptions[T]) => void;
}) => void;

type SubscribeMethod<T> = (handler: (data: T) => void) => { unsubscribe: () => void };
export type SubscriptionsApi = { [K in keyof ISubscriptions]: SubscribeMethod<ISubscriptions[K]> };
