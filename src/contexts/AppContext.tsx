import { createContext, useMemo } from 'react';

type AppContextData = {
  isAuth: boolean;
};

type AppProviderProps = {
  children: JSX.Element;
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const isAuth = useMemo(() => true, []);

  return (
    <AppContext.Provider value={{ isAuth }}>{children}</AppContext.Provider>
  );
}
