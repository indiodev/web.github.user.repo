import { MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useRef, useState, type ReactElement } from 'react';

import { CardUser } from '@/components';
import { useGetUser } from '@/hooks';

import * as S from './style';

export function Home(): ReactElement {
	const inputSearchRef = useRef<HTMLInputElement>(null);
	const [search, setSearch] = useState('');

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

	useEffect(() => {
		if (isSuccess) {
			setSearch('');

			return;
		}
	}, [isSuccess, search]);

	return (
		<S.Container>
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

			{isFetch && <p>Buscando possível usuário...</p>}

			{!isLoading && !isFetch && isSuccess && user.id && (
				<CardUser data={user} />
			)}

			{isError && <p>Ops, algo deu errado...</p>}
		</S.Container>
	);
}
