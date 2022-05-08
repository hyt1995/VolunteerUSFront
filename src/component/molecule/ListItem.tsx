import Image from 'next/image';
import { List } from '../atoms';

type propsType = {
    title: string;
    period: string;
    address: string;
};

const ListItem = ({ title, period, address }: propsType) => {
    return (
        <List>
            <div className="list-image">
                <img src="" alt="" />
            </div>
            <div className="list-info">
                <p className="title">{title}</p>
                <div className="info">
                    <Image src="/images/icon/watch.svg" alt="icon" width={16} height={16} />
                    <span>{period}</span>
                </div>
                <div className="info">
                    <Image src="/images/icon/location.svg" alt="icon" width={16} height={16} />
                    <span>{address}</span>
                </div>
            </div>
            <div className="list-etc">
                <span className="count">3</span>
            </div>
        </List>
    );
};

export default ListItem;
