import styled, { css } from 'styled-components';

const Comment = styled.div<any>`
    .comment-input {
        padding: ${({ theme }) => theme.space.md};
        background: ${({ theme }) => theme.color.blueSemi};
    }
    .comment-list {
        $item: &;

        &__item {
            display: flex;
            justify-content: space-between;
            padding: ${({ theme }) => theme.space.md};

            .comment {
                &-info {
                    display: flex;
                    align-items: center;

                    span {
                        margin-right: 5px;
                    }
                }
                &-text {
                    padding-right: 5px;
                    margin-top: ${({ theme }) => theme.space.xs};
                    color: ${({ theme }) => theme.color.gray3};
                    word-break: break-word;
                }
                &-more {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;

                    .more-box {
                        position: relative;

                        &__list {
                            background: #fff;
                            color: ${({ theme }) => theme.color.gray2};
                            border: 1px solid ${({ theme }) => theme.color.gray1};
                            box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);

                            li {
                                text-align: center;
                                position: relative;
                                width: 70px;
                                height: 43px;
                                line-height: 43px;

                                & + li {
                                    &::before {
                                        content: '';
                                        position: absolute;
                                        top: 0;
                                        left: 50%;
                                        transform: translate(-50%);
                                        width: 80%;
                                        height: 2px;
                                        background: ${({ theme }) => theme.color.gray1};
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .name {
                font-weight: bold;
                font-size: 14px;
                color: ${({ theme }) => theme.color.gray3};
            }
            .group {
                font-size: 12px;
                font-weight: 500;
                color: ${({ theme }) => theme.color.primary};
            }
            .time {
                font-size: 10px;
                font-weight: 500;
                color: ${({ theme }) => theme.color.gray2};
            }
        }
    }
    .comment-list__item + .comment-list__item {
        border-top: 1px solid ${({ theme }) => theme.color.gray1};
    }
`;

export default Comment;
