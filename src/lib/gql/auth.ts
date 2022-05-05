// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag';

export const login = gql`
    query login($id: String!, $password: String!) {
        login(id: $id, password: $password)
    }
`;

export const register = gql`
    query createUser(
        $id: String!
        $userName: String!
        $password: String!
        $gender: Boolean
        $birthday: String
        $phone: String!
        $address: String
    ) {
        createUser(
            id: $id
            userName: $userName
            password: $password
            gender: $gender
            birthday: $birthday
            phone: $phone
            address: $address
        )
    }
`;

export const confirmId = gql`
    query confirmUserId($id: String!) {
        confirmUserId(id: $id)
    }
`;
