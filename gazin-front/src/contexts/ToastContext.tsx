import { createContext, ReactNode, useState } from 'react';

type ToastProviderProps = {
  children: ReactNode;
};

type statusProps = {
  error?: any;
  response?: any;
};

type ToastContextData = {
  cangeStatus: (params: statusProps) => Promise<void>;
  error: any;
  response: any;
};

export const ToastContext = createContext({} as ToastContextData);

export function ToastProvider({ children }: ToastProviderProps) {
  const [error, setError] = useState<any>();
  const [response, setResponse] = useState<any>();

  async function cangeStatus({ error, response }: statusProps) {
    setError(error);
    setResponse(response);
  }

  return (
    <ToastContext.Provider
      value={{
        cangeStatus,
        error,
        response,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
