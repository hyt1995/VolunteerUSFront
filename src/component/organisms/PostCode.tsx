import Modal from 'component/molecule/Modal';
import DaumPostcode from 'react-daum-postcode';

type propsType = {
    visible: boolean;
    handleComplete: (data: any) => void;
};

const PostCode = ({ visible, handleComplete }: propsType) => {
    if (!visible) {
        return null;
    }

    return (
        <Modal>
            <DaumPostcode onComplete={handleComplete} />
        </Modal>
    );
};

export default PostCode;
