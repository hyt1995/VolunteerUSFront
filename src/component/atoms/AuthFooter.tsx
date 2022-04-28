import styled from 'styled-components';

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
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

export default Footer;
