import {
  signOut,
  GetMyInfosSecurity,
  definedPermissions,
  SetSession,
  GetMyInfosProfile,
  GetMyInfoKeepConnected,
} from '˜/components/Views/Login/config/service';
import { url } from '˜/components/Views/Login/config/url';
import axios, { AxiosError } from 'axios';
import _ from 'lodash';
import Router from 'next/router';

import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined) {
  const api_url = `${process.env.NEXT_PUBLIC_API_URL}`;
  let token = null;
  try {
    const myInfos = GetMyInfosSecurity();

    if (_.get(myInfos, 'token')) {
      token = _.get(myInfos, 'token');
    }
  } catch (error) {
    token = null;
  }

  const baseApi = axios.create({
    baseURL: api_url,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  });

  function status_401(error: AxiosError) {
    if (error.response.data?.code === 'token.expired') {
      const myInfos = GetMyInfosSecurity();
      const myProfile = GetMyInfosProfile();
      const myKeepConnected = GetMyInfoKeepConnected();

      if (_.get(myInfos, 'refreshToken') && myProfile && myKeepConnected) {
        const refreshToken = _.get(myInfos, 'refreshToken');

        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          baseApi
            .post('/refresh', {
              refreshToken,
            })
            .then((response) => {
              const {
                userName,
                accessToken,
                refreshToken,
                expiresIn,
                role,
              } = response.data;

              baseApi.defaults.headers[
                'Authorization'
              ] = `Bearer ${accessToken}`;

              const permissions = definedPermissions(role);

              const profile = {
                name: userName,
                email: _.get(myKeepConnected, 'email'),
                permissions,
                roles: role,
                avatar: null,
              };

              let new_keep_connected = null;
              if (_.get(myKeepConnected, 'keep_connected')) {
                new_keep_connected = {
                  email: _.get(myKeepConnected, 'email'),
                  password: _.get(myKeepConnected, 'password'),
                  keep_connected: _.get(myKeepConnected, 'keep_connected'),
                };
              }

              const security = {
                keepConnect: _.get(myKeepConnected, 'keep_connected'),
                maxAge: expiresIn,
                token: accessToken,
                refreshToken: refreshToken,
                maxAgeRefreshToken: expiresIn * 2,
              };

              SetSession({
                security: security,
                profile: profile,
                keepConnected: new_keep_connected,
              });

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];

              if (process.browser) {
                signOut(null, null);
              }
            })
            .finally(() => {
              isRefreshing = false;
            });
        }
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`;
              resolve(baseApi(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    } else {
      // deslogar o usuario
      if (process.browser) {
        signOut(null, null);
        Router.push(url);
      } else {
        return Promise.reject(new AuthTokenError());
      }
    }
  }

  baseApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            status_401(error);
            break;
          default:
            break;
        }
      }
      return Promise.reject(error);
    }
  );

  return baseApi;
}
