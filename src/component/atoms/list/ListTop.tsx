import styled from 'styled-components';

export const ListTop = styled.div`
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
                margin-left: 3px;

                &.place {
                    font-weight: bold;
                    color: ${({ theme }) => theme.color.point};
                }
            }
        }
    }
`;
