import styled, { css } from 'styled-components';

export const BgBox = styled.div<any>`
    position: relative;
    background: ${({ theme }) => theme.color.grayWhiteBg};

    ${(props) =>
        props.bgColor &&
        css`
            ${({ theme }) => {
                const selected = props.bgColor ? theme.color[props.bgColor] : null;
                return css`
                    background: ${selected} !important;
                `;
            }}
        `};
`;

export const ShadowBox = styled.div`
    position: relative;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.08));
`;

export const BorderBox = styled.div`
    position: relative;
    padding: ${({ theme }) => theme.space.sm};
    border-radius: ${({ theme }) => theme.space.xs};
    border: 1px solid ${({ theme }) => theme.color.primary};
    background: #fff;
`;

export const FlexBox = styled.div<any>`
    position: relative;
    display: flex;
    width: 100%;

    ${(props) =>
        props.mg &&
        css`
            margin: ${props.mg};
        `}
    ${(props) =>
        props.column &&
        css`
            flex-direction: column;
        `}
    ${(props) =>
        props.align &&
        css`
            align-items: ${props.align};
        `}
    ${(props) =>
        props.justify &&
        css`
            justify-content: ${props.justify};
        `}

    & + & {
        margin-top: ${({ theme }) => theme.space.sm};
    }
`;

export const BaseBox = styled.div<any>`
    position: relative;
    max-width: 360px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.space.md} 20px;

    ${(props) =>
        props.pd &&
        css`
            padding: ${props.pd};
        `}
    ${(props) =>
        props.bgColor &&
        css`
            ${({ theme }) => {
                const selected = props.bgColor ? theme.color[props.bgColor] : null;
                return css`
                    background: ${selected} !important;
                `;
            }}
        `}
`;
