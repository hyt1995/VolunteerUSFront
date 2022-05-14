import { BaseBox, FlexBox, Title } from '../atoms';
import { ListTopItem } from '../molecule';

const VolunteerListForm = () => {
    return (
        <>
            <BaseBox>
                <FlexBox align="flex-start" justify="space-between">
                    <Title>봉사 그룹 Top 10</Title>
                </FlexBox>

                <ListTopItem title="꿈꾸는 봉사단" period="20" address="강남구" />
            </BaseBox>
        </>
    );
};

export default VolunteerListForm;
