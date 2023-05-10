const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const randomString = (length: number) =>
  [...Array(length)].map(() => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
