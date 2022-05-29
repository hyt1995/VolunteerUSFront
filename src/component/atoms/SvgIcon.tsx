import styled, { css } from 'styled-components';

type SvgProps = {
    color?: string;
    mr?: string;
};

const SvgIcon = styled.svg<SvgProps>`
    display: inline-flex;

    ${(props) =>
        props.color &&
        css`
            ${({ theme }) => {
                const selected = props.color ? theme.color[props.color] : null;
                return css`
                    fill: ${selected || 'currentColor'};
                `;
            }}
        `}
    ${(props) =>
        props.mr &&
        css`
            margin-right: ${props.mr}px;
        `};
`;

export default SvgIcon;
