import 'styled-components';

type ColorName = 'primary' | 'primaryLight';

type FontSizeName = 'xxs' | 'xs' | 's' | 'base' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ColorName, string>;
    fontSizes: Record<FontSizeName, string>;
  }
}
