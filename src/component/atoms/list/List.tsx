import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm} 0;
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    .list-image {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        background: #6681aa;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .list-info {
        flex: 2;
        margin: 0 ${({ theme }) => theme.space.sm};
        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 11px;
            /* 말줄임표 */
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .info {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: gray;

            & + & {
                margin-top: 3px;
            }
            span {
                margin-left: 3px;
            }
        }
    }
    .list-etc {
        .count {
            display: inline-block;
            text-align: center;
            width: 32px;
            height: 32px;
            line-height: 32px;
            border-radius: 50%;
            font-size: 21px;
            font-weight: bold;
            color: #fff;
            background: ${({ theme }) => theme.color.primary};
        }
    }
`;
