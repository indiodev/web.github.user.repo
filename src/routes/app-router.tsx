import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Default } from '@/layout';
import { Historic, Home } from '@/pages';
import { ProfileAndRepos } from '@/pages/profile-and-repos';

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
					<Route
						path="/historic"
						element={<Historic />}
					/>
					<Route
						path="/profile-and-repos"
						element={<ProfileAndRepos />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
