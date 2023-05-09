import { IActions } from '../common/interfaces/actions';
import { ActionsHandler, ActionName, ActionParameters } from '../common/types/actionsApi';
import { SubscriptionsHandler, SubscriptionName, SubscriptionValue } from '../common/types/subscriptionsApi';
import { SubscriptionsApi } from '../common/types/subscriptionsApi';

declare global {
  interface Window {
    action: ActionsHandler;
    subscribe: SubscriptionsHandler;
  }
}

const actionsProxy = new Proxy(
  {},
  {
    get:
      <T extends ActionName>(_: unknown, prop: T) =>
      (...args: ActionParameters<T>) =>
        window.action({ name: prop, args }),
  },
);
export const actionsApi = actionsProxy as IActions;

const subscriptionsProxy = new Proxy(
  {},
  {
    get:
      <T extends SubscriptionName>(_: unknown, prop: T) =>
      (callback: (data: SubscriptionValue<T>) => void) =>
        window.subscribe({ name: prop, callback }),
  },
);
export const subscriptionsApi = subscriptionsProxy as SubscriptionsApi;
