import styled, { css } from 'styled-components';

export const BorderBox = styled.div`
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid ${({ theme }) => theme.color.primary};
`;

export const FlexBox = styled.div<any>`
    display: flex;
    width: 100%;

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

export const BaseBox = styled.div`
    max-width: 360px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.space.md} 20px;
`;
