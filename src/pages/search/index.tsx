import { Slide } from 'component/molecule';
import { VolunteerListForm, SearchForm, BaseHeader } from 'component/organisms';

const Index = () => {
    return (
        <>
            <BaseHeader />
            <Slide />
            <hr />
            <SearchForm />
            <VolunteerListForm />
        </>
    );
};

export default Index;
