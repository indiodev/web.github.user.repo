import { type ReactElement } from 'react';

import { CardUser, Container } from '@/components';
import { useUserHistoric } from '@/hooks';

import * as S from './style';

export function Historic(): ReactElement {
	const { users } = useUserHistoric();

	return (
		<S.Container>
			<Container>
				<S.HistoricList>
					{users.map((u) => (
						<CardUser
							data={u}
							key={u.id}
						/>
					))}
				</S.HistoricList>
			</Container>
		</S.Container>
	);
}
