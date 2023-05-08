import axios from 'axios';

export const sendOsc = (addressPattern: string, args: (number | string)[] = []) => {
  axios.post('/api/oscsend', { addressPattern, args }).catch((e) => {
    console.log(e.message);
  });
};
