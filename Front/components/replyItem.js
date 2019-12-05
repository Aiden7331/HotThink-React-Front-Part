import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import { Col, Row } from 'antd';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { writeRecomment, deleteComment, deleteRecomment } from '../modules/reducer/freeThink';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import CommentUpdate from '../container/freeThink/recomment/commentUpdate';


const useStyles = makeStyles(theme => ({
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const ReplyItem = ({ item, user, category }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useSelector(({ freeThink }) => ({
    id: freeThink.originalPostId,
  }));
  const classes = useStyles();

  const repId = item.rpSeq;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  //댓글수정
  const [updateShow, setUpdateShow] = useState(false);
  const onClose = () => {
    setUpdateShow(false);
  };
  //대댓글수정
  const [updateShow2, setUpdateShow2] = useState(false);
  const [subItem, setSuBItem] = useState(null);
  const onClose2 = () => {
    setUpdateShow2(false);
  };

  //대댓글
  const [recomment, setRecomment] = useState('');
  const onChangeRecomment = useCallback((e) => {
    setRecomment(e.target.value);
  }, []);
  //대댓글 생성
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
  }, [dispatch, recomment, id, repId]);

  const onDelete = () => {
    const check = confirm('댓글을 삭제하시겠습니까?');
    if (check === true) {
      //삭제로직
      dispatch(
        deleteComment(
          {
            id,
            repId,
          }
        )
      );
    }
    router.push({
      pathname: '/think/myFreeThink',
      query: {
        sb: 0,
        sz: 5,
        pg: 1,
        category: category,
        ob: 0
      }
    });
  };

  return (
    <ul className={classes.ul}>
      <ListItem button onClick={handleClick} key={item.rpSeq}>
        <ListItemAvatar>
          {item.user.profileImg ?
            <Avatar
              alt={item.nickName}
              src={item.user.profileImg}
            />
            :
            <Avatar>
              <FaceIcon/>
            </Avatar>
          }
        </ListItemAvatar>
        <ListItemText primary={item.user.nickName}/>
        <ListItemText primary={item.contents}/>
        {item.user.email === user.email ?
          <div>
            <Button style={{ outline: 'none' }} onClick={() => setUpdateShow(true)}>
              <EditIcon fontSize={'small'}/>
            </Button>
            <Button style={{ outline: 'none' }}>
              <DeleteIcon fontSize={'small'} onClick={onDelete}/>
            </Button>
          </div>
          : ''}
        {item.subReplies.length === 0 ? '' : open ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>

      {/*대댓글*/}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding style={{ paddingLeft: 20 }}>
          {
            item.subReplies.map(
              reply =>
                <ListItem>
                  <ListItemAvatar>
                    {
                      reply.user.img ?
                        <Avatar
                          alt={reply.user.nickName}
                          src={reply.user.img}
                        />
                        :
                        <Avatar>
                          <FaceIcon/>
                        </Avatar>
                    }
                  </ListItemAvatar>
                  <ListItemText primary={reply.user.nickName}/>
                  <ListItemText primary={reply.contents}/>
                  {reply.user.email === user.email ?
                    <div>
                      <Button style={{ outline: 'none' }} onClick={()=>{
                        setSuBItem(reply);
                        setUpdateShow2(true);
                      }}>
                        <EditIcon fontSize={'small'}/>
                      </Button>
                      <Button style={{ outline: 'none' }}>
                        <DeleteIcon fontSize={'small'} onClick={()=>
                        {
                          const check = confirm('대댓글을 삭제하시겠습니까?');
                          if (check === true) {
                            //삭제로직
                            dispatch(
                              deleteRecomment(
                                {
                                  id,
                                  repId:reply.rpSeq,
                                }
                              )
                            );
                          }
                        }}/>
                      </Button>
                    </div>
                    :
                    ''}
                </ListItem>
            )
          }
          <ListItem>
            <Row style={{ width: '100%' }}>
              <Col span={22}>
                <TextareaAutosize
                  style={{
                    width: '100%',
                  }}
                  placeholder="답글을 작성해주세요!"
                  value={recomment}
                  id="recomment"
                  onChange={onChangeRecomment}
                  autoFocus={true}
                />
              </Col>
              <Col span={2}>
                <Button
                  onClick={onSubmitForm}
                  style={{
                    height: 30,
                    outline: 'none'
                  }}>작성</Button>
              </Col>
            </Row>

          </ListItem>
        </List>
      </Collapse>
      <Modal
        onHide={onClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        show={updateShow}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"
                       style={{
                         fontFamily: 'Noto Sans KR',
                         fontWeight: 700,
                       }}>
            댓글 수정
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentUpdate onClose={onClose} item={item} category={category}/>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={onClose2}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        show={updateShow2}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"
                       style={{
                         fontFamily: 'Noto Sans KR',
                         fontWeight: 700,
                       }}>
            대댓글 수정
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentUpdate onClose={onClose2} item={subItem} category={category} re="RE"/>
        </Modal.Body>
      </Modal>
    </ul>
  );
};

export default ReplyItem;
