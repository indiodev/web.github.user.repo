import type { ReactElement } from 'react';

import { CardUser } from '@/components';
import type { User } from '@/models';

export function ProfileAndRepos(): ReactElement {
	return (
		<>
			<CardUser data={{} as User} />
		</>
	);
}
