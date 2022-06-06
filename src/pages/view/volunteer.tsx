import { PositionBox, Button } from 'component/atoms';
import { SubHeader, VolunteerDetail } from 'component/organisms';
import { IconPlusCircle } from 'asset/icon';

const Index = () => {
    return (
        <>
            <SubHeader title="꿈꾸는 봉사단"></SubHeader>
            <VolunteerDetail />
            <PositionBox fixed bottom="0" style={{ padding: '20px' }}>
                <Button bgColor="primary" fullWidth lg>
                    그룹 신청하기
                </Button>
            </PositionBox>
        </>
    );
};

export default Index;
