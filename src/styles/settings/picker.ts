import { css } from 'styled-components';

const resetDatePicker = css`
    .rmdp-container {
        width: 100%;
    }

    .rmdp-input {
        text-align: center;
        width: 100%;
        height: 42px !important;
        border-color: ${({ theme }) => theme.color.gray1} !important;
    }

    .rmdp-week-day {
        color: ${({ theme }) => theme.color.gray3} !important;

        &:first-child {
            color: ${({ theme }) => theme.color.error} !important;
        }
        &:last-child {
            color: ${({ theme }) => theme.color.primary} !important;
        }
    }

    .rmdp-wrapper {
        padding-top: 30px;
    }
    .rmdp-left {
        left: 36px;
    }
    .rmdp-right {
        right: 36px;
    }
    .rmdp-arrow {
        width: 10px !important;
        height: 10px !important;
        border-color: ${({ theme }) => theme.color.gray2} !important;
    }
    .rmdp-arrow-container:hover {
        background-color: transparent !important;
        box-shadow: none !important;
    }
    .rmdp-header {
        font-size: 20px !important;
        color: ${({ theme }) => theme.color.gray3} !important;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
    }
`;

export default resetDatePicker;
