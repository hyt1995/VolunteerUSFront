import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { login, register, confirmId } from '../gql/auth';

export const useLoginQuery = () => useLazyQuery(login);

export const useRegisterQuery = ({ id, password, userName, gender, birthday, phone, address }: registerType) =>
    useQuery(register, {
        variables: { id, password, userName, gender, birthday, phone, address }
    });

export const useConfirmQuery = () => useLazyQuery(confirmId);

type loginType = {
    id: string;
    password: string;
};

type registerType = loginType & {
    userName: string;
    gender: boolean;
    birthday: string;
    phone: string;
    address: string;
};
