import { type ReactElement } from 'react';
import type { Location } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { CardRepo, CardUser } from '@/components';
import { useGetRepos } from '@/hooks';
import type { User } from '@/models';

import * as S from './styles';

interface UseLocation extends Location {
	state: {
		user: User;
	};
}

export function ProfileAndRepos(): ReactElement {
	const {
		state: { user },
	} = useLocation() as UseLocation;

	const {
		data: repos,
		isSuccess,
		isLoading,
		isError,
	} = useGetRepos({ username: user.login });

	return (
		<S.Container>
			<CardUser data={user} />

			{isSuccess && repos.length > 0 && (
				<S.RepoRoot>
					<h3>Repositórios</h3>
					<S.RepoListRoot>
						{repos.map((repo) => (
							<CardRepo
								key={repo.id}
								data={repo}
							/>
						))}
					</S.RepoListRoot>
				</S.RepoRoot>
			)}

			{isLoading && <p>Buscando repositórios.</p>}

			{isSuccess && !(repos.length > 0) && (
				<p>Ops, nenhum repositório foi encontrado.</p>
			)}

			{isError && <p>Ops, algum erro aconteceu.</p>}
		</S.Container>
	);
}
