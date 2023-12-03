import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import type { Repo } from '@/models';

interface Props {
	data: Repo;
}

const Container = styled.div`
	display: flex;
	padding: 1.5rem;
	gap: 1rem;
	cursor: pointer;

	border: 1px solid ${({ theme }): string => theme.colors['base-border']};
	border-radius: 8px;

	:hover {
		background: rgba(255, 255, 255, 0.4);
	}
`;

export function CardRepo({ data }: Props): ReactElement {
	return (
		<Link
			to={data.html_url}
			target="_blank"
		>
			<Container>
				<h3>{data.name}</h3>
			</Container>
		</Link>
	);
}
