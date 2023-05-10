import { object, string } from 'yup';

export type CaptureEmailFields = 'email' | 'friend';

export const captureEmailSchema = object({
  email: string().email().required(),
  friend: string().email(),
});
