import styled, { css } from 'styled-components';

export const Chart = styled.div<any>`
    text-align: center;
    width: 320px;
    margin: 0 auto;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    background: #fff;

    &.clear {
        filter: blur(0);
        -webkit-filter: blur(0);
    }
    .chart-box {
        padding: ${({ theme }) => theme.space.md};
        filter: blur(7px);
        -webkit-filter: blur(7px);

        &:hover {
            filter: blur(0);
            -webkit-filter: blur(0);
        }
        &__title {
            display: inline-flex;
            align-items: center;
            height: 32px;
            margin-bottom: ${({ theme }) => theme.space.sm};
            padding: 0 ${({ theme }) => theme.space.sm};
            font-size: 12px;
            border-radius: 30px;
            background: ${({ theme }) => theme.color.gray3};
            color: #fff;
        }
    }
    .chart-canvas {
        width: 80% !important;
        height: 80% !important;
        margin: 0 auto;

        &.type-bar {
            height: 300px !important;
        }
    }
    & + & {
        margin: 30px auto 0;
    }
`;
