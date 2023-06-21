import axios from 'axios';

export const getSeconds = () => {
  return axios
    .get('/api/config')
    .then(({ data }) => data.seconds)
    .catch((e) => {
      console.log(e.message);
    });
};
