import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* gap: 1rem; */
	max-width: 54rem;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	color: ${({ theme }): string => theme.colors['blue']};
	line-height: 1.6;
`;

export function Default(): ReactElement {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
