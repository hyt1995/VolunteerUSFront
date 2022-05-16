import styled from 'styled-components';

export const LeftNavi = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    & > div {
        position: fixed;
        top: 0;
        width: 80%;
        max-width: 264px;
        height: 100%;
        background: ${({ theme }) => theme.color.primary};
        box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
    }
    &:not(:target) {
        opacity: 0;
        z-index: -1;
        transition: all 1s;

        & > div {
            left: -100%;
            transition: left 1.3s;
        }
    }
    &:target {
        opacity: 1;
        z-index: 100;
        transition: all 0.6s;

        & > div {
            left: 0;
            transition: left 1.3s;
        }
    }
`;
