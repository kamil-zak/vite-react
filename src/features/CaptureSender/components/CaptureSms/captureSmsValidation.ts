import { object, string } from 'yup';

export type CaptureSmsFields = 'phone';

export const captureSmsSchema = object({
  phone: string()
    .matches(/^[0-9]{9}$/)
    .required(),
});
