import { useState } from 'react';
import { TabBox, BaseBox } from '../atoms';
import { CommentBox } from '../molecule';

const Tab = () => {
    const tabData = [
        { id: 1, tabMenu: '상세정보' },
        { id: 2, tabMenu: '코멘트' }
    ];
    const [index, setIndex] = useState(1);
    return (
        <TabBox>
            <ul className="tab-menu">
                {tabData.map((item) => (
                    <li
                        className={index === item.id ? 'active' : null}
                        key={item.id}
                        onClick={() => {
                            setIndex(item.id);
                        }}
                    >
                        {item.tabMenu}
                    </li>
                ))}
            </ul>
            {tabData
                .filter((item) => index === item.id)
                .map((item) =>
                    item.id == 1 ? (
                        <div className="tab-content">
                            <div className="tab-content__item">
                                비영리 재단법인 아름다운가게는 기증받은 물품을 판매하여 그 수익으로 우리 주변의 어려운 이웃을 돕는 사회적
                                기업입니다. 아름다운 가게는 수익금은 도움이 필요한 이웃들의 교육비, 병원비, 주거생활안정비,등으로
                                사용합니다. 지원자격 : 17세 ~ 35세 미만 (노동강도가 있어 제한합니다.) 무단 불참의 경우 나머지 활동 반려될 수
                                있습니다. 불참은 최소 2일전 매장으로 연락 바라며, 그 외는 무단불참으로 간주합니다. 청소년은 방학중에만 평일
                                봉사가 가능합니다 우측 하얀 문으로 들어오세요
                            </div>
                        </div>
                    ) : (
                        <div className="tab-content">
                            <CommentBox />
                        </div>
                    )
                )}
        </TabBox>
    );
};

export default Tab;
