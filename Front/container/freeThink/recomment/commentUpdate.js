import { Button, Form, Input } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { updateComment, updateRecomment } from '../../../modules/reducer/freeThink';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const { TextArea } = Input;

const CommentUpdate = ({ onClose, item, category, re }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  //내용 상태
  const [updateContents, setUpdateContents] = useState(item.contents);
  const onChangeUpdate = useCallback((e) => {
    setUpdateContents(e.target.value);
  }, []);

  const { id } = useSelector(({ freeThink }) => ({
    id: freeThink.originalPostId,
  }));
  const repId = item.rpSeq;

  const onSubmitUpdate = useCallback(async (e) => {
    e.preventDefault();
    if (!updateContents || !updateContents.trim()) {
      return alert('올바르게 수정해주세요.');
    }
    await dispatch(
      re === 'RE' ?
        updateRecomment({
          updateContents,
          id,
          repId,
        })
        :
        updateComment({
          updateContents,
          id,
          repId,
        }),
    );
    //댓글 수정 성공시
    await router.push({
      pathname: '/think/myFreeThink',
      query: {
        sb: 0,
        sz: 5,
        pg: 1,
        category: category,
        ob: 0
      }
    });
    await onClose();
  }, [dispatch, id, updateContents, repId
  ]);

  return (
    <div style={{
      margin: '0px 0 10px',
      fontFamily: 'Noto Sans KR',
    }}
    >
      <TextArea value={updateContents} style={{
        marginTop: 15,
        backgroundColor: '#f5f6f7',
        height: 100,
      }}

        // value={contents} id="contents"
                onChange={onChangeUpdate}
      />
      <Button type="primary"
              style={{
                float: 'right',
                marginTop: '5px',
                borderRadius: '10',
                borderColor: 'black',
                backgroundColor: 'black'
              }}
              onClick={onSubmitUpdate}
      >
        수정</Button>
    </div>

  );
};

export default CommentUpdate;
