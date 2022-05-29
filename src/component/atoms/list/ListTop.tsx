import styled, { css } from 'styled-components';

export const ListTop = styled.div<any>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm};
    border-radius: ${({ theme }) => theme.space.xs};
    background: #fff url('/images/list_card_graphic.png') no-repeat right top / auto 100%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);

    & + & {
        margin-top: ${({ theme }) => theme.space.md};
    }
    .list-no {
        div {
            text-align: center;
            width: 24px;
            height: 24px;
            line-height: 25px;
            border-radius: 50%;
            color: ${({ theme }) => theme.color.gray3};
            background: ${({ theme }) => theme.color.blueSemi};
        }
        ${(props) =>
            props.top3 &&
            css`
                div {
                    color: #fff;
                    background: ${({ theme }) => theme.color.primary};
                }
            `}
    }
    .list-image {
        width: 80px;
        height: 80px;
        margin: 0 ${({ theme }) => theme.space.sm};
        border-radius: ${({ theme }) => theme.space.xxs};
        background: ${({ theme }) => theme.color.blueSemi};
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .list-info {
        flex: 2;
        overflow: hidden;

        .title {
            font-size: 16px;
            font-weight: bold;
            margin: 6px 0;
            /* 말줄임표 */
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .info {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 500;
            color: ${({ theme }) => theme.color.gray2};

            span {
                &.place {
                    font-weight: bold;
                    color: ${({ theme }) => theme.color.point};
                }
            }
        }
    }
`;
