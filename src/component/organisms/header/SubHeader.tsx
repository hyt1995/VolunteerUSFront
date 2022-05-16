import { Button, HeaderBlock, LeftBtns, RightBtns } from '../../atoms';
import Image from 'next/image';

const SubHeader = (props: any) => (
    <HeaderBlock>
        <LeftBtns>
            <Button className="btn-back" text>
                <Image src="/images/icon/back.svg" alt="icon" width={24} height={24} />
            </Button>
        </LeftBtns>

        <h1 className="logo">{props.title}</h1>

        <RightBtns>{props.children}</RightBtns>
    </HeaderBlock>
);

export default SubHeader;
