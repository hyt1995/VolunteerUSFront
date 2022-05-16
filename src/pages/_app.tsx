import GlobalStyle from '../styles/globals';
import { theme } from '../styles/theme';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import client from 'lib/gql/client';
import AuthCheck from 'utils/AuthCheck';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
            <GlobalStyle />
            <RecoilRoot>
                <AuthCheck>
                    <Component {...pageProps} />
                </AuthCheck>
            </RecoilRoot>
        </ApolloProvider>
    </ThemeProvider>
);

export default MyApp;
