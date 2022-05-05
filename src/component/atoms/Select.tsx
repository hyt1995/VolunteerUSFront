import styled from 'styled-components';

/**
 * 셀렉트박스
 */
const Select = styled.select`
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 42px;
    background: url('/images/icon/arrow-down.svg') calc(100% - 5px) center no-repeat;
    background-size: 20px;
    padding: 0 30px 0 ${({ theme }) => theme.space.sm};
    border-radius: 3px;
    border-color: ${({ theme }) => theme.color.gray1};
    outline: 0 none;

    &::-ms-expand {
        display: none;
    }
    & + & {
        margin-top: ${({ theme }) => theme.space.sm};
    }
    option {
        background: #fff;
        color: ${({ theme }) => theme.color.gray2};
    }
`;

export default Select;
