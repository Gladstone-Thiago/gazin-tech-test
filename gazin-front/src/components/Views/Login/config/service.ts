import { Dispatch, SetStateAction } from 'react';

import { baseApi } from '˜/services/apiClient';
import { storage } from '˜/utils/storage';
import _ from 'lodash';

export const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
export const apiAuth = `${apiUrl}/${process.env.NEXT_PUBLIC_API_AUTH}`;

type signInCredentials = {
  email: string;
  password: string;
  keep_connected: boolean;
};

export const signIn = async (
  value: signInCredentials,
  SetIsSubmitting: Dispatch<SetStateAction<boolean>>,
  cangeStatus: (params: any) => Promise<void>
) => {
  try {
    SetIsSubmitting(true);
    return await getLogin(value);
  } catch (error) {
    cangeStatus({
      error: _.get(error, 'response.data')
        ? _.get(error, 'response.data')
        : error,
      response: null,
    });
  } finally {
    SetIsSubmitting(false);
  }
};

export type usersType = {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  telefone: string;
  celular: string;
  senha: string;
  ativo: boolean;
  roles: string[];
};

export type getAdminsUsersType = {
  totalRegitros: number;
  usuarios: usersType[];
};

const setCredentials = async (
  response: any,
  keep_connected: boolean,
  email: string,
  password: string
) => {
  const {
    userName,
    accessToken,
    refreshToken,
    expiresIn,
    role,
    data,
  } = response.data;

  baseApi.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

  const permissions = await definedPermissions(role);

  const profile = {
    name: userName,
    email: email,
    permissions,
    roles: role,
    avatar: null,
  };

  let new_keep_connected = null;
  if (keep_connected) {
    new_keep_connected = {
      email: email,
      password: password,
      keep_connected: true,
    };
  }

  const security = {
    keepConnect: keep_connected,
    maxAge: expiresIn,
    token: accessToken,
    refreshToken: refreshToken,
    maxAgeRefreshToken: expiresIn * 2,
    data: data,
  };

  await SetSession({
    security: security,
    profile: profile,
    keepConnected: new_keep_connected,
  });

  return profile;
};

const getLogin = async (value: signInCredentials) => {
  const { keep_connected, email, password } = value;
  const response: any = await baseApi.post(apiAuth);

  const profile = await setCredentials(
    response,
    keep_connected,
    email,
    password
  );

  return profile;
};

export const signOut = async (
  SetIsSubmitting: Dispatch<SetStateAction<boolean>>,
  cangeStatus: (params: any) => Promise<void>
) => {
  try {
    if (SetIsSubmitting) SetIsSubmitting(true);
    await RemoveStorage();

    return true;
  } catch (error) {
    if (cangeStatus) {
      cangeStatus({
        error: _.get(error, 'response.data')
          ? _.get(error, 'response.data')
          : error,
        response: null,
      });
    }
  } finally {
    if (SetIsSubmitting) SetIsSubmitting(false);
  }
};

export const me = async (
  SetIsSubmitting: Dispatch<SetStateAction<boolean>>,
  cangeStatus: (params: any) => Promise<void>
) => {
  try {
    return true;
  } catch (error) {
    cangeStatus({
      error: _.get(error, 'response.data')
        ? _.get(error, 'response.data')
        : error,
      response: null,
    });
  } finally {
    SetIsSubmitting(false);
  }
};

export const RemoveStorage = async () => {
  storage.local.removeAll();
  storage.session.removeAll();
};
