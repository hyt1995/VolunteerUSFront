import styled from 'styled-components';

const Input = styled.input`
    transition: all 0.3s ease;
    width: 100%;
    height: 55px;
    padding: 13px;
    font-size: 1rem;
    border: none;
    border: 1px solid ${({ theme }) => theme.color.gray1};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.color.primary};

        + label {
            color: ${({ theme }) => theme.color.primary};
        }
    }
`;

export default Input;
