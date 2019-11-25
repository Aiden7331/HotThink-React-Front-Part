import  {List} from 'antd';
import React from 'react';

import CommentBox from "./commentBox";

const CommentModal = ({replies}) => {
    return(
        <>
            <List
                className="comment-list"
                header={`댓글  ${replies.length}개`}
                itemLayout="horizontal"
                dataSource={replies}
                renderItem={item => (
                    <li style={{listStyle:'none'}}>
                        <CommentBox item={item}/>
                    </li>
                )}
            />
        </>
    );
};

export default CommentModal;