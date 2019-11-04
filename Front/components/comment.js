import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

const CommentModal = ({replies}) => {
    return(
        <>
            <List
                className="comment-list"
                header={`${replies.length} replies`}
                itemLayout="horizontal"
                dataSource={replies}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={[<span key="comment-list-reply-to-0">Reply to</span>]}
                            author={item.user.nickName}
                            avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                            content={item.contents}
                            // datetime={(<Tooltip
                            //     title={moment()
                            //         .subtract(1, 'days')
                            //         .format('YYYY-MM-DD HH:mm:ss')}
                            // >
                            // <span>
                            //   {moment()
                            //       .subtract(1, 'days')
                            //       .fromNow()}
                            // </span>
                            // </Tooltip>)}
                        />
                    </li>
                )}
            />
        </>
    );
};

export default CommentModal;