import styled, { css } from 'styled-components';

export const Title = styled.h2`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray3};
    margin-bottom: ${({ theme }) => theme.space.md};
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
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `}
`;
