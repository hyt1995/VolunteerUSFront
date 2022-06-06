import { ListComment, FlexBox } from '../../atoms';
import { CommentBox } from '../../molecule';
import Image from 'next/image';
import { IconWatch, IconLocation } from 'asset/icon';

type propsType = {
    no?: [string, number];
    title: string;
    period: string;
    address: string;
};

const ListCommentItem = ({ no, title, period, address }: propsType) => {
    return (
        <ListComment>
            <FlexBox align="center">
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
            </FlexBox>
            <div>
                <CommentBox></CommentBox>
            </div>
        </ListComment>
    );
};

export default ListCommentItem;
