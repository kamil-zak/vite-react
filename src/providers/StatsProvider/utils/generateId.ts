export const generateId = () =>
  Array.from(crypto.getRandomValues(new Uint8Array(12)))
    .map((x) => x.toString(16))
    .join('');
