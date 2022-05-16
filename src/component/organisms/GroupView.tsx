import styled, { css } from 'styled-components';
import { FlexBox, SubTitle, Input } from '../atoms';
import Image from 'next/image';

const TopArea = styled.div<any>`
    padding: ${({ theme }) => theme.space.md};
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.gray3};
    border-bottom: 2px solid ${({ theme }) => theme.color.gray1};
    font-weight: bold;

    h2 {
        width: 80px;
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.gray2};
    }

    .open-url {
        margin-bottom: ${({ theme }) => theme.space.md};

        h2 {
            margin-bottom: ${({ theme }) => theme.space.xxs};
            color: ${({ theme }) => theme.color.point};
            font-size: 12px;
        }
        &__input {
            display: flex;
            justify-content: center;
            border: 2px solid ${({ theme }) => theme.color.point};
            text-decoration: underline;
            text-decoration-color: ${({ theme }) => theme.color.point};

            span {
                color: ${({ theme }) => theme.color.gray2};
                font-size: 32px;
                font-weight: 100;
            }
            input {
                border: none;
                background: transparent;
                color: ${({ theme }) => theme.color.point};
            }

            ${(props) =>
                props.edit &&
                css`
                    padding: 0 0 0 20px;

                    input {
                        border: none;
                        background: transparent;
                        color: ${({ theme }) => theme.color.gray3};
                    }
                `}
        }
    }
`;
const InfoArea = styled.div<any>`
    line-height: 1.3;
    padding: ${({ theme }) => theme.space.md};
    border-bottom: 2px solid ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.gray2};

    .content {
        padding: ${({ theme }) => theme.space.sm};
    }

    ${(props) =>
        props.bg &&
        css`
            background: ${({ theme }) => theme.color.bg};
        `}
`;

const edit = true;

const GroupView = () => {
    return (
        <>
            <TopArea edit={!edit}>
                <div className="open-url">
                    <h2>오픈 채팅 URL</h2>
                    {!edit ? (
                        <div className="open-url__input">
                            <span>+</span>
                            <Input placeholder="오픈 채팅 URL을 입력해주세요" />
                        </div>
                    ) : (
                        <div className="open-url__input">
                            <Input value="dddddddddddddddddddddddddddddddddddddddd" readOnly={edit} />
                        </div>
                    )}
                </div>
                <FlexBox>
                    <h2>지역 :</h2>
                    <p>강남구</p>
                </FlexBox>
                <FlexBox>
                    <h2>대표자 :</h2>
                    <p>김봉봉</p>
                </FlexBox>
                <FlexBox>
                    <h2>현재 인원 :</h2>
                    <p>46 / 100</p>
                </FlexBox>
            </TopArea>

            <InfoArea>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 소개글</SubTitle>
                    <p className="content">
                        비영리 재단법인 아름다운가게는 기증받은 물품을 판매하여 그 수익으로 우리 주변의 어려운 이웃을 돕는 사회적
                        기업입니다.
                    </p>
                </FlexBox>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 상세 정보</SubTitle>
                    <p className="content">
                        비영리 재단법인 아름다운가게는 기증받은 물품을 판매하여 그 수익으로 우리 주변의 어려운 이웃을 돕는 사회적
                        기업입니다.
                        <br />
                        <br />
                        아름다운 가게는 수익금은 도움이 필요한 이웃들의 교육비, 병원비, 주거생활안정비,등으로 사용합니다.
                        <br />
                        <br />
                        지원자격 : 17세 ~ 35세 미만 (노동강도가 있어 제한합니다.)
                        <br />
                        <br />
                        무단 불참의 경우 나머지 활동 반려될 수 있습니다. 불참은 최소 2일전 매장으로 연락 바라며, 그 외는 무단불참으로
                        간주합니다.
                        <br />
                        <br />
                        청소년은 방학중에만 평일 봉사가 가능합니다 우측 하얀 문으로 들어오세요
                    </p>
                </FlexBox>
            </InfoArea>

            <InfoArea bg>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 멤버 정보</SubTitle>
                    <div className="content">
                        <img src="" alt="" />
                    </div>
                </FlexBox>
            </InfoArea>
        </>
    );
};

export default GroupView;
