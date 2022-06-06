import styled, { css } from 'styled-components';

type StyleType = {
    fixed?: boolean;
    absolute?: boolean;
    top?: [string, number];
    left?: [string, number];
    right?: [string, number];
    bottom?: [string, number];
    center?: boolean;
    bgColor?: boolean;
    mask?: boolean;
    blur?: boolean;
};

export const PositionBox = styled.div<StyleType>`
    position: absolute;
    z-index: 99;
    width: 100%;

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
        props.mask &&
        css`
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
        `}
    ${(props) =>
        props.blur &&
        css`
            backdrop-filter: blur(9px);
        `}
    ${(props) =>
        props.center &&
        css`
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}
    ${(props) =>
        props.bgColor &&
        css`
            ${({ theme }) => {
                const selected = props.bgColor ? theme.color[props.bgColor] : null;
                return css`
                    background: ${selected};
                    &:hover {
                        background: (darken, ${selected});
                    }
                `;
            }}
        `}
        
    top: constant(safe-area-inset-right);
    top: env(safe-area-inset-right);
    bottom: constant(safe-area-inset-right);
    bottom: env(safe-area-inset-right);
    left: constant(safe-area-inset-right);
    left: env(safe-area-inset-right);
    right: constant(safe-area-inset-right);
    right: env(safe-area-inset-right);
`;
