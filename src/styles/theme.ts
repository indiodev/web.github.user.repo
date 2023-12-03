export const Theme = {
	colors: {
		'base-background': '#071422',
		'base-title': '#E7EDF4',
		'base-text': '#AFC2D4',
		'base-subtitle': '#C4D4E3',
		'brand-blue': '#3294F8',
		'base-span': '#7B96B2',
		'base-input': '#040F1A',
		'base-label': '#3A536B',
		'base-border': '#1C2F41',
		'base-post': '#112131',
		'base-profile': '#0B1B2B',
		blue: '#3294F8',
	},
} as const;

type Key = keyof typeof Theme.colors;

export type ThemeType = (typeof Theme.colors)[Key];
