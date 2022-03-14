type StorageParamsType =
  | 'signOutAuthChannel'
  | 'authBroadcastChannel'
  | 'profile'
  | 'security'
  | 'gazin'
  | 'keepConnected';
export const storage = {
  local: {
    getItem: (param: StorageParamsType) => localStorage.getItem(param),
    setItem: (param: StorageParamsType, value: string) =>
      localStorage.setItem(param, value),
    removeOne: (param: StorageParamsType) => localStorage.removeItem(param),
    removeAll: () => localStorage.clear(),
  },
  session: {
    getItem: (param: StorageParamsType) => sessionStorage.getItem(param),
    setItem: (param: StorageParamsType, value: string) =>
      sessionStorage.setItem(param, value),
    removeOne: (param: StorageParamsType) => sessionStorage.removeItem(param),
    removeAll: () => sessionStorage.clear(),
  },
};
