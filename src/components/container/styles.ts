import styled from 'styled-components';

export const Container = styled.section`
	padding: 1.5rem;
	border-radius: 8px;
	border: 1px solid ${({ theme }): string => theme.colors['base-border']};
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.35);
`;
