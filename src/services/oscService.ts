import axios from 'axios';

export const sendOsc = (addressPattern: string, args: (number | string)[] = []) => {
  console.log(args);
  axios.post('/api/oscsend', { addressPattern, args }).catch((e) => {
    console.log(e.message);
  });
};
