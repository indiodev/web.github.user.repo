import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { QueryClient } from './config';
import { AppRouter } from './routes';
import { GlobalStyle, Theme } from './styles';

export function App(): ReactElement {
	return (
		<QueryClientProvider client={QueryClient}>
			<ThemeProvider theme={Theme}>
				<AppRouter />
				<GlobalStyle />
			</ThemeProvider>
		</QueryClientProvider>
	);
}
