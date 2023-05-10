import 'styled-components';

type ColorName = 'primary' | 'blue';

type FontSizeName = 'xxs' | 'xs' | 's' | 'base' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ColorName, string>;
    fontSizes: Record<FontSizeName, string>;
  }
}
