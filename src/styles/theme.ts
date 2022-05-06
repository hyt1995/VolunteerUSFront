import { DefaultTheme } from 'styled-components';
import color from './settings/color';
import space from './settings/space';

export const theme: DefaultTheme = {
    color,
    space
};

export type Theme = typeof theme;
