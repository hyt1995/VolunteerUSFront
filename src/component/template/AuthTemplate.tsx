import styled from 'styled-components';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

/* 화면 전체를 채움 */

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-height: 600px) {
        justify-content: flex-start;
    }
`;

/* 흰색 박스 */
const Box = styled.div`
    padding: 0 20px;
    width: 100%;
    max-width: 360px;
    border-radius: 2px;

    @media (max-height: 600px) {
        padding: 50px 20px;
    }
`;

type Props = {
    children: JSX.Element;
};

const AuthTemplate = ({ children }: Props) => (
    <AuthTemplateBlock>
        <Box>{children}</Box>
    </AuthTemplateBlock>
);

export default AuthTemplate;
