import styled, { css } from 'styled-components';

type props = {
    lg?: boolean;
};

const Input = styled.input<props>`
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

export default Input;
