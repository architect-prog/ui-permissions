import { ThemeType } from './ThemeType';

export type ThemeProps = {
  themeType: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};
