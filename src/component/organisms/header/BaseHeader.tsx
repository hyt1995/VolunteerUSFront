import styled from 'styled-components';
import Link from 'next/link';
import { Button, HeaderBlock, LeftBtns, RightBtns } from '../../atoms';
import { LeftNavigation } from '../../molecule';
import Image from 'next/image';
import useProfile from 'hooks/user/useProfile';

const BaseHeader = ({ onChange, onSubmit, error, onClick }: any) => {
    const { name } = useProfile();
    return (
        <HeaderBlock>
            <LeftBtns>
                <Button className="btn-header-menu" text>
                    <a href="#nav" aria-label="Open Navigation">
                        <Image src="/images/icon/menu.svg" alt="icon" width={24} height={24} />
                    </a>
                </Button>
            </LeftBtns>

            <h1 className="logo">로고</h1>

            <RightBtns>
                {name ? (
                    <Button className="btn-header-menu" text>
                        <Image src="/images/icon/user-round.svg" alt="icon" width={23} height={23} />
                        <span>{name}</span>
                    </Button>
                ) : (
                    <Button sm bgColor="primary">
                        <Link href="login">로그인</Link>
                    </Button>
                )}
            </RightBtns>

            <LeftNavigation />
        </HeaderBlock>
    );
};

export default BaseHeader;
