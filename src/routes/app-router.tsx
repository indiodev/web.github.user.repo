import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Default } from '@/layout';
import { Home } from '@/pages';

export function AppRouter(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Default />}
				>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route path="/profile-and-repos" />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
