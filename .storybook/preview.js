import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/globals';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RecoilRoot>
                <Story />
            </RecoilRoot>
        </ThemeProvider>
    )
];
