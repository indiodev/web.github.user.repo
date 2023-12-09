import { CaretLeft } from '@phosphor-icons/react';
import { type ReactElement } from 'react';

import { CardUser, Container, Link } from '@/components';
import { useUserHistoric } from '@/hooks';

import * as S from './style';

export function Historic(): ReactElement {
	const { users } = useUserHistoric();

	return (
		<S.Container>
			<S.ContentHead>
				<Link to="/">
					<CaretLeft size={20} />
					<span>voltar</span>
				</Link>

				<span>Pagination...</span>
			</S.ContentHead>
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
