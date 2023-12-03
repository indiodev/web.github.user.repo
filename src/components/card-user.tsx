import { Flag, GithubLogo, Users } from '@phosphor-icons/react';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import type { User } from '@/models';

interface Props {
	data: User;
}

const Container = styled.div`
	display: flex;
	box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.35);
	padding: 1.5rem;
	gap: 1rem;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.75);
	}
`;

export const Content = styled.div`
	display: flex;
	gap: 1rem;
`;

const Avatar = styled.img`
	width: 6.25rem;
	height: 6.25rem;
	object-fit: contain;
	border-radius: 16px;
`;

const Name = styled.h1`
	font-size: 1.5rem;
`;

const IconGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 0.15rem;
`;

const Info = styled.div`
	display: flex;
	gap: 1rem;
`;

const ProfileInfoGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: space-between;
`;

export function CardUser({ data }: Props): ReactElement {
	const navigate = useNavigate();

	return (
		<Container
			onClick={() =>
				navigate('/profile-and-repos', {
					state: {
						user: data,
					},
				})
			}
		>
			<Content>
				<Avatar
					src={data.avatar_url}
					alt={data.name}
					loading="lazy"
				/>
				<ProfileInfoGroup>
					<div>
						<Name>{data.name}</Name>
						<IconGroup>
							<GithubLogo
								size={18}
								weight="fill"
							/>
							<span>{data.login}</span>
						</IconGroup>
					</div>
					<Info>
						<IconGroup>
							<Users
								size={18}
								weight="fill"
							/>
							<span>{data.followers}</span>
						</IconGroup>

						<IconGroup>
							<Flag
								size={18}
								weight="fill"
							/>
							<span>{data.location}</span>
						</IconGroup>
					</Info>
				</ProfileInfoGroup>
			</Content>
		</Container>
	);
}
