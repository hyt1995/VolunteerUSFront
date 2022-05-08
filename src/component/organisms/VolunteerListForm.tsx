import { BaseBox, Button, FlexBox, Title } from '../atoms';
import { ListItem } from '../molecule';
import useVolunteerList from 'hooks/main/useVolunteerList';

const VolunteerListForm = () => {
    const { data, fetchMoreEl } = useVolunteerList();

    return (
        <>
            <BaseBox>
                <FlexBox align="flex-start" justify="space-between">
                    <Title>봉사 활동 목록</Title>
                    <div>
                        <Button text color="gray3" style={{ marginRight: '21px' }}>
                            가까운순
                        </Button>
                        <Button text color="gray2">
                            인기순
                        </Button>
                    </div>
                </FlexBox>
                {data &&
                    data.map((value: any) => {
                        return (
                            <ListItem
                                title={value.progrmTitle}
                                period={value.progrmEndDate}
                                address={value.postAdres}
                                key={value.progrmTitle}
                            />
                        );
                    })}
            </BaseBox>
            <div ref={fetchMoreEl} />
        </>
    );
};

export default VolunteerListForm;
