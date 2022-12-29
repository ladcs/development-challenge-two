import axios from 'axios';
import { aws4Interceptor } from 'aws4-axios';

const interceptor = aws4Interceptor({
  region: 'eu-west-2',
  service: 'execute-api',
},
{
  accessKeyId: "AKIA57IQVNMTERPBNLNR",
  secretAccessKey: "lGNl+Yd4tp5qXYFmn5SLpp4W3iw5+c+9mr1",
}
);

const axiosCreated = axios.create({
  baseURL: 'https://3urff50aaa.execute-api.us-east-1.amazonaws.com/patient',
});

const api = axiosCreated.interceptors.request.use(interceptor);

export default api;
