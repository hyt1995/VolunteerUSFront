import '../../styles/globals.css';
import { theme } from '../../styles/theme';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    </ThemeProvider>
);

export default MyApp;
