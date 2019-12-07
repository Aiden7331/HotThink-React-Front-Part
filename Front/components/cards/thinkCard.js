import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookMarkIcon from '@material-ui/icons/BookMark';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { Col, Row } from 'antd';
import { Carousel } from 'react-bootstrap';
import ReplyComp from '../replyComp';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFreeThink } from '../../modules/api/think';
import { useRouter } from 'next/router';
import {
  changeField, closeModal,
  initialize,
  like, setOriginalFreeThink,
  unlike,
  writeComment
} from '../../modules/reducer/freeThink';
import { Modal } from 'react-bootstrap';
import FreeThinkUpdate from '../../container/freeThink/freeThinkUpdate';
import FreeThinkWrite from '../../container/freeThink/freeThinkWrite';
import qs from 'qs';
import { listFreeThinks } from '../../modules/reducer/freeThinks';

const useStyles = makeStyles(theme => ({
  justCard: {
    marginLeft: '10%',
    minWidth: 700,
    marginBottom: '50px',
    width: '80%',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  growCard: {
    minWidth: 1000,
    marginBottom: '50px',
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  avatar: {
    width: 60,
    height: 60
  },
  //확인완료
  Button: {
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

const ThinkCard = ({ think }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [grow, setGrow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);

  const { comment, id, user, likes } = useSelector(({ freeThink, user }) => ({
    id: freeThink.originalPostId,
    title: freeThink.title,
    contents: freeThink.contents,
    image: freeThink.image,
    post: freeThink.freeThink,
    error: freeThink.freeThinkError,
    category: freeThink.category,
    isOpen: freeThink.isOpen,
    comment: freeThink.comment,
    user: user.user,
    likes: freeThink.likes,
  }));

  const growFunction = () => {
    dispatch(setOriginalFreeThink({ think }));
    setGrow(true);
  };

  const growResetFunction = () => {
    dispatch(initialize());
    setGrow(false);
  };

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const deleteFunction = () => {
    deleteFreeThink(think.bdSeq);
    router.push({
      pathname: '/think/myFreeThink',
      query: {
        sb: 0,
        sz: 5,
        pg: 1,
        category: think.category,
        ob: 0
      }
    });
  };

  const onClickLike = () => {
    const {sb,sz,pg,category,ob} = qs.parse(router.query,{
      ignoreQueryPrefix: true,
    });
    const isLiked = think.likes.map(v => v.user.email)
      .includes(user.email);
    if (isLiked) {
      dispatch(unlike(think.bdSeq));
    } else {
      dispatch(like(think.bdSeq));
    }
    dispatch(listFreeThinks({
      sb,
      sz,
      pg,
      category,
      ob,
    }));
    // router.push({
    //   pathname: '/think/myFreeThink',
    //   query: {
    //     sb: 0,
    //     sz: 5,
    //     pg: 1,
    //     category: think.category,
    //     ob: 0
    //   }
    // });
  };

  const [scrap, setScrap] = useState(false);

  const onChangeComment = useCallback((e) => dispatch(changeField({
    key: 'comment',
    value: e.target.value
  })), [dispatch]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!comment || !comment.trim()) {
      return alert('댓글을 작성하세요');
    }
    dispatch(
      writeComment({
        comment,
        id,
      }));
    router.push({
      pathname: '/think/myFreeThink',
      query: {
        sb: 0,
        sz: 5,
        pg: 1,
        category: think.category,
        ob: 0
      }
    });
  }, [comment, id]);

  const onClose = () => {
    setUpdateShow(false);
  };

  const userImageSet = () => {
    const nick = think.user.nickName;
    if(nick==="zeroGone"){
      return "/static/images/human7.jpg";
    }else if(nick==="0nbu"||nick==="Onbu"){
      return "/static/images/human2.jpg";
    }else if(nick==="불개미"){
      return "/static/images/human1.jpg";
    }else if(nick==="moonhuk"){
      return "/static/images/human3.jpg";
    }else if(nick==="geogia"){
      return "/static/images/human9.jpg";
    }else if(nick==="지워닝"){
      return "/static/images/human5.jpg";
    }else if(nick==="smile"||nick==="sohee"){
      return "/static/images/human6.jpg";
    }else if(nick==="1"){
      return "/static/images/human4.jpg";
    }else if(nick==="wpqkf22"){
      return "/static/images/human9.jpg";
    }else if(nick==="123"||nick=="hi seungik"){
      return "/static/images/human10.jpg";
    }else{
      return '';
    }
  };
  const boardImageSet = () => {
    const title = think.title;
    if(title === "디바이스마트"){
      return "/static/image/디바이스마트.png";
    }else if(title === "fow"){
      return "/static/image/fow.png";
    }else if(title === "싸이월드"){
      return "/static/image/싸이월드.jfif";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else if(title === "디바이스마트"){
      return "/static/image/디바이스마트.jpg";
    }else{
      return "";
    }
  };
  return (
    grow ?
      //자세히보기 했을때
      <Grow in={grow}
            style={{ transformOrigin: '50 50 50' }}
            {...(grow ? { timeout: 1300 } : {})}
      >
        <Card className={classes.growCard}>
          <Row>
            <Col span={10}>
              {/*자세히 보기일때 사진들*/}
              <div className='box' style={{
                height: '99vh',
                width: '100%',
                background: '#212529',
                display: 'table'
              }}>
                <div style={{
                  display: 'table-cell',
                  width: '100%',
                  verticalAlign: 'middle'
                }}>
                  <Carousel fade
                            activeIndex={index} direction={direction} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img
                        width={'100%'}
                        src="/static/images/image1.jpg"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <div>
                        <img
                          width={'100%'}
                          src="/static/images/image2.jpg"
                          alt="First slide"
                        /></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div>
                        <img
                          width={'100%'}
                          src="/static/images/image3.jpg"
                          alt="First slide"
                        /></div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
            <Col span={14}>
              {/*자세히 보기 일때 카드*/}
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}
                          src={userImageSet()}
                          onClick={()=>router.push("/user?nickName="+think.user.nickName)}>
                    {userImageSet()===''? <PersonIcon fontSize={'large'}/> : ''}
                  </Avatar>
                }
                title={
                  <Typography component="h5" variant="h5">
                    <Box
                      fontFamily='Noto Sans KR'
                      fontWeight={700}
                    >
                      {think.title}
                    </Box>
                  </Typography>
                }
                subheader={
                  <Typography variant="subtitle1" color="textSecondary">
                    <Box
                      fontFamily='Noto Sans KR'
                      fontWeight={500}
                    >
                      {think.createAt.substring(0,10)}
                    </Box>
                  </Typography>
                }

                action={
                  <Button onClick={growResetFunction} startIcon={<CloseIcon fontSize={'large'}/>}
                          style={{ outline: 'none' }}
                  />
                }
              />

              {/*자세히 볼 때 내용*/}
              <Row type="flex" style={{ height: 200 }}>
                <CardContent style={{
                  display: 'block',
                  paddingTop: 20
                }}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <Box
                      fontFamily='Noto Sans KR'
                      fontWeight={500}
                    >
                      {think.contents}
                    </Box>
                  </Typography>
                </CardContent>
              </Row>

              {/*자세히 볼 때 좋아요 등*/}
              <Row justify={'end'} type={'flex'} style={{ paddingRight: 20 }}>
                <Col>
                  <Box>
                    <Badge badgeContent={think.likes.length} max={999} color="secondary">
                      <Fab size="small"
                           color={think.likes == null ||
                           !think.likes.map(v => v.user.email).includes(user.email)
                             ? 'inherit' : 'secondary'}
                           className={classes.fab} style={{ outline: 'none' }}
                           onClick={onClickLike}
                      >
                        <FavoriteIcon/>
                      </Fab>
                    </Badge>
                  </Box>
                </Col>
                <Col>
                  <Fab size="small" color="primary" className={classes.fab}
                       color={scrap?'primary':'inherit'}
                       onClick={()=>setScrap(!scrap)}
                       style={{ outline: 'none' }}>
                    <BookMarkIcon/>
                  </Fab>
                </Col>
              </Row>

              {/*<CardContent>*/}
              {/*  <CommentModal replies={think.replies}/>*/}
              {/*</CardContent>*/}
              {/*<div style={{*/}
              {/*  position: 'fixed',*/}
              {/*  bottom: '40px',*/}
              {/*  width: '40.5%',*/}
              {/*  overflow: 'hidden'*/}
              {/*}}>*/}
              {/*  <Form onSubmit={onSubmitForm}>*/}
              {/*    <TextareaAutosize*/}
              {/*      style={{*/}
              {/*        margin: '5px',*/}
              {/*        resize: 'none',*/}
              {/*        lineHeight: '20px',*/}
              {/*        overflowY: 'hidden',*/}
              {/*        width: '98.5%',*/}
              {/*        minHeight: '80px',*/}
              {/*        height: 'auto',*/}
              {/*        display: 'inline-block'*/}
              {/*      }}*/}
              {/*      placeholder="댓글을 작성해주세요!"*/}
              {/*      value={comment}*/}
              {/*      id="comment"*/}
              {/*      onChange={onChangeComment}*/}
              {/*      autoFocus={true}*/}
              {/*    />*/}
              {/*    <Button style={{ float: 'right' }} type="submit">작성</Button>*/}
              {/*  </Form>*/}
              {/*</div>*/}
              {/*댓글*/}
              <Row>
                <ReplyComp replies={think.replies} category={think.category} user={user}/>
              </Row>
              {/*댓글작성*/}
              <Row style={{ marginLeft: 20 }}>
                {/*<form style={{ height: '100%' }}*/}
                {/*      // onSubmit={onSubmitForm}*/}
                {/*>*/}
                <Col span={21}>
                  <TextField id="comment" label="댓글을 남겨보세요!" variant={'outlined'}
                             style={{ width: '100%' }} value={comment} id="comment"
                             onChange={onChangeComment}/>
                </Col>
                <Col span={3} style={{ height: 56 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{
                      height: '100%',
                      outline: 'none'
                    }}
                    onClick={onSubmitForm}
                  >
                    <SendIcon/>
                  </Button>
                </Col>
                {/*</form>*/}
              </Row>
            </Col>
          </Row>

        </Card>
      </Grow>
      :
      //자세히보기 안했을때
      <Card className={classes.justCard}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}
                    src={userImageSet()}
                    onClick={()=>router.push("/user?nickName="+think.user.nickName)}>
              {userImageSet()==='' ? <PersonIcon fontSize={'large'}/> : ''}
            </Avatar>
          }
          title={
            <Typography component="h5" variant="h5">
              <Box
                fontFamily='Noto Sans KR'
                fontWeight={700}
              >
                {think.title}
              </Box>
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="textSecondary">
              <Box
                fontFamily='Noto Sans KR'
                fontWeight={500}
              >
                {think.createAt.substring(0,10)}
              </Box>
            </Typography>
          }

          action={
            user.email === think.user.email ?
              <div>
                {/*수정*/}
                <Button size={'large'} startIcon={<EditIcon fontSize={'large'}/>}
                        style={{ outline: 'none' }}
                  onClick={()=>setUpdateShow(true)}
                />
                <Button size={'large'} onClick={deleteFunction}
                        startIcon={<DeleteIcon fontSize={'large'}/>} style={{ outline: 'none' }}/>
              </div>
              :
              null
          }
        />
        <Row type="flex">
          <Col span={18}>
            <CardContent style={{
              display: 'block',
              paddingTop: 20
            }}>
              <Typography variant="body2" color="textSecondary" component="p">
                <Box
                  fontFamily='Noto Sans KR'
                  fontWeight={500}
                >
                  <Row style={{ fontSize: 20 }}>
                    {think.contents.slice(0, 30)}
                  </Row>
                  {/*내용이 30자 이상이면 */}
                  {
                    think.contents.length > 30 ?
                      <MoreVertIcon style={{
                        marginLeft: 10,
                        marginTop: 5
                      }}/>
                      :
                      ''
                  }
                </Box>
              </Typography>
            </CardContent>
          </Col>
          <Col span={6}>
            <CardMedia
              className={classes.media}
              image={boardImageSet()===""?"/static/images/default.png":boardImageSet()}
              title="Paella dish"
            />
          </Col>
        </Row>

        <CardActions disableSpacing>
          {/*  <Box>*/}
          {/*    <Badge badgeContent={1200} max={999} color="secondary">*/}
          {/*      <Fab color="secondary" className={classes.fab}>*/}
          {/*        <FavoriteIcon fontSize={'large'}/>*/}
          {/*      </Fab>*/}
          {/*    </Badge>*/}
          {/*  </Box>*/}
          <Row type="flex" style={{ width: '100%' }}>
            <Col span={20}>
              <IconButton aria-label="add to favorites" style={{ outline: 'none' }}
                          onClick={onClickLike}>
                {think.likes.length === 0 ||//빈배열일때
                !think.likes.map(v => v.user.email)
                  .includes(user.email)//현재유저가 좋아요안눌렀을때
                  ?
                  <FavoriteBorderIcon/>
                  :
                  <FavoriteIcon color={'secondary'}/>
                }
              </IconButton>
              <IconButton aria-label="share" style={{ outline: 'none' }}
                          onClick={()=>setScrap(!scrap)}>
                <BookMarkIcon color={scrap?'primary':'inherit'}
                />
                {think.hits.length}
              </IconButton>
              <IconButton aria-label="comment" style={{ outline: 'none' }}>
                <ChatBubbleOutlineIcon/>
                {think.replies.length}
              </IconButton>
            </Col>

            <Col span={4}>

              <Button endIcon={<ExpandMoreIcon/>}
                      style={{
                        marginTop: 10,
                        fontFamily: 'Noto Sans KR',
                        outline: 'none'
                      }}

                      onClick={growFunction}
              >
                자세히보기
              </Button>
            </Col>
          </Row>
        </CardActions>
        <Modal
          onHide={onClose}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          show={updateShow}>
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title"
                         style={{
                           fontFamily: 'Noto Sans KR',
                           fontWeight: 700,
                         }}>
              당신의 생각!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FreeThinkUpdate think={think} onClose={onClose}/>
          </Modal.Body>
        </Modal>
      </Card>
  );
};

export default ThinkCard;
