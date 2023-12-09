import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
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

export const LinkContainer = styled(Link)`
	text-decoration: none;

	color: ${({ theme }): string => theme.colors['base-text']};
`;
