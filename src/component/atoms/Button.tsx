import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type buttonStyleType = {
    color?: string;
    bgColor?: string;
    fullWidth?: boolean;
    fontSize?: string;
    lg?: boolean;
    text?: boolean;
    outline?: boolean;
};

const buttonStyle = css<buttonStyleType>`
    height: 42px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${({ theme }) => theme.color.gray[8]};

    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
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
    ${(props) =>
        props.outline &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    color: ${selected};
                    border-color: ${selected};
                    border-width: ${props.lg ? '2px' : '1px'};
                    border-style: solid;
                    background: #fff;
                `;
            }}
        `}
    ${(props) =>
        props.color &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    color: ${selected} !important;
                `;
            }}
        `}
    ${(props) =>
        props.lg &&
        css`
            height: ${({ theme }) => theme.space.xlg};
        `}
    ${(props) =>
        props.text &&
        css`
            height: auto;
            padding: 0;
            background: none;
            font-size: ${props.fontSize || '12px'};
            color: ${({ theme }) => theme.color.gray3};

            &:hover {
                background: transparent;
            }
        `}
    &:disabled {
        background: ${({ theme }) => theme.color.gray[3]};
        color: ${({ theme }) => theme.color.gray[5]};
        cursor: not-allowed;
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
