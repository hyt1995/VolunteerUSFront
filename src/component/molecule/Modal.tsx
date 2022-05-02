import { FullScreen, ModalBlock } from 'component/atoms';

type Props = {
    children: JSX.Element;
};

const Modal = ({ children }: Props) => (
    <FullScreen>
        <ModalBlock>{children}</ModalBlock>
    </FullScreen>
);

export default Modal;
