import { groupApply } from '../gql/group';

export interface Complete {
    onCompleted: (data: any) => void;
}

export interface ConfirmUserIdVariables {
    id: string;
}

export interface GetConfirmUserId {
    confirmUserId: boolean;
}

export interface GroupDetailVariables {
    groupId: number;
}

export interface GroupDetail {
    groupName: string;
    representName: string;
    limitPeople: number;
    groupGreeting: string;
    groupExplain: string;
    applyPeopleNumber: number;
    openChatUrl: string;
    addressGroupInfo: string;
    applyUserId: number;
    applyGroupId: number;
    birthday: string;
    gender: boolean;
    countAge: number;
}

export interface GetGroupDetail {
    detailGroup: GroupDetail[];
}

export interface InfoListVariables {
    progrmBeginDate: string | null;
    postAdres: string | null;
    progrmTitle: string | null;
    teenPossible: boolean;
    adultPossible: boolean;
    groupPossible: boolean;
    pageNumber: number | null;
}

export interface InfoList {
    progrmTitle: string;
    progrmEndDate: string;
    postAdres: string;
}

export interface GetInfoList {
    infoListResponse: InfoList[];
}

export interface LoginVariables {
    id: string;
    password: string;
}

export interface Login {
    token: string;
    userName: string;
    id: string;
}

export interface GetLogin {
    login: Login;
}

export interface LoginTokenAuthVariables {
    token: string;
}

export interface LoginToken {
    token: string;
    userName: string;
    id: string;
}

export interface GetLoginToken {
    loginTokenAuth: LoginToken;
}

export interface LookUpGroupVariables {
    groupName: string | null;
    searchAddress: string | null;
    pageNum: number | null;
}

export interface LookUpGroup {
    groupName: string;
    representName: string;
    limitPeople: number;
    groupGreeting: string;
    groupExplain: string;
    userId: number;
    applyPeopleNumber: number;
}

export interface GetLookUpGroup {
    lookUpGroup: LookUpGroup[];
}

export interface CreateUserVariables {
    id: string;
    userName: string;
    password: string;
    gender: boolean;
    birthday: string;
    phone: string;
    address: string;
}

export interface MutationCreateUser {
    createUser: boolean;
}
export interface GroupApplyVariables {
    groupName: string;
    limit: number;
    groupGreeting: string;
    groupExplane: string;
    AddressGroup: string | null;
    openChatUrl: string | null;
}

export interface MutationGroupApply {
    groupApply: boolean;
}

export interface KakaoUserInfoLoginVarialbes {
    token: string;
}

export interface KakaoUserInfoLogin {
    id: string;
    name: string;
    address: string;
    gender: boolean;
    birthday: string;
    phone: string;
    token: string;
}

export interface MutationKakaoUserInfoLogin {
    kakaoUserInfoLogin: KakaoUserInfoLogin;
}

export interface UserApplyToGroupVariables {
    applyGroupId: number;
}

export interface MutationUserApplyToGroup {
    userApplyToGroup: boolean;
}
