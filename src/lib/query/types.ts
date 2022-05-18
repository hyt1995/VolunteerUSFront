type CommonType = {
    onCompleted: (data: any) => void;
};

type UserApplyGroupType = CommonType & {
    groupName: string;
    userName: string;
};

type GroupApplyType = CommonType & {
    groupName: string;
    repreName: string;
    limit: number;
    groupGreeting: string;
    groupExplane: string;
};

type SearchType = CommonType & {
    begin: string | null;
    post: string | null;
    title: string | null;
    option: {
        teen: boolean;
        group: boolean;
        adult: boolean;
    };
    page: number;
};
