import React, {useCallback, useEffect, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {useDispatch, useSelector} from "react-redux";
import {deleteRecomment, writeRecomment} from "../../../modules/reducer/freeThink";
import {Form, Button,Icon} from 'antd';

const InputRecomment = ({item,updateOpen,setUpdateOpen,updateContents,setUpdateContents}) => {
    const [recommentOpen, setRecommentOpen] = useState(false);
    const [recomment,setRecomment] = useState('');
    const dispatch = useDispatch();
    const repId = item.rpSeq;

    const {id} = useSelector(({freeThink}) => ({
        id: freeThink.originalPostId,
    }));

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (!recomment || !recomment.trim()) {
            return alert('답글을 작성하세요');
        }
        dispatch(
            writeRecomment({
                recomment,
                id,
                repId,
            }),
        );
        setRecommentOpen(false);
    }, [dispatch, recomment, id, repId]);

    const onChangeRecomment = useCallback((e) => {
        setRecomment(e.target.value);
    }, []);

    const onRecomment = () => {
        if (recommentOpen === false) {
            setRecommentOpen(true);
        } else {
            setRecommentOpen(false);
            setRecomment('');
        }
    };

    const onUpdate = () => {
        setUpdateOpen(true);
        setUpdateContents(item.contents);
    };

    const onDelete = useCallback((e) => {
        e.preventDefault();
        const check = confirm("답글을 삭제하시겠습니까?");
        if(check === true){
            //삭제로직
            dispatch(
                deleteRecomment({
                    id,
                    repId,
                })
            )
        }
    },[dispatch,id,repId]);

    useEffect(()=>{

    },[]);

    return (
        <>
            {
                !recommentOpen
                ?
                <>
                    {!updateOpen
                        ?
                        <>
                            <span style={{marginRight:'10px'}}
                                  onClick={onRecomment}><a>답글</a></span>
                            <span style={{marginRight:'10px'}}
                                onClick={onUpdate}><a>수정</a></span>
                            <span style={{marginRight:'10px'}}
                                onClick={onDelete}><a>삭제</a></span>
                        </>
                    :
                        null
                    }
                </>
                :
                <div>
                    <Form onSubmit={onSubmitForm}>
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
                            value={recomment}
                            id="recomment"
                            onChange={onChangeRecomment}
                            autoFocus={true}
                        />
                        <Button htmlType="submit">작성</Button>
                        <Icon type="close" onClick={onRecomment} style={{display:'inline-block'}}/>
                    </Form>
                </div>
            }
        </>
    )
};
export default InputRecomment;