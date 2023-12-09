import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 16rem;
`;

export const SearchRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: flex-end;

	@media (max-width: 380px) {
		align-items: center;
	}
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
	top: 0.65rem;
	border: none;
	line-height: 0;
	color: ${({ theme }): string => theme.colors['base-text']};
	cursor: pointer;
`;

const fade = keyframes`
	0% { opacity: 0; }
  100% { opacity: 1;}

`;

export const FadeText = styled.p`
	animation: ${fade} 3s 450ms linear infinite;
`;

export const HistoricRoot = styled.div``;

export const ContentHead = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0;
`;

export const Dot = styled.span`
	display: block;
	border-radius: 999px;
	width: 35px;
	font-weight: bold;
	text-align: center;
	color: ${({ theme }): string => theme.colors['base-background']};
	background-color: ${({ theme }): string => theme.colors['base-text']};
`;

export const HistoricList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
