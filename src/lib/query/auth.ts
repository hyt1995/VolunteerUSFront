import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { login, register, confirmId } from '../gql/auth';

export const useLoginQuery = () => useLazyQuery(login);

export const useRegisterMutation = () => useMutation(register);

export const useConfirmQuery = () => useLazyQuery(confirmId);

type loginType = {
    id: string;
    password: string;
};
