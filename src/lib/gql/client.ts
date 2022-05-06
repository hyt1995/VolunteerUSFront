import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_BACKEND });
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
});

export default client;
