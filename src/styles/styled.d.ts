import 'styled-components';
import { theme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    breakpoints: typeof theme.breakpoints;
  }
}
