// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

const baseUrl = 'http://117.50.173.128:8081';
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>(`${baseUrl}/api/auth/info`, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + options!.token,
    },
    ...(options || {}),
  });
}

export async function getUserinfo(options?: { [key: string]: any }) {
  return request<{
    data: any;
  }>(`${baseUrl}/api/auth/info`, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + options!.token,
    },
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function freyalogin(body: API.freyaLoginParams, options?: { [key: string]: any }) {
  return request<API.MyLoginResult>(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function Imgrule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const data = request<API.RuleList>(`${baseUrl}/images/page/list`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
  console.log('data', data);
  return data;
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
