import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { User } from '@/models';
import { API } from '@/services';

import { useUserHistoric } from '..';

async function fetcher(username: string): Promise<User> {
	const { data } = await API.get<User>(`users/${username}`);
	return data;
}

interface Props {
	username: string;
}

export function useGetUser({
	username,
}: Props): UseQueryResult<User, Error | AxiosError> {
	const { isSuccess, data, ...rest } = useQuery({
		queryKey: ['USER'],
		queryFn: () => fetcher(username),
		enabled: username !== '',
	});

	if (isSuccess && data.id) {
		useUserHistoric.getState().save(data);
	}

	return { ...rest, isSuccess, data } as UseQueryResult<
		User,
		Error | AxiosError
	>;
}
