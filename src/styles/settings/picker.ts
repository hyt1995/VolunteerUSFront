import { css } from 'styled-components';

const resetDatePicker = css`
    .rmdp-container {
        width: 100%;
    }

    .rmdp-input {
        width: 100%;
        height: 42px !important;
        border-color: ${({ theme }) => theme.color.gray1} !important;
    }
`;

export default resetDatePicker;
