import styled from 'styled-components';

export const LeftNaviCont = styled.div`
    .top-area {
        padding: ${({ theme }) => theme.space.md};

        h2 {
            margin-top: 100px;
            font-size: 16px;
            font-weight: 400;
            color: #fff;

            strong {
                margin-left: ${({ theme }) => theme.space.xs};
            }
        }
        .btn-close {
            position: absolute;
            top: ${({ theme }) => theme.space.md};
            left: ${({ theme }) => theme.space.md};
        }
    }
    .middle-area {
        height: calc(100% - 283px);
        background: #fff;
        overflow-y: auto;

        .gnb-box {
            li {
                display: flex;
                align-items: center;
                height: 53px;
                padding: 0 ${({ theme }) => theme.space.md};
                border-bottom: 1px solid ${({ theme }) => theme.color.border};
            }
            span {
                margin-left: ${({ theme }) => theme.space.xs};
            }
        }
    }
    .bottom-area {
        text-align: center;
        padding: ${({ theme }) => theme.space.md};
        font-size: 14px;
        color: #fff;
    }
`;
