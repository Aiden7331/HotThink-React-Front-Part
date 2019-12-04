import {List} from 'antd';
import React from 'react';
import CommentBox from "./commentBox";
import './commentModal.css';

const CommentModal = ({replies}) => {
    return (
        <>
            {`댓글  ${replies.length}개`}
            <div className='comment' style={{height: '270px', overflow: 'scroll',msOverflowStyle: 'none',}}>
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={replies}
                    renderItem={item => (
                        <li style={{listStyle: 'none'}}>
                            <CommentBox item={item}/>
                        </li>
                    )}
                />
            </div>
        </>
    );
};

export default CommentModal;