import styled from 'styled-components';

/**
 * 셀렉트박스
 */
const List = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${({ theme }) => theme.color.gray[6]};
        text-decoration: None;
        &:hover {
            color: ${({ theme }) => theme.color.gray[9]};
        }
    }
`;

export default List;
