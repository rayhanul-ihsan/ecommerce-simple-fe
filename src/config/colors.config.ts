export const colors = {
  orange: {
    50: '#fff2e6',
    100: '#ffd6b9',
    200: '#ffcf8a',
    300: '#ffac54',
    400: '#ff9433',
    500: '#ff7900',
    600: '#ed6e00',
    700: '#b55f00',
    800: '#8c4a00',
    900: '#6b3300',
  },
  primary: '#ff7900',
} as const;

export type OrangeShade = keyof typeof colors.orange;
