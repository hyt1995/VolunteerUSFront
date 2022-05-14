import { Button, PositionBox } from 'component/atoms';
import { VolunteerListTopForm, TopSearchForm, BaseHeader } from 'component/organisms';

const Index = () => {
    return (
        <>
            <BaseHeader />
            <TopSearchForm />
            <hr />
            <VolunteerListTopForm />

            <PositionBox fixed bottom="21px" right="21px">
                <Button rounded style={{ width: '64px', height: '64px' }}>
                    <PositionBox center style={{ top: '43%' }}>
                        <p style={{ fontSize: '32px', fontWeight: '100', lineHeight: '1' }}>+</p>
                        <p style={{ fontSize: '12px' }}>생성</p>
                    </PositionBox>
                </Button>
            </PositionBox>
        </>
    );
};

export default Index;
