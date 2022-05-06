import React, { useRef, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import styled, { css } from 'styled-components';
import { Button, Input, BaseBox, CheckBox } from '../atoms';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DropDown from 'component/molecule/DropDown';

const BorderBox = styled.div`
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid ${({ theme }) => theme.color.primary};
`;

const FlexBox = styled.div`
    display: flex;
    width: 100%;

    ${(props) =>
        props.column &&
        css`
            flex-direction: column;
        `}
    ${(props) =>
        props.align &&
        css`
            align-items: ${props.align};
        `}
    ${(props) =>
        props.justify &&
        css`
            justify-content: ${props.justify};
        `}

    & + & {
        margin-top: ${({ theme }) => theme.space.sm};
    }
`;

const Title = styled.h2`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray3};
    margin-bottom: ${({ theme }) => theme.space.md};
`;

const SubTitle = styled.h3`
    white-space: nowrap;
    margin-top: ${({ theme }) => theme.space.sm};
    margin-right: ${({ theme }) => theme.space.sm};
    color: ${({ theme }) => theme.color.gray3};
    font-size: 12px;
    font-weight: 500;
`;

const List = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm} 0;
    border-top: 1px solid ${({ theme }) => theme.color.gray1};

    .list-image {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        background: #6681aa;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .list-info {
        flex: 2;
        margin: 0 ${({ theme }) => theme.space.sm};

        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 11px;
            /* 말줄임표 */
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .info {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: gray2;

            & + & {
                margin-top: 3px;
            }
            span {
                margin-left: ${({ theme }) => theme.space.xxs};
            }
        }
    }
    .list-etc {
        .count {
            display: inline-block;
            text-align: center;
            width: 32px;
            height: 32px;
            line-height: 32px;
            border-radius: 50%;
            font-size: 21px;
            font-weight: bold;
            color: #fff;
            background: ${({ theme }) => theme.color.primary};
        }
    }
`;

const SearchForm = ({
    form,
    select,
    onChange,
    onChangeCity,
    onChangeDetail,
    onChangeDate,
    handleCheck,
    onSubmit,
    error,
    onClick
}: propsType) => {
    const datePickerRef = useRef();
    const [props, setProps] = useState({
        value: new Date(),
        format: 'YYYY.MM.DD',
        onChange: (date) => console.log(date.format())
    });
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

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
                            <Button
                                bgColor="gray1"
                                style={{ padding: '9px', marginRight: '13px' }}
                                onClick={() => datePickerRef.current.openCalendar()}
                            >
                                <Image src="/images/icon/Calendar.svg" alt="icon" width={24} height={24} />
                            </Button>

                            <DatePicker
                                className="custom-picker"
                                {...props}
                                onPropsChange={setProps}
                                weekDays={weekDays}
                                months={months}
                                arrow={false}
                                calendarPosition="bottom-center"
                                ref={datePickerRef}
                            >
                                <Button className="close" text onClick={() => datePickerRef.current.closeCalendar()}>
                                    <Image src="/images/icon/x.svg" alt="icon" width={16} height={16} />
                                </Button>
                            </DatePicker>
                        </FlexBox>
                    </FlexBox>

                    <FlexBox>
                        <SubTitle>봉사 제목</SubTitle>
                        <Input
                            name="keyword"
                            value={form.keyword}
                            onChange={onChange}
                            id="title"
                            placeholder="제목 키워드를 입력해주세요"
                        />
                    </FlexBox>

                    <FlexBox>
                        <SubTitle style={{ marginTop: '3px' }}>모집 대상</SubTitle>
                        <FlexBox style={{ justifyContent: 'space-between' }}>
                            <CheckBox id="group-1" name="성인" onChange={handleCheck} />
                            <CheckBox id="group-2" name="청소년" onChange={handleCheck} />
                            <CheckBox id="group-3" name="그룹" onChange={handleCheck} />
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
