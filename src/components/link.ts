import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
	text-decoration: none;
	display: flex;
	gap: 0.3rem;
	color: ${({ theme }): string => theme.colors['base-text']};
`;
