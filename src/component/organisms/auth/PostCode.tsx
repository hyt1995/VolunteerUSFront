import React from 'react';
import DaumPostcode from 'react-daum-postcode';

type props = {
    onComplete: (data: any) => void;
    visible: boolean;
};

const PostCode = ({ onComplete, visible }: props) => {
    return <DaumPostcode onComplete={onComplete} />;
};

export default PostCode;
