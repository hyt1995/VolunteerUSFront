import { useState } from 'react';
import { Title, Textarea, FlexBox, Button, Comment, PositionBox } from '../atoms';
import { IconThreeDotVertical, IconHeart } from 'asset/icon';

const CommentBox = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((current) => !current);
    };
    return (
        <Comment>
            <div className="comment-input">
                <Title mb="13">코멘트 14</Title>
                <Textarea placeholder="코멘트를 입력해주세요."></Textarea>
                <FlexBox justify="space-between" mg="13px 0 0">
                    <span style={{ fontSize: '12px', color: '#6C757D' }}>0 / 100</span>
                    <Button bgColor="primary" fontSize="14" sm>
                        댓글 작성
                    </Button>
                </FlexBox>
            </div>
            <div className="comment-list">
                <div className="comment-list__item">
                    <div className="comment">
                        <div className="comment-info">
                            <span className="name">김땡땡</span>
                            <span className="group">우리모두그룹</span>
                            <span className="time">13:42</span>
                        </div>
                        <div className="comment-text">안녕하세요 재밌네요. 안녕하세요 Asdasdas@22323123adssadasdagff</div>
                    </div>
                    <div className="comment-more">
                        <div className="more-box">
                            <Button text className="more-box__button" onClick={handleClick}>
                                <IconThreeDotVertical size={24} />
                            </Button>
                            {show && (
                                <PositionBox top="100%" right="0">
                                    <ul className="more-box__list">
                                        <li>수정</li>
                                        <li>삭제</li>
                                    </ul>
                                </PositionBox>
                            )}
                        </div>
                        <FlexBox align="center">
                            <IconHeart size={16} color="primary" mr="4" isFill /> 13
                        </FlexBox>
                    </div>
                </div>
            </div>
        </Comment>
    );
};

export default CommentBox;
