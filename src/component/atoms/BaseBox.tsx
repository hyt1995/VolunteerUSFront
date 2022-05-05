import styled from 'styled-components';

const BaseBox = styled.div`
    max-width: 360px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.space.md} 20px;
`;

export default BaseBox;
