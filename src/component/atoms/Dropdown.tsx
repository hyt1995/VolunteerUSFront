import styled from 'styled-components';

export const DropdownContainer = styled.div`
    width: 400px;

    &:hover {
        cursor: pointer;
    }
`;

export const DropdownBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 14px;
    border: 2px solid #d2d2d2;
`;

export const DropdownSelect = styled.p`
    font-weight: bold;
`;

export const DropdownMenu = styled.ul<any>`
    display: ${(props) => (props.active ? `block` : `none`)};
    width: 400px;
    background-color: white;
    position: absolute;
    border: 2px solid #f4acbb;
`;

export const DropdownItemContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 9px 14px;
    border-bottom: 2px solid #d2d2d2;
    border-top: none;

    &:last-child {
        border-bottom: none;
    }
`;
