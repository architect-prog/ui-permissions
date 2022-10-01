import axios from 'axios';

const microservice_permission_api = 'https://localhost:7147/api/';

const instance = axios.create({
  baseURL: `${microservice_permission_api}`,
});
export default instance;
