import type { ReactElement } from 'react';

import { Skeleton } from '@/components';

import * as S from './styles';

export function CardUserSkeleton(): ReactElement {
	return (
		<S.Container>
			<S.Content>
				<Skeleton
					width="6.5rem"
					height="6.5rem"
				/>
				<S.ProfileInfoGroup>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}
					>
						<Skeleton
							width={'10rem'}
							height={'1.6rem'}
						/>

						<div style={{ display: 'flex', gap: '0.5rem' }}>
							<Skeleton
								width={'18px'}
								height={'18px'}
							/>

							<Skeleton
								height={'18px'}
								width={'8rem'}
							/>
						</div>
					</div>

					<div style={{ display: 'flex', gap: '0.5rem' }}>
						<Skeleton
							width={'18px'}
							height={'18px'}
						/>

						<Skeleton
							height={'18px'}
							width={'18px'}
						/>
						<Skeleton
							height={'18px'}
							width={'18px'}
						/>
						<Skeleton
							height={'18px'}
							width={'4.5rem'}
						/>
					</div>
				</S.ProfileInfoGroup>
			</S.Content>
		</S.Container>
	);
}
