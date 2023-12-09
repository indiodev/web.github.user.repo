import { Flag, GithubLogo, Users } from '@phosphor-icons/react';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import type { User } from '@/models';

import * as S from './styles';

interface Props {
	data: User;
}

export function CardUser({ data }: Props): ReactElement {
	const navigate = useNavigate();

	return (
		<S.Container
			onClick={() =>
				navigate('/profile-and-repos', {
					state: {
						user: data,
					},
				})
			}
		>
			<S.Content>
				<S.Avatar
					src={data.avatar_url}
					alt={data.name ?? data.login}
					loading="lazy"
				/>
				<S.ProfileInfoGroup>
					<div>
						<S.Name>{data.name ?? data.login}</S.Name>
						<S.IconGroup>
							<GithubLogo
								size={18}
								weight="fill"
							/>
							<span>{data.login}</span>
						</S.IconGroup>
					</div>
					<S.Info>
						<S.IconGroup>
							<Users
								size={18}
								weight="fill"
							/>
							<span>{data.followers}</span>
						</S.IconGroup>

						<S.IconGroup>
							<Flag
								size={18}
								weight="fill"
							/>
							<span>{data.location}</span>
						</S.IconGroup>
					</S.Info>
				</S.ProfileInfoGroup>
			</S.Content>
		</S.Container>
	);
}
