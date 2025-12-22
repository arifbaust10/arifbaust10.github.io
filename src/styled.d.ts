import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      primary: string;
      secondary: string;
      border: string;
      accent: string;
    };
  }
}
