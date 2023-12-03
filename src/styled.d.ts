import type { Theme } from '@/styles';
import 'styled-components';

type ThemeType = typeof Theme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
