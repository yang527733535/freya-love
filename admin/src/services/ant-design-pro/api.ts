// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

const tokenString = 'Bearer ' + localStorage.getItem('token');
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>(`/api/auth/info`, {
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
  }>(`/api/auth/info`, {
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
  return request<API.MyLoginResult>(`/api/auth/login`, {
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
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const data = request<API.RuleList>(`/api/images/page/list`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
  return data;
}

/** 获取规则列表 GET /api/rule */
export async function Videorule(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const data = request<API.RuleList>(`/api/videos/page/list`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
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
export async function addRule(options?: { [key: string]: any }, id?: string) {
  return request<API.RuleListItem>(`/api/rule/${id}`, {
    method: 'POST',
    ...(options || {}),
  });
}
export async function reqAddImg(params?: { [key: string]: any }) {
  return request(`/api/images`, {
    headers: {
      authorization: tokenString,
    },
    params: {
      ...params,
    },
    method: 'POST',
  });
}

export async function reqAddVideos(params?: { [key: string]: any }) {
  return request(`/api/videos`, {
    headers: {
      authorization: tokenString,
    },
    params: {
      ...params,
    },
    method: 'POST',
  });
}

// export async function updateImg(params?: { [key: string]: any }) {
//   return request(`${baseUrl}/images/${params!.id}`, {
//     headers: {
//       authorization: 'Bearer ' + localStorage.getItem('token'),
//     },
//     data: params,
//     method: 'PUT',
//   });
// }

export async function updateImg(options?: { [key: string]: any }) {
  return request(`/api/images/${options!.id}`, {
    method: 'PUT',
    headers: {
      authorization: tokenString,
    },
    params: options,
  });
}


export async function updateVideo(options?: { [key: string]: any }) {
  return request(`/api/videos/${options!.id}`, {
    method: 'PUT',
    headers: {
      authorization: tokenString,
    },
    params: options,
  });
}
/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
