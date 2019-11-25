import React, {useCallback, useState} from 'react';
import InputRecomment from "../container/freeThink/recomment/inputRecomment";
import {Button, Comment, Form, Icon} from "antd";
import TextareaAutosize from "react-textarea-autosize";
import {useDispatch, useSelector} from "react-redux";
import {updateRecomment} from "../modules/reducer/freeThink";

const SubComment = ({item}) => {
    const dispatch = useDispatch();
    const [updateOpen,setUpdateOpen] = useState(false);
    const [updateContents,setUpdateContents] = useState(item.contents);
    const {id} = useSelector(({freeThink})=>({
        id:freeThink.originalPostId,
    }));
    const repId = item.rpSeq;

    const onSubmitUpdate = useCallback((e) => {
        e.preventDefault();
        if (!updateContents || !updateContents.trim()) {
            return alert('올바르게 수정해주세요.');
        }
        dispatch(
            updateRecomment({
                updateContents,
                id,
                repId,
            }),
        );
    },[dispatch,id,updateContents,repId]);

    const onChangeUpdate = useCallback((e) => {
        setUpdateContents(e.target.value);
    }, []);

    const onUpdate = () => {
        if (updateOpen === false) {
            setUpdateOpen(true);
        } else {
            setUpdateOpen(false);
            setUpdateContents('');
        }
    };

    return(
        <Comment
            actions={[<InputRecomment item={item}
                                      updateOpen={updateOpen} setUpdateOpen={setUpdateOpen}
                                      updateContents={updateContents} setUpdateContents={setUpdateContents} />]}
            author={item.user.nickName}
            avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            content={!updateOpen
                ?
                item.contents
                :
                <Form onSubmit={onSubmitUpdate}>
                    <TextareaAutosize
                        style={{
                            margin: '5px',
                            resize: 'none',
                            lineHeight: '20px',
                            overflowY: 'hidden',
                            width: '350px',
                            minHeight: '20px',
                            height: 'auto',
                            display: 'inline-block'
                        }}
                        placeholder="답글을 작성해주세요!"
                        value={updateContents}
                        id="recomment"
                        onChange={onChangeUpdate}
                        autoFocus={true}
                    />
                    <Button htmlType="submit">수정</Button>
                    <Icon type="close" onClick={onUpdate} style={{display:'inline-block'}}/>
                </Form>
            }
            style={{width:'80%',display:'inline-block'}}
        >
        </Comment>
    )
};
export default SubComment;