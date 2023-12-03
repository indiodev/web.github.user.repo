import styled from 'styled-components';

export const Container = styled.section`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
	max-height: 31.25rem;
	height: 100%;
	gap: 2rem;
`;

export const RepoRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow-y: hidden;
`;

export const RepoListRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
	overflow-y: auto;
`;
