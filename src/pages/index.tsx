import { useEffect } from 'react';
import axios from 'axios';
export default function IndexPage() {
  useEffect(() => {
    console.log('发送请求');
    axios.get('http://117.50.173.128:8080/api/v1/ping').then((res) => {
      console.log('res: ', res);
    });
  }, []);
  return <h1>网站正在建设中</h1>;
}
