// import { Notify } from 'quasar/dist/quasar.esm.js';
import { Notify } from 'components/quasar-imports';

enum NotificationType {
  Info = 'info',
  Negative = 'negative',
}

export const notify = (message: string, type: NotificationType, timeout: number) => {
  Notify.create({ message, type, timeout });
};

export const notifyInfo = (message: string, timeout = 2000) => {
  notify(message, NotificationType.Info, timeout);
};

export const notifyError = (message: string, timeout = 2000) => {
  notify(message, NotificationType.Negative, timeout);
};
