import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import { login, register, confirmId, kakaoLogin } from '../gql/auth';

export const useLoginQuery = () => useLazyQuery(login);

export const useRegisterMutation = () => useMutation(register);

export const useConfirmQuery = () => useLazyQuery(confirmId);

export const useKakaoMutation = () => useMutation(kakaoLogin);
