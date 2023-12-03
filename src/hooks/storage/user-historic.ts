import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { User } from '@/models';

interface Props {
	users: User[];
	save: (data: User) => void;
}

export const useUserHistoric = create<Props>()(
	persist(
		(set, get) => ({
			users: [],
			save(data): void {
				const old_data = get().users;

				const user_exist = old_data.find((user) => user.id === data.id);

				if (user_exist) return;

				set((state) => ({ ...state, users: [...state.users, data] }));
			},
		}),
		{ name: 'user-historic', storage: createJSONStorage(() => sessionStorage) },
	),
);
