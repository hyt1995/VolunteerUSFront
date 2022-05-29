import styled, { css } from 'styled-components';
import { ChangeEvent } from 'react';

type InputProps = {
    lg?: boolean;
};

export const Input = styled.input<InputProps>`
    transition: all 0.3s ease;
    width: 100%;
    height: 43px;
    padding: ${({ theme }) => theme.space.sm};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.color.gray1};
    border-radius: 3px;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.color.primary};

        + label {
            color: ${({ theme }) => theme.color.primary};
        }
    }
    ${(props) =>
        props.lg &&
        css`
            height: ${({ theme }) => theme.space.xlg};

            &:focus {
                border-width: 2px;
            }
        `}
`;

type TextareaProps = {
    height?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
};

export const Textarea = styled.textarea<TextareaProps>`
    width: 100%;
    min-height: 80px;
    padding: ${({ theme }) => theme.space.sm};
    font-size: 1rem;
    border-radius: ${({ theme }) => theme.space.xs};
    border: none;
    outline: none;
    resize: none;

    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `}
`;
