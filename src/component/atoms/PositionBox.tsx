import styled, { css } from 'styled-components';

type StyleType = {
    fixed?: boolean;
    absolute?: boolean;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    center?: boolean;
};

export const PositionBox = styled.div<StyleType>`
    position: absolute;

    ${(props) =>
        props.fixed &&
        css`
            position: fixed;
        `}
    ${(props) =>
        props.top &&
        css`
            top: ${props.top};
        `}
    ${(props) =>
        props.left &&
        css`
            left: ${props.left};
        `}
    ${(props) =>
        props.right &&
        css`
            right: ${props.right};
        `}
    ${(props) =>
        props.bottom &&
        css`
            bottom: ${props.bottom};
        `}
    ${(props) =>
        props.center &&
        css`
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}
`;
