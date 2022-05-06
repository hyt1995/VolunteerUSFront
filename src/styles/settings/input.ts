import { css } from 'styled-components';

const resetInput = css`
    input {
        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
        &:-ms-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
        &::placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
    }

    textarea {
        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
        &:-ms-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
        &::placeholder {
            color: ${({ theme }) => theme.color.gray2};
            font-size: 14px;
        }
    }
`;

export default resetInput;
