import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
    border-radius: ${({ theme }) => theme.space.xs};
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    background: #fff url('/images/list_card_graphic.png') no-repeat right top / auto 100%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);

    & + & {
        margin-top: ${({ theme }) => theme.space.md};
    }
    .list-image {
        width: 80px;
        height: 80px;
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
        margin: 0 ${({ theme }) => theme.space.xs};
        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 11px;
            /* 말줄임표 */
            display: -webkit-box;
            word-break: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .info {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: ${({ theme }) => theme.color.gray2};

            & + & {
                margin-top: 4px;
            }
        }
    }
    .list-etc {
        .count {
            display: inline-block;
            text-align: center;
            width: 38px;
            height: 26px;
            line-height: 26px;
            border-radius: calc(${({ theme }) => theme.space.xs} / 2);
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            background: ${({ theme }) => theme.color.primary};
        }
    }
`;
