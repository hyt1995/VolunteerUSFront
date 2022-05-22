import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FlexBox, SubTitle, Input } from '../atoms';
import Image from 'next/image';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
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
    Title,
    Tooltip,
    Legend,
    ArcElement
);
const TopArea = styled.div<any>`
    padding: ${({ theme }) => theme.space.md};
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.gray3};
    border-bottom: 2px solid ${({ theme }) => theme.color.gray1};
    font-weight: bold;

    h2 {
        width: 80px;
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.gray2};
    }

    .open-url {
        margin-bottom: ${({ theme }) => theme.space.md};

        h2 {
            margin-bottom: ${({ theme }) => theme.space.xxs};
            color: ${({ theme }) => theme.color.point};
            font-size: 12px;
        }
        &__input {
            display: flex;
            justify-content: center;
            border: 2px solid ${({ theme }) => theme.color.point};
            text-decoration: underline;
            text-decoration-color: ${({ theme }) => theme.color.point};

            span {
                color: ${({ theme }) => theme.color.gray2};
                font-size: 32px;
                font-weight: 100;
            }
            input {
                border: none;
                background: transparent;
                color: ${({ theme }) => theme.color.point};
            }

            ${(props) =>
                props.edit &&
                css`
                    padding: 0 0 0 20px;

                    input {
                        border: none;
                        background: transparent;
                        color: ${({ theme }) => theme.color.gray3};
                    }
                `}
        }
    }
`;
const InfoArea = styled.div<any>`
    line-height: 1.3;
    padding: ${({ theme }) => theme.space.md};
    border-bottom: 2px solid ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.gray2};

    .content {
        padding: ${({ theme }) => theme.space.sm};
    }
    ${(props) =>
        props.bg &&
        css`
            background: ${({ theme }) => theme.color.bg};
        `}
`;
const Chart = styled.div<any>`
    width: 320px;
    height: 337px;
    margin: 0 auto;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    background: #fff;

    .chart-canvas {
        width: 100% !important;
        height: 100% !important;
        filter: blur(5px);
        -webkit-filter: blur(5px);

        &:hover {
            filter: blur(0);
            -webkit-filter: blur(0);
        }
    }
`;
const edit = true;
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
            display: true,
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
            display: function (context) {
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
            display: true,
            text: '남성이 더 많아요!',
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

const GroupView = () => {
    return (
        <>
            <TopArea edit={!edit}>
                <div className="open-url">
                    <h2>오픈 채팅 URL</h2>
                    {!edit ? (
                        <div className="open-url__input">
                            <span>+</span>
                            <Input placeholder="오픈 채팅 URL을 입력해주세요" />
                        </div>
                    ) : (
                        <div className="open-url__input">
                            <Input value="dddddddddddddddddddddddddddddddddddddddd" readOnly={edit} />
                        </div>
                    )}
                </div>
                <FlexBox>
                    <h2>지역 :</h2>
                    <p>강남구</p>
                </FlexBox>
                <FlexBox>
                    <h2>대표자 :</h2>
                    <p>김봉봉</p>
                </FlexBox>
                <FlexBox>
                    <h2>현재 인원 :</h2>
                    <p>46 / 100</p>
                </FlexBox>
            </TopArea>

            <InfoArea>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 소개글</SubTitle>
                    <p className="content">
                        비영리 재단법인 아름다운가게는 기증받은 물품을 판매하여 그 수익으로 우리 주변의 어려운 이웃을 돕는 사회적
                        기업입니다.
                    </p>
                </FlexBox>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 상세 정보</SubTitle>
                    <p className="content">
                        비영리 재단법인 아름다운가게는 기증받은 물품을 판매하여 그 수익으로 우리 주변의 어려운 이웃을 돕는 사회적
                        기업입니다.
                        <br />
                        <br />
                        아름다운 가게는 수익금은 도움이 필요한 이웃들의 교육비, 병원비, 주거생활안정비,등으로 사용합니다.
                        <br />
                        <br />
                        지원자격 : 17세 ~ 35세 미만 (노동강도가 있어 제한합니다.)
                        <br />
                        <br />
                        무단 불참의 경우 나머지 활동 반려될 수 있습니다. 불참은 최소 2일전 매장으로 연락 바라며, 그 외는 무단불참으로
                        간주합니다.
                        <br />
                        <br />
                        청소년은 방학중에만 평일 봉사가 가능합니다 우측 하얀 문으로 들어오세요
                    </p>
                </FlexBox>
            </InfoArea>

            <InfoArea bg>
                <FlexBox column>
                    <SubTitle fontSize="14px">그룹 멤버 정보</SubTitle>
                    <div className="content">
                        <Chart>
                            {data.datasets ? (
                                <Bar
                                    className="chart-canvas"
                                    options={options}
                                    data={data}
                                    style={{ width: '100%', height: '100%', padding: '30px' }}
                                />
                            ) : (
                                ''
                            )}
                        </Chart>
                        <Chart style={{ margin: '30px auto 0' }}>
                            {data.datasets ? (
                                <Pie
                                    className="chart-canvas"
                                    options={options2}
                                    data={data2}
                                    style={{ width: '100%', height: '100%', padding: '30px' }}
                                />
                            ) : (
                                ''
                            )}
                        </Chart>
                    </div>
                </FlexBox>
            </InfoArea>
        </>
    );
};

export default GroupView;
