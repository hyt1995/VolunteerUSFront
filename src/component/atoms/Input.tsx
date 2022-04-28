import styled from 'styled-components';

const Input = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

export default Input;
