import styled, { keyframes } from 'styled-components';

const SkeletonKeyFrames = keyframes`
  0% {
    background-position: -100px 0;
  }
  100% {
    background-position: calc(100px + 100%) 0;
  }
`;

export const BaseSkeleton = styled.div`
	background-color: ${({ theme }): string => theme.colors['base-post']};
	background-image: linear-gradient(
		90deg,
		${({ theme }): string => theme.colors['base-post']},
		${({ theme }): string => theme.colors['base-border']},
		${({ theme }): string => theme.colors['base-post']}
	);
	/* flex: 1; */
	width: 100%;
	height: 100%;
	border-radius: 16px;
	background-size: 100px 100%;
	background-repeat: no-repeat;
	border: 1px solid ${({ theme }): string => theme.colors['base-border']};
	animation: ${SkeletonKeyFrames} 1300ms ease-in-out infinite;
`;

interface Props {
	width: string;
	height: string;
}

export const Skeleton = styled(BaseSkeleton)<Props>`
	width: ${({ width }): string => width};
	height: ${({ height }): string => height};
`;
