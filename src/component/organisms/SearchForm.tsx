import { useRef, ChangeEvent } from 'react';
import { Button, Input, Error, Select, BaseBox, CheckBox, BorderBox, FlexBox, SubTitle, Title, List } from '../atoms';
import { DatePicker, DropDown } from '../molecule';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type propsType = {
    form: {
        city: string;
        detail: string;
        date: string;
        keyword: string;
        target: string;
    };
    select: {
        city: string[];
        detail: string[];
    };
    onChangeCity: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChangeDetail: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChangeDate: (date: any) => void;
    onSubmit?: (e: ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    onClick?: any;
};

const SearchForm = ({ form, select, onChangeCity, onChangeDetail, onChangeDate, onSubmit, error, onClick }: propsType) => {
    const datePickerRef = useRef<HTMLInputElement | null>(null);
    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <Swiper
                className="mySwiper"
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <BaseBox>
                <Title>봉사 조회하기</Title>
                <BorderBox>
                    <FlexBox>
                        <SubTitle>봉사 지역</SubTitle>
                        <FlexBox column>
                            <DropDown options={select.city} onChange={onChangeCity} />
                            <DropDown options={select.detail} onChange={onChangeDetail} />
                            <DropDown options={select.detail} onChange={onChangeDetail} />
                        </FlexBox>
                    </FlexBox>

                    <FlexBox>
                        <SubTitle>시작 날짜</SubTitle>
                        <FlexBox>
                            <DatePicker onChange={onChangeDate} />
                        </FlexBox>
                    </FlexBox>

                    <FlexBox>
                        <SubTitle>봉사 제목</SubTitle>
                        <Input id="title" placeholder="제목 키워드를 입력해주세요" />
                    </FlexBox>

                    <FlexBox>
                        <SubTitle style={{ marginTop: '3px' }}>모집 대상</SubTitle>
                        <FlexBox style={{ justifyContent: 'space-between' }}>
                            <CheckBox>
                                <input id="group-1" type="checkbox" />
                                <label htmlFor="group-1">
                                    <span>성인</span>
                                </label>
                            </CheckBox>
                            <CheckBox>
                                <input id="group-2" type="checkbox" />
                                <label htmlFor="group-2">
                                    <span>청소년</span>
                                </label>
                            </CheckBox>
                            <CheckBox>
                                <input id="group-3" type="checkbox" />
                                <label htmlFor="group-3">
                                    <span>그룹</span>
                                </label>
                            </CheckBox>
                        </FlexBox>
                    </FlexBox>
                </BorderBox>
                <Button lg fullWidth bgColor="primary" style={{ borderRadius: 0 }}>
                    검색
                </Button>
            </BaseBox>

            <hr />

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
                <List>
                    <div className="list-image">
                        <img src="" alt="" />
                    </div>
                    <div className="list-info">
                        <p className="title">
                            성동글로벌 에코빙고 봉사활동 동활사봉 고빙코에성동글로벌 에코빙고 봉사활동 동활사봉 고빙코에
                        </p>
                        <div className="info">
                            <Image src="/images/icon/watch.svg" alt="icon" width={16} height={16} />
                            <span>3. 29일 | 9 - 18시 까지</span>
                        </div>
                        <div className="info">
                            <Image src="/images/icon/location.svg" alt="icon" width={16} height={16} />
                            <span>성동글로벌</span>
                        </div>
                    </div>
                    <div className="list-etc">
                        <span className="count">3</span>
                    </div>
                </List>
            </BaseBox>
        </>
    );
};

export default SearchForm;
