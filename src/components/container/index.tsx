import type { ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface Props {
	children: ReactNode;
}
export function Container({ children }: Props): ReactElement {
	return <S.Container>{children}</S.Container>;
}
