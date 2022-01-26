import axios from 'axios';

const baseURL = 'https://huerto-app.herokuapp.com/';

const axiosClient = axios.create({ baseURL });

export default axiosClient;
