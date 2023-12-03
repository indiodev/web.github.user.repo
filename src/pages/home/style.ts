import styled from 'styled-components';

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

export const Container = styled.section`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 16rem;
	gap: 1rem;
`;

export const SearchRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: flex-end;
	padding-bottom: 0.5rem;
`;

export const InputRoot = styled.div`
	border-radius: 6px;
	position: relative;
	border: 1px solid ${({ theme }): string => theme.colors['base-border']};
	background-color: ${({ theme }): string => theme.colors['base-input']};
	width: 100%;
`;

export const Input = styled.input`
	padding: 0.75rem 1rem;
	background: transparent;
	flex: 1;
	border-radius: 6px;
	border: none;
	width: 100%;
	color: ${({ theme }): string => theme.colors['base-text']};

	::placeholder {
		color: ${({ theme }): string => theme.colors['base-label']};
	}
`;

export const InputButton = styled.button`
	background: transparent;
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	border: none;
	line-height: 0;
	color: ${({ theme }): string => theme.colors['base-text']};
	cursor: pointer;
`;
