import 'styled-components';

type ColorName = 'primary';

type FontSizeName = 'xxs' | 'xs' | 's' | 'base' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ColorName, string>;
    fontSizes: Record<FontSizeName, string>;
  }
}
