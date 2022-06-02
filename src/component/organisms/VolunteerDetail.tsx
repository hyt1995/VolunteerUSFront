import { BaseBox, BgBox, Title, SubTitle, TextContent, FlexBox, Button, Chart, PositionBox } from '../atoms';
import { Tab } from '../molecule';
import { Bar, Pie } from 'react-chartjs-2';
import { IconChart, IconPersonCheck, IconLock } from 'asset/icon';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    // Title,
    Tooltip,
    Legend,
    PointElement,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement, //요기
    LineElement,
    // Title,
    Tooltip,
    Legend,
    ArcElement
);
const data = {
    labels: ['10대', '20~24', '24~29', '30~34', '34~39', '40대~'],
    datasets: [
        {
            type: 'bar',
            label: '',
            backgroundColor: ['#DBDFE5', '#147AD6', '#DBDFE5', '#DBDFE5', '#DBDFE5', '#DBDFE5'],
            data: [1, 10, 3, 4, 5, 6],
            borderRadius: 4
        }
    ]
};
const data2 = {
    labels: ['남성', '여성'],
    datasets: [
        {
            type: 'pie',
            label: '',
            backgroundColor: ['#5B61FF', '#EDBAFF'],
            data: [60, 40]
        }
    ]
};
const options = {
    spanGaps: true,
    responsive: true,
    plugins: {
        axis: {
            y: {
                show: false
            }
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: '20대가 가장 많아요!',
            color: '#344052',
            font: {
                weight: 'bold',
                size: 12
            },
            padding: {
                bottom: 30
            }
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            position: 'bottom'
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        },
        yAxes: [
            {
                ticks: {
                    display: false
                }
            }
        ]
    }
};
const options2 = {
    spanGaps: true,
    responsive: true,
    plugins: {
        datalabels: {
            color: 'white',
            display: function (context: any) {
                return context.dataset.data[context.dataIndex] > 15;
            },
            font: {
                weight: 'bold'
            },
            formatter: Math.round
        },

        axis: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: `<IconPersonCheck /> 남성이 더 많아요!`,
            color: '#344052',
            font: {
                weight: 'bold',
                size: 12
            },
            padding: {
                bottom: 30
            }
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        },
        yAxes: [
            {
                ticks: {
                    display: false
                }
            }
        ]
    }
};

const VolunteerDetail = () => {
    const state = false;
    return (
        <>
            <BaseBox style={{ textAlign: 'center' }}>
                <img src="/images/detail_thumbnail_area.png" alt="" />
                <Title style={{ margin: '21px 0 0' }}>재사용 나눔가게 운영 지원</Title>
                <SubTitle color={'gray2'} display="inline-flex">
                    봉사협회장(등록 기관)
                </SubTitle>
            </BaseBox>

            <BgBox style={{ border: '2px solid #DBDFE5', borderLeft: 'none', borderRight: 'none' }}>
                <BaseBox>
                    <Button bgColor={state ? 'gray2' : 'primary'} fullWidth lg>
                        {state ? '봉사 모집이 마감되었어요.' : '현재 모집 중이에요!'}
                    </Button>
                    <BaseBox pd="21px 13px">
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                <b>모집 대상</b>
                            </SubTitle>
                            <TextContent fontSize="16">
                                <b>서울특별시 영등포구 영중로 지하 40 영등포뉴타운 지하쇼핑몰 이벤트홀 (지하)</b>
                            </TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                <b>활동 날짜</b>
                            </SubTitle>
                            <TextContent fontSize="16">
                                <b>2022-01-01 ~ 2022-02-01</b>
                            </TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                <b>활동 시간</b>
                            </SubTitle>
                            <TextContent fontSize="16">
                                <b>9 - 18시 까지</b>
                            </TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                모집 기관
                            </SubTitle>
                            <TextContent fontSize="16" bold>
                                <b>아름다운 가게 영등포점</b>
                            </TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                모집 대상
                            </SubTitle>
                            <TextContent fontSize="16">청소년 / 성인</TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                모집 인원
                            </SubTitle>
                            <TextContent fontSize="16">
                                <b>3</b>명
                            </TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                모집 날짜
                            </SubTitle>
                            <TextContent fontSize="16">2022-01-01 ~ 2022-02-01</TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="21" color="gray2">
                                전화 번호
                            </SubTitle>
                            <TextContent fontSize="16">031-888-0938</TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="40" color="gray2">
                                담당자
                            </SubTitle>
                            <TextContent fontSize="16">김봉봉</TextContent>
                        </FlexBox>
                        <FlexBox>
                            <SubTitle alignItems="flex-start" fontSize="16" mt="0" mr="40" color="gray2">
                                이메일
                            </SubTitle>
                            <TextContent fontSize="16">wodkek29938@gmail.com</TextContent>
                        </FlexBox>
                    </BaseBox>
                </BaseBox>
            </BgBox>

            <BgBox bgColor="white" style={{ paddingTop: '0' }}>
                <Tab></Tab>
            </BgBox>

            <BaseBox style={{ padding: '34px 20px' }}>지도</BaseBox>

            <BaseBox>
                <SubTitle fontSize="14px">
                    <span style={{ marginRight: '5px' }}>🙌</span> 신청자 정보
                </SubTitle>
            </BaseBox>
            <BgBox bgColor={'blueSemi'} style={{ border: '2px solid #DBDFE5', borderLeft: 'none', borderRight: 'none' }}>
                <BaseBox>
                    <FlexBox column>
                        <div className="content">
                            <Chart>
                                <div className="chart-box">
                                    <h2 className="chart-box__title">
                                        <IconChart size={16} color={'white'} mr={8} />
                                        20대가 가장 많아요!
                                    </h2>
                                    <Bar className="chart-canvas type-bar" options={options} data={data} />
                                </div>
                            </Chart>
                            <Chart>
                                <div className="chart-box">
                                    <h2 className="chart-box__title">
                                        <IconPersonCheck size={16} color={'white'} mr={8} />
                                        남성이 더 많아요!
                                    </h2>
                                    <Pie className="chart-canvas" options={options2} data={data2} />
                                </div>
                            </Chart>
                        </div>
                    </FlexBox>
                </BaseBox>
                <PositionBox mask blur>
                    <PositionBox center style={{ textAlign: 'center', color: 'white' }}>
                        <IconLock size={56} />
                        <br />
                        <br />
                        구독한 회원만 볼 수 있어요!
                    </PositionBox>
                </PositionBox>
            </BgBox>
        </>
    );
};

export default VolunteerDetail;
