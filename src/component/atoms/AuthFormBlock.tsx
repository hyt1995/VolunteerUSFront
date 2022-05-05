import styled from 'styled-components';

const AuthFormBlock = styled.div`
    h1 {
        text-align: center;
        margin-bottom: ${({ theme }) => theme.space.xlg};
    }

    .title {
        font-size: 24px;
        color: ${({ theme }) => theme.color.gray3};
    }
    .subtitle {
        font-size: 13px;
        color: ${({ theme }) => theme.color.gray2};
    }

    .input-box {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        width: 100%;

        & + .input-box {
            margin-top: ${({ theme }) => theme.space.sm};
        }

        label {
            display: inline-block;
            margin-bottom: ${({ theme }) => theme.space.xxs};
            font-size: 12px;
            color: ${({ theme }) => theme.color.gray3};

            i {
                color: ${({ theme }) => theme.color.error};
            }
        }

        button {
            position: absolute;
            top: 50%;
            right: ${({ theme }) => theme.space.sm};
            transform: translateY(-10%);
        }
    }

    .auth-another {
        display: flex;
        justify-content: space-between;
        margin: 34px 0;
    }

    hr {
        &.or {
            border: none;
            position: relative;
            height: 19px;
            margin: ${({ theme }) => theme.space.sm} 0;
            &:before {
                content: 'OR';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1;
                padding: 0 18px;
                background: #fff;
                font-size: 14px;
                color: ${({ theme }) => theme.color.gray1};
            }
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
            }
        }
    }
`;
export default AuthFormBlock;
