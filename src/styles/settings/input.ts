import { css } from 'styled-components';

const resetInput = css`
    input {
        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
        &:-ms-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
        &::placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
    }

    textarea {
        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
        &:-ms-input-placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
        &::placeholder {
            color: ${({ theme }) => theme.color.gray2};
        }
    }
`;

export default resetInput;
