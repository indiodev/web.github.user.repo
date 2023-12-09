import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	/* padding: 1.5rem; */
	gap: 1rem;
	cursor: pointer;
`;

export const Content = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Avatar = styled.img`
	width: 6.25rem;
	height: 6.25rem;
	object-fit: contain;
	border-radius: 16px;
`;

export const Name = styled.h1`
	font-size: 1.5rem;
`;

export const IconGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 0.15rem;
`;

export const Info = styled.div`
	display: flex;
	gap: 1rem;
`;

export const ProfileInfoGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: space-between;
`;
