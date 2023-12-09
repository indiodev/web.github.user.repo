import { MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useRef, useState, type ReactElement } from 'react';

import { Container } from '@/components';
import { useGetUser, useUserHistoric } from '@/hooks';

import { CardUser } from './card-user';
import * as S from './style';

export function Home(): ReactElement {
	const inputSearchRef = useRef<HTMLInputElement>(null);
	const [search, setSearch] = useState('');
	const { users } = useUserHistoric();

	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: user,
	} = useGetUser({
		username: search,
	});

	const isFetch = isLoading || isFetching;

	const filtered_users = users.filter((u) => u.id !== user?.id).reverse();

	useEffect(() => {
		if (isSuccess) {
			setSearch('');

			return;
		}
	}, [isSuccess, search]);

	return (
		<S.Container>
			<S.Title>HUBusca</S.Title>
			<S.SearchRoot>
				<S.InputRoot>
					<S.Input
						placeholder="Pesquise por nome de usuário"
						ref={inputSearchRef}
						onKeyDown={(event) => {
							if (!(event.key === 'Enter') || !inputSearchRef.current) return;

							setSearch(inputSearchRef.current?.value);
						}}
					/>
					<S.InputButton
						onClick={(): void => {
							if (!inputSearchRef.current) return;

							setSearch(inputSearchRef.current?.value);
						}}
					>
						<MagnifyingGlass
							size={24}
							weight="bold"
						/>
					</S.InputButton>
				</S.InputRoot>
				<span>clique na lupa ou pressione enter</span>
			</S.SearchRoot>

			{isFetch && <S.FadeText>Buscando possível usuário...</S.FadeText>}

			{!isLoading && !isFetch && isSuccess && user.id && (
				<Container>
					<CardUser data={user} />
				</Container>
			)}

			{isError && <p>Ops, algo deu errado...</p>}

			<div>
				<S.HistoricHead>
					<span>Recentes</span>

					{filtered_users.length > 3 && (
						<S.HistoricAllLink to="/">
							Ver todos <S.Dot>{filtered_users.length}</S.Dot>
						</S.HistoricAllLink>
					)}
				</S.HistoricHead>

				<Container>
					<S.HistoricList>
						{filtered_users.length > 1 &&
							filtered_users.slice(0, 3).map((u) => (
								<CardUser
									data={u}
									key={u.id}
								/>
							))}
					</S.HistoricList>
				</Container>
			</div>
		</S.Container>
	);
}
