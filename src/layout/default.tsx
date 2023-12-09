import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	max-width: 54rem;
	width: 100%;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	padding-bottom: 2rem;
`;

export function Default(): ReactElement {
	return (
		<Container>
			<Title>web.github.user.repo</Title>
			<Outlet />
		</Container>
	);
}
