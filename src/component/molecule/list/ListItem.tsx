import Image from 'next/image';
import { List } from '../../atoms';
import { IconWatch, IconLocation } from 'asset/icon';

type propsType = {
    title: string;
    period: string;
    address: string;
    count?: number;
};

const ListItem = ({ title, period, address, count }: propsType) => {
    return (
        <List>
            <div className="list-image">
                <Image src="/images/list_thumnail.png" alt="thumbnail" width={80} height={80} />
            </div>
            <div className="list-info">
                <p className="title">{title}</p>
                <div className="info">
                    <IconWatch size={16} mr={5} />
                    <span>{period}</span>
                </div>
                <div className="info">
                    <IconLocation size={16} mr={5} />
                    <span>{address}</span>
                </div>
            </div>
            {count && (
                <div className="list-etc">
                    <span className="count">{count}</span>
                </div>
            )}
        </List>
    );
};

export default ListItem;
