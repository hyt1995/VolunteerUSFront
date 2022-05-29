import { BgBox } from 'component/atoms';
import { Slide } from 'component/molecule';
import { VolunteerListForm, SearchForm, BaseHeader } from 'component/organisms';

const Index = () => {
    return (
        <>
            <BaseHeader />
            <Slide />
            <hr />
            <BgBox>
                <SearchForm />
            </BgBox>
            <BgBox bgColor="blueSemi">
                <VolunteerListForm />
            </BgBox>
        </>
    );
};

export default Index;
