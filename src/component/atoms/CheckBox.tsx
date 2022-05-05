import styled from 'styled-components';

const Checkbox = styled.div`
    input[type='checkbox'] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;

        & + label {
            position: relative;
            padding-left: 26px;
            font-size: 14px;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: -2px;
                width: 20px;
                height: 20px;
                text-align: center;
                background: #fff;
                border: 1px solid ${({ theme }) => theme.color.primary};
                box-sizing: border-box;
                border-radius: 4px;
            }
        }
        &:checked {
            & + label:after {
                content: '';
                position: absolute;
                top: -2px;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: ${({ theme }) => theme.color.primary};
                background-image: url('/images/icon/check.svg');
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 4px;
            }
        }
    }
`;

export default Checkbox;
