import styled from 'styled-components';

const ModalBlock = styled.div`
    width: 400px;
    background: white;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;

export default ModalBlock;
