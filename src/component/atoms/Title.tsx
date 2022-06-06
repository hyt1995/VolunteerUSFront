import styled, { css } from 'styled-components';

export const Title = styled.h2`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray3};
    margin-bottom: ${({ theme }) => theme.space.md};

    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `}
    ${(props) =>
        props.mb &&
        css`
            margin-bottom: ${props.mb}px !important;
        `}
    ${(props) =>
        props.color &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    color: ${selected};
                `;
            }}
        `}
`;

export const SubTitle = styled.h3<any>`
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: ${({ theme }) => theme.space.sm};
    margin-right: ${({ theme }) => theme.space.sm};
    color: ${({ theme }) => theme.color.gray3};
    font-size: 12px;
    font-weight: 500;

    ${(props) =>
        props.display &&
        css`
            display: ${props.display};
        `}
    ${(props) =>
        props.alignItems &&
        css`
            align-items: ${props.alignItems};
        `}
    ${(props) =>
        props.color &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    color: ${selected};
                `;
            }}
        `}
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize}px;
            ${props.fontSize > 14 && 'line-height:' + props.fontSize * 1.3 + 'px'};
        `}
    ${(props) =>
        props.mt &&
        css`
            margin-top: ${props.mt}px !important;
        `}
    ${(props) =>
        props.mr &&
        css`
            margin-right: ${props.mr}px !important;
        `}
`;

export const TextContent = styled.div<any>`
    color: ${({ theme }) => theme.color.gray3};
    font-size: 12px;
    font-weight: 700;

    ${(props) =>
        props.display &&
        css`
            display: ${props.display};
        `}
    ${(props) =>
        props.color &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    color: ${selected};
                `;
            }}
        `}
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize}px;
            ${props.fontSize > 14 && 'line-height:' + props.fontSize * 1.3 + 'px'};
        `}
    ${(props) =>
        props.mt &&
        css`
            margin-top: ${props.mt}px !important;
        `}
`;
