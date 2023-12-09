import type { ReactElement } from 'react';

import type { Repo } from '@/models';

import * as S from './styles';

interface Props {
	data: Repo;
}

export function CardRepo({ data }: Props): ReactElement {
	return (
		<S.LinkContainer
			to={data.html_url}
			target="_blank"
		>
			<S.Container>
				<h3>{data.name}</h3>
			</S.Container>
		</S.LinkContainer>
	);
}
