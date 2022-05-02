import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useKakao = () => {
    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
        if (code) {
            console.log(code);
        }
    }, [code]);
};

export default useKakao;
