import { Theme } from '../styles/theme';
import { CSSObject, CSSProp } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        color: any;
        space: any;
    }
}

declare module 'react' {
    interface Attributes {
        css?: CSSProp | CSSObject;
    }
}
