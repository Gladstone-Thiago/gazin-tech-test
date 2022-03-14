import { baseApi } from '˜/services/apiClient';

export const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
export const apiAdminsUsers = `${apiUrl}/${process.env.NEXT_PUBLIC_API_ADMINS_USERS}`;
export const apiUrlUser = `${apiUrl}/${process.env.NEXT_PUBLIC_API_USERS}`;
export const apiUrlUsersUser = `${apiUrl}/${process.env.NEXT_PUBLIC_API_USERS_USER}`;
export const apiUrlUserInative = `${apiUrl}/${process.env.NEXT_PUBLIC_API_USER_INATIVE}`;

import { getAdminsUsersType, usersType } from './type';

export const Get = async (page: string, quantity: string, search?: string) => {
  // const response: { data?: getAdminsUsersType } = await baseApi.get(
  //   search
  //     ? `${apiAdminsUsers}/${page}/${quantity}?nome=${search}`
  //     : `${apiAdminsUsers}/${page}/${quantity}`
  // );

  // return response?.data;

  const response = {
    totalRegitros: 5,
    usuarios: [
      {
        id: '21e616bf-fef7-4c46-ae74-722159965efc',
        description: 'Everlog ADOG',
      },
      {
        id: '32342f19-2dbc-4654-b567-657701331136',
        description: 'wenderson belko',
      },
      {
        id: '4d088967-da5d-407d-9ae4-af75dd52a625',
        description: 'Carlos dos Santos',
      },
      {
        id: 'c3fa59d5-8823-4be3-9d4b-d5ed96517dab',
        description: 'belko',
      },
      {
        id: 'f2bcf6ef-2413-4be0-8b3c-864c8d98520c',
        description: 'thiago',
      },
    ],
  };
  return response;
};

export const Edit = async (user: usersType) => {
  const response = await baseApi.put(apiUrlUsersUser, user);

  return response;
};

export const Create = async (user: usersType) => {
  const response = await baseApi.post(apiUrlUser, {
    ...user,
    id: null,
  });

  return response;
};

export const Inative = async (userId: string, active: boolean) => {
  const response = await baseApi.patch(
    `${apiUrlUserInative}/${userId}/${active}`
  );

  return response;
};

export const Delete = async (userId: string) => {
  const response = await baseApi.patch(`${apiUrlUserInative}/${userId}`);

  return response;
};
