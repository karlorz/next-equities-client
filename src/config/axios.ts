import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-54-255-191-34.ap-southeast-1.compute.amazonaws.com:8080',
});

export default instance;
