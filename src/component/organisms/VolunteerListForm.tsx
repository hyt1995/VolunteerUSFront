import { BaseBox, BgBox, Button, FlexBox, Title } from '../atoms';
import { ListItem } from '../molecule';
import useVolunteerList from 'hooks/main/useVolunteerList';

const VolunteerListForm = () => {
    const { data, fetchMoreEl } = useVolunteerList();

    return (
        <>
            <BgBox bgColor="gray3">
                <BaseBox>
                    <FlexBox align="flex-start" justify="space-between">
                        <Title mb="0" color="#fff">
                            <span style={{ marginRight: '5px' }}>👀</span> 봉사 활동 목록
                        </Title>
                        <div>
                            <Button text color="white" style={{ marginRight: '21px' }}>
                                기본순
                            </Button>
                            <Button text color="gray2">
                                인기순
                            </Button>
                        </div>
                    </FlexBox>
                </BaseBox>
            </BgBox>
            <BaseBox>
                <ListItem title="111111111111111111111111111111111111111111111111111111111111" period="222222" address="3333" />
                {data &&
                    data.map((value: any) => {
                        return (
                            <ListItem
                                title={value.progrmTitle}
                                period={value.progrmEndDate}
                                address={value.postAdres}
                                key={value.progrmTitle}
                                count={3}
                            />
                        );
                    })}
            </BaseBox>
            <div ref={fetchMoreEl} />
        </>
    );
};

export default VolunteerListForm;
