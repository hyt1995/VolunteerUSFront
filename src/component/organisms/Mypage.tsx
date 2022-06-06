import { Title, SubTitle, TextContent, FlexBox, BaseBox, BgBox, ShadowBox } from 'component/atoms';
import { ListCommentItem, ListTopItem } from 'component/molecule';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const TopArea = styled.div`
    background: ${({ theme }) => theme.color.primary} url('../images/content_bg.png') no-repeat 0 0 / cover;
    padding-bottom: ${({ theme }) => theme.space.md};

    .user_info {
        display: flex;
        justify-content: space-between;
        max-width: 360px;
        margin: 0 auto;
        padding: 20px;
        color: #fff;

        .place {
            font-size: 14px;
        }
    }

    .box {
        text-align: center;
        max-width: 287px;
        margin: 30px auto 0;
        padding: ${({ theme }) => theme.space.md};
        border-radius: ${({ theme }) => theme.space.xs};
        background: #fff;

        .count {
            font-size: 21px;
            color: ${({ theme }) => theme.color.point};
        }
        .caption {
            font-size: 12px;
            margin-top: ${({ theme }) => theme.space.xs};
        }
    }
`;
const MyInfo = styled.div`
    background: rgba(50, 130, 250, 0.1);
`;
const Mypage = () => {
    return (
        <div>
            <TopArea>
                <div className="user_info">
                    <p>
                        함께 나눠요! <strong>김봉봉님</strong>
                    </p>
                    <p className="place">경기도 수원시</p>
                </div>
                <ShadowBox className="box">
                    <FlexBox column>
                        <FlexBox align="center" justify="center">
                            <Image src="/images/icon/badge.svg" alt="icon" width={32} height={32} />
                            <strong className="count">6회</strong>
                        </FlexBox>
                        <div className="caption">이번 달 봉사 횟수</div>
                    </FlexBox>
                </ShadowBox>
            </TopArea>
            <MyInfo>
                <BaseBox>
                    <Title>나의 정보</Title>

                    <FlexBox>
                        <SubTitle alignItems="flex-start" fontSize="14" mt="0" mr="21" color="gray2">
                            이름
                        </SubTitle>
                        <TextContent fontSize="14">
                            <b>이름</b>
                        </TextContent>
                    </FlexBox>
                    <FlexBox>
                        <SubTitle alignItems="flex-start" fontSize="14" mt="0" mr="21" color="gray2">
                            주소
                        </SubTitle>
                        <TextContent fontSize="14">
                            <b>수원시</b>
                        </TextContent>
                    </FlexBox>
                    <FlexBox>
                        <SubTitle alignItems="flex-start" fontSize="14" mt="0" mr="21" color="gray2">
                            나이
                        </SubTitle>
                        <TextContent fontSize="14">
                            <b>32</b>
                        </TextContent>
                    </FlexBox>
                    <FlexBox>
                        <SubTitle alignItems="flex-start" fontSize="14" mt="0" mr="21" color="gray2">
                            성별
                        </SubTitle>
                        <TextContent fontSize="14">
                            <b>남</b>
                        </TextContent>
                    </FlexBox>
                </BaseBox>
            </MyInfo>
            <BaseBox>
                <Title>나의 봉사 그룹</Title>
                <ListTopItem title="꿈꾸는 봉사단" period="75" address="수원시" border></ListTopItem>
            </BaseBox>
            <BaseBox>
                <Title>나의 봉사 활동</Title>
                <ListCommentItem title="꿈꾸는 봉사단" period="75" address="수원시"></ListCommentItem>
                <ListCommentItem title="꿈꾸는 봉사단" period="75" address="수원시"></ListCommentItem>
            </BaseBox>
        </div>
    );
};

export default Mypage;
