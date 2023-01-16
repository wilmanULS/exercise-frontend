import axios from 'axios';

const wanqaraApi = axios.create({
  baseURL: 'https://eventos.ec/api',
  headers: {
    'Content-type': 'multipart/form-data',
  },
});

export default wanqaraApi;
