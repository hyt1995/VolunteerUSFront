import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { login, register, confirmId, kakaoLogin, tokenLogin } from '../gql/auth';
import * as api from './types';

export const useLoginQuery = () => useLazyQuery<api.GetLogin, api.LoginVariables>(login);

export const useRegisterMutation = () => useMutation<api.MutationCreateUser, api.CreateUserVariables>(register);

export const useConfirmQuery = () => useLazyQuery<api.GetConfirmUserId, api.ConfirmUserIdVariables>(confirmId);

export const useKakaoMutation = () => useMutation<api.MutationKakaoUserInfoLogin, api.KakaoUserInfoLoginVarialbes>(kakaoLogin);

export const useTokenQuery = () => useLazyQuery<api.GetLoginToken, api.LoginTokenAuthVariables>(tokenLogin);
