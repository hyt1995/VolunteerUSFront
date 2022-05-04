import { useKakao } from 'hooks/auth';

const Kakao = () => {
    useKakao();
    return <p>hi</p>;
};

export default Kakao;
