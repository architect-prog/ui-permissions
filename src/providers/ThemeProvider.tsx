import React from 'react';
import { createContext } from 'react';
import { ChildrenProps, ThemeProps, ThemeType } from 'types/frontend';

export const ThemeContext = createContext<ThemeProps | null>(null);

const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [themeType, setThemeMode] = React.useState<ThemeType>(ThemeType.Client);
  return (
    <ThemeContext.Provider value={{ themeType: themeType, changeTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
