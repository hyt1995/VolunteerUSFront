import Image from 'next/image';
import { ListTop } from '../../atoms';
import { IconPerson, IconLocation } from 'asset/icon';

type propsType = {
    no?: [string, number];
    title: string;
    period: string;
    address: string;
    top3?: boolean;
};

const ListItem = ({ no, title, period, address, top3, ...props }: propsType) => {
    return (
        <ListTop top3={top3} {...props}>
            {no && (
                <div className="list-no">
                    <div>{no}</div>
                </div>
            )}
            <div className="list-image">
                <Image src="/images/list_thumnail.png" alt="thumbnail" width={80} height={80} />
            </div>
            <div className="list-info">
                <div className="info">
                    <IconLocation size={16} color={'primary'} mr={5} />
                    <span className="place">{address}</span>
                </div>

                <p className="title">{title}</p>

                <div className="info">
                    <IconPerson size={16} color={'primary'} mr={5} />
                    <span>{period}명</span>
                </div>
            </div>
        </ListTop>
    );
};

export default ListItem;
