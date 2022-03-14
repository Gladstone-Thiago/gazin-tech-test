import { baseApi } from '˜/services/apiClient';
import _ from 'lodash';

export const api = `${process.env.NEXT_PUBLIC_API_URL}`;
export const developer = `${api}${process.env.NEXT_PUBLIC_API_DEVELOPER}`;

import { responseType, formData } from './type';

export const Get = async (page: string, limit: string, search?: string) => {
  const response: { data?: responseType } = await baseApi.get(
    `${developer}/page=${page}/limit=${limit}/search=${search ? search : null}`
  );

  return {
    data: _.get(response, 'data.data'),
    total: _.get(response, 'data.meta.total'),
    current_page: _.get(response, 'data.meta.current_page'),
    per_page: _.get(response, 'data.meta.per_page'),
    next_page: _.get(response, 'data.meta.current_page') + 1,
  };
};

export const Edit = async (data: formData) => {
  const response = await baseApi.put(developer, data);

  return response;
};

export const Create = async (data: formData) => {
  const response = await baseApi.post(developer, data);

  return response;
};

export const Delete = async (id: number) => {
  const response = await baseApi.patch(`${developer}/id=${id}`);

  return response;
};
