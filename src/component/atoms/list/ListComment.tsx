import styled from 'styled-components';

export const ListComment = styled.div`
    padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
    border-radius: ${({ theme }) => theme.space.xs};
    background: ${({ theme }) => theme.color.primaryBg};

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
            color: ${({ theme }) => theme.color.white};
        }
        .info {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: ${({ theme }) => theme.color.gray3};

            & + & {
                margin-top: 4px;
            }
        }
    }

    .comment-input {
        display: none;
    }
    .comment-list {
        margin-top: ${({ theme }) => theme.space.md};
        border-radius: ${({ theme }) => theme.space.xs};
        background: ${({ theme }) => theme.color.white};

        &__item {
            padding: ${({ theme }) => theme.space.sm};
        }
    }
`;
