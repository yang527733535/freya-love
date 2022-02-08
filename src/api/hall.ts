/*
 * @Description:
 * @Author: wuchuangzhen
 * @Date: 2022-01-20
 * @LastEditTime: 2022-01-20
 * @LastEditors: wuchuangzhen
 * @Reference: 大厅
 */
import request from '../utils/request';

//

interface reqgetHallDataApiProps {
  version: string;
}

interface LoginApiProps {
  device_platform: string;
  channel_id: string;
  app_version: string;
  base_code_version: string;
  device_id: string;
  code_version: string;
  bind_id: string;
  bind_type: string;
  account_id: string;
  account_type: string;
  language: string;
}

export async function reqgetHallDataApi(params: reqgetHallDataApiProps) {
  return request('/ga/v1/hall/list', {
    method: 'post',
    data: params,
  });
}

//用户登录注册接口
export async function LoginApi(params: LoginApiProps) {
  return request('/ga/v1/user/register', {
    method: 'post',
    data: params,
  });
}
// LoginApiProps
