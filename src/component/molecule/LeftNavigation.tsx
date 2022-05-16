import { LeftNavi, LeftNaviCont } from '../atoms';
import Image from 'next/image';
// import SvgIcon from './SvgIcon';
// import { ReactComponent as home } from '/public/images/icon/home.svg';

const ListItem = () => {
    return (
        <LeftNavi id="nav">
            <LeftNaviCont>
                {/* <SvgIcon Icon={home} width={35} /> */}
                <div className="top-area">
                    <h2>
                        함께 나눠요!<strong>땡땡님</strong>
                    </h2>
                    <a className="btn-close" href="#" aria-label="Close Navigation">
                        <Image src="/images/icon/x.svg" alt="icon" className="icon" width={24} height={24} style={{ fill: '#fff' }} />
                    </a>
                </div>
                <div className="middle-area">
                    <ul className="gnb-box">
                        <li>
                            <Image src="/images/icon/home.svg" alt="icon" width={16} height={16} />
                            <span>홈</span>
                        </li>
                        <li>
                            <Image src="/images/icon/search.svg" alt="icon" width={16} height={16} />
                            <span>봉사 활동 찾기</span>6
                        </li>
                        <li>
                            <Image src="/images/icon/group.svg" alt="icon" width={16} height={16} />
                            <span>봉사 그룹 찾기</span>
                        </li>
                        <li>
                            <Image src="/images/icon/list.svg" alt="icon" width={16} height={16} />
                            <span>마이페이지</span>
                        </li>
                    </ul>
                </div>
                <div className="bottom-area">
                    <Image src="/images/icon/logout.svg" alt="icon" width={24} height={24} />
                    <p>로그아웃</p>
                </div>
            </LeftNaviCont>
        </LeftNavi>
    );
};

export default ListItem;
