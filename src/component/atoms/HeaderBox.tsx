import styled, { css } from 'styled-components';

export const HeaderBlock = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74px;
    box-shadow: 0px 6px 25px rgba(30, 45, 74, 0.1);

    .logo {
        font-size: 18px;
        color: ${({ theme }) => theme.color.gray3};
    }
`;

export const LeftBtns = styled.div`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
`;

export const RightBtns = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);

    .btn-header-menu {
        display: flex;
        align-items: center;

        span {
            margin-left: ${({ theme }) => theme.space.xs};
            font-size: 16px;
            color: ${({ theme }) => theme.color.point};
        }
    }
`;
