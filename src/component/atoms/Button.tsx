import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type buttonStyleType = {
    color?: string;
    bgColor?: string;
    fullWidth?: boolean;
    fontSize?: string;
};

const buttonStyle = css<buttonStyleType>`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${({ theme }) => theme.color.gray[8]};
    &:hover {
        background: ${({ theme }) => theme.color.gray[6]};
    }
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
            height: 55px;
            font-size: 1rem;
        `}
    ${(props) =>
        props.bgColor &&
        css`
            ${({ theme, bgColor }) => {
                const selected = theme.color[bgColor];
                return css`
                    background: ${selected};
                    &:hover {
                        background: (darken, ${selected});
                    }
                `;
            }}
        `}
    ${(props) =>
        props.color &&
        css`
            ${({ theme, color }) => {
                const selected = theme.color[color];
                return css`
                    color: ${selected} !important;
                `;
            }}
        `}
    &:disabled {
        background: ${({ theme }) => theme.color.gray[3]};
        color: ${({ theme }) => theme.color.gray[5]};
        cursor: not-allowed;
    }

    &.text {
        padding: 0;
        background: none;
        font-size: ${(props) => props.fontSize || '12px'};
        color: ${({ theme }) => theme.color.gray3};
    }
    &.icon {
        img {
            margin-right: 15px;
        }
    }
    &.outline {
        background: #fff;
        color: ${({ theme }) => theme.color.primary};
        border: 2px solid ${({ theme }) => theme.color.primary};
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

export const Button = (props: any) => {
    return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;
