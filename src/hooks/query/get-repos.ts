import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import type { Repo } from '@/models';
import { API } from '@/services';

async function fetcher(username: string): Promise<Repo[]> {
	const { data } = await API.get<Repo[]>(`users/${username}/repos`);
	return data;
}

interface Props {
	username: string;
}

export function useGetRepos({
	username,
}: Props): UseQueryResult<Repo[], Error> {
	return useQuery({
		queryKey: ['REPOS'],
		queryFn: () => fetcher(username),
		enabled: username !== '',
	});
}
