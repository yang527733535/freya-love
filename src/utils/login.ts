// export default function
import { LoginApiProps } from './typings/index';
const facebookLogin = (): void => {
  console.log('login---------');
  let parma: LoginApiProps = {
    device_platform: '',
    channel_id: '',
    app_version: '',
    base_code_version: '',
    device_id: '',
    code_version: '',
    bind_id: '',
    bind_type: '',
    account_id: '',
    account_type: '',
    language: '',
  };
  console.log('parma', parma);
};

export { facebookLogin };
