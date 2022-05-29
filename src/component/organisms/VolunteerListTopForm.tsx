import { BaseBox, BgBox, FlexBox, Title } from '../atoms';
import { ListTopItem } from '../molecule';

const VolunteerListForm = () => {
    return (
        <>
            <BgBox>
                <BaseBox>
                    <FlexBox align="flex-start" justify="space-between">
                        <Title mb="0">
                            🔥 봉사 그룹 <span style={{ color: '#3282FA' }}>Top 10</span>
                        </Title>
                    </FlexBox>
                </BaseBox>
            </BgBox>
            <BgBox bgColor={'gray3'}>
                <BaseBox>
                    <ListTopItem no={1} title="꿈꾸는 봉사단" period="20" address="강남구" top3 />
                </BaseBox>
            </BgBox>
            <BgBox bgColor={'blueSemi'}>
                <BaseBox>
                    <ListTopItem no={2} title="꿈꾸는 봉사단" period="20" address="강남구" />
                </BaseBox>
            </BgBox>
        </>
    );
};

export default VolunteerListForm;
