/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import { me } from '˜/components/Views/Login/config/service';
import { url } from '˜/components/Views/Login/config/url';
import { storage } from '˜/utils/storage';
import Router from 'next/router';

import { ToastContext } from './ToastContext';

type User = {
  name: string;
  email: string;
  permissions: string[] | string;
  roles: string;
  avatar: string;
};

type AuthContextData = {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { cangeStatus } = useContext(ToastContext);
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      setIsLoading(true);
      const result = await me(setIsLoading, cangeStatus);
      setUser(result);
    } catch (error) {
      await EmitSignOutAuthChannel();
      return Router.push(url);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        setUser,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
