import Image from 'next/image';
import { ListTop } from '../../atoms';

type propsType = {
    title: string;
    period: string;
    address: string;
};

const ListItem = ({ title, period, address }: propsType) => {
    return (
        <ListTop>
            <div className="list-image">
                <img src="" alt="" />
            </div>
            <div className="list-info">
                <div className="info">
                    <Image src="/images/icon/location.svg" alt="icon" width={16} height={16} />
                    <span className="place">{address}</span>
                </div>

                <p className="title">{title}</p>

                <div className="info">
                    <Image src="/images/icon/person.svg" alt="icon" width={16} height={16} />
                    <span>{period}명</span>
                </div>
            </div>
        </ListTop>
    );
};

export default ListItem;
