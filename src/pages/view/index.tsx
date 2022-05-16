import { Slide } from 'component/molecule';
import { Button, PositionBox } from 'component/atoms';
import { SubHeader, GroupView } from 'component/organisms';
import Image from 'next/image';

const isRight = false;

const Index = () => {
    return (
        <>
            <SubHeader title="꿈꾸는 봉사단">
                {!isRight ? (
                    <Button className="btn-header-menu" text>
                        <Image src="/images/icon/edit.svg" alt="icon" width={24} height={24} />
                    </Button>
                ) : (
                    <Button sm bgColor="primary">
                        완료
                    </Button>
                )}
            </SubHeader>
            <div style={{ position: 'relative' }}>
                <Slide />
                <PositionBox center>
                    <Button text>
                        <Image src="/images/icon/plus-circle.svg" alt="icon" width={48} height={48} />
                        <p style={{ fontSize: '14px' }}>이미지 추가하기</p>
                    </Button>
                </PositionBox>
            </div>
            <GroupView />
        </>
    );
};

export default Index;
