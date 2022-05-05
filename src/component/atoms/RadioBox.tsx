import styled from 'styled-components';

const RadioBox = styled.div`
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
                top: -2px;
                left: 0;
                width: 20px;
                height: 20px;
                text-align: center;
                background: #fff;
                border: 1px solid ${({ theme }) => theme.color.primary};
                box-sizing: border-box;
                border-radius: 50%;
            }
        }
        &:checked {
            & + label:after {
                content: '';
                position: absolute;
                top: 1px;
                left: 3px;
                width: 14px;
                height: 14px;
                background-color: ${({ theme }) => theme.color.primary};
                border-radius: 50%;
            }
        }
    }
`;

export default RadioBox;
