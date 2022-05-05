import styled from 'styled-components';
import { Button } from '../atoms';
import Image from 'next/image';

const HeaderBlock = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74px;

    .logo {
        font-size: 16px;
    }
`;

const LeftBtns = styled.div`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
`;

const RightBtns = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
`;

const BaseHeader = ({ onChange, onSubmit, error, onClick }: any) => (
    <HeaderBlock>
        <LeftBtns>
            <Button className="btn-header-menu" text>
                <Image src="/images/icon/menu.svg" alt="icon" width={24} height={24} />
            </Button>
        </LeftBtns>

        <h1 className="logo">로고</h1>

        <RightBtns>
            <Button className="btn-header-menu" text>
                <Image src="/images/icon/user-round.svg" alt="icon" width={32} height={32} />
            </Button>
        </RightBtns>
    </HeaderBlock>
);

export default BaseHeader;
