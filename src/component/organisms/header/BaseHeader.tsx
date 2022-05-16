import styled from 'styled-components';
import { Button, HeaderBlock, LeftBtns, RightBtns } from '../../atoms';
import { LeftNavigation } from '../../molecule';
import Image from 'next/image';

const login = false;

const BaseHeader = ({ onChange, onSubmit, error, onClick }: any) => (
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
            {!login ? (
                <Button className="btn-header-menu" text>
                    <Image src="/images/icon/user-round.svg" alt="icon" width={23} height={23} />
                    <span>땡땡님</span>
                </Button>
            ) : (
                <Button sm bgColor="primary">
                    로그인
                </Button>
            )}
        </RightBtns>

        <LeftNavigation />
    </HeaderBlock>
);

export default BaseHeader;
