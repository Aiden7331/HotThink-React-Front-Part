import React, {useCallback, useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import qs from 'qs';
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
import { useDispatch } from 'react-redux';
import { deleteFreeThink, listFreeThinks } from '../../modules/api/think';
import { useRouter } from 'next/router';
import { like, unlike } from '../../modules/reducer/freeThink';


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
  Button:{
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  header: {
    display: 'flex',
    width: '100%',
  },
  details: {
    width: '40%',
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  fab: {
    margin: theme.spacing(1),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  listContainer: {
    marginTop: '3px',
    border: 'solid 2px',
    borderColor: '#ced4da',
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ThinkCard = ({user, think}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [grow, setGrow] = useState(false);

  const growFunction = () => {
    setGrow(true);
  };

  const growResetFunction = () => {
    setGrow(false);
  };

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const deleteFunction =()=> {
    deleteFreeThink(think.bdSeq);
  };

  useEffect(()=>{
   deleteFunction();
  },[deleteFunction]);

  const onClickLike = () => {
    // useCallback((e)=>{
    // e.preventDefault();
    const isLiked = think.likes.map(v => v.user.email).includes(user.email);
    if(isLiked) {
      dispatch(unlike(think.bdSeq));
    }else{
      dispatch(like(think.bdSeq));
    }
    // const {sb,sz,pg,category,ob} = qs.parse(router.query,{
    //   ignoreQueryPrefix: true,
    // });
    // dispatch(listFreeThinks({
    //   sb,
    //   sz,
    //   pg,
    //   category,
    //   ob,
    // }))
    router.push({
      pathname: '/think/myFreeThink',
      query: { sb:0, sz:5, pg:1, category:think.category, ob:0 }
    });
  }
  // ,[dispatch,router.query]);

  return (

      grow?
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
                            src={!!think.user.profileImg}>
                      {think.user.profileImage?'':<PersonIcon fontSize={'large'}/>}
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
                        {think.createAt}
                      </Box>
                    </Typography>
                  }

                  action={
                    <Button onClick={ growResetFunction } startIcon={<CloseIcon fontSize={'large'}/>}
                            style={{ outline: 'none' }}
                    />
                  }
                />

                {/*자세히 볼 때 내용*/}
                <Row type="flex" style={{height:200}}>
                  <CardContent style={{ display: 'block', paddingTop:20 }}>
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
                <Row justify={'end'} type={"flex"} style={{paddingRight:20}}>
                  <Col>
                    <Box>
                      <Badge badgeContent={think.likes.length} max={999} color="secondary">
                        <Fab size="small" color="secondary" className={classes.fab} style={{outline:'none'}}>
                          {think.likes==null||
                          !think.likes.map(v => v.user.email).includes(user.email)
                          ?
                          <FavoriteIcon />
                          :
                          <FavoriteIcon color='secondary'/>
                          }
                        </Fab>
                      </Badge>
                    </Box>
                  </Col>
                  <Col>
                        <Fab size="small" color="primary" className={classes.fab} style={{outline:'none'}}>
                          <BookMarkIcon/>
                        </Fab>
                  </Col>
                </Row>

                {/*댓글*/}
                <Row>
                  <ReplyComp replies={think.replies}/>
                </Row>
                {/*댓글작성*/}
                <Row style={{marginLeft:20}}>
                  <form style={{height:'100%'}}>
                    <Col span={21}>
                      <TextField label="댓글을 남겨보세요!" variant={'outlined'} style={{width:"100%"}}/>
                    </Col>
                    <Col span={3} style={{height:56}}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        style={{height:'100%', outline:'none'}}
                      >
                        <SendIcon/>
                      </Button>
                    </Col>
                  </form>

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
                      src={!!think.user.profileImg}>
                {think.user.profileImage?'':<PersonIcon fontSize={'large'}/>}
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
                  {think.createAt}
                </Box>
              </Typography>
            }

            action={
              user.email===think.user.email?
                <div>
                  <Button size={'large'} startIcon={<EditIcon fontSize={'large'}/>} style={{outline:'none'}}/>
                  <Button size={'large'} onClick={deleteFunction} startIcon={<DeleteIcon fontSize={'large'}/>} style={{outline:'none'}}/>
                </div>
                :
                null
            }
          />
          <Row type="flex">
            <Col span={18}>
              <CardContent style={{ display: 'block', paddingTop:20 }}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box
                    fontFamily='Noto Sans KR'
                    fontWeight={500}
                  >
                    <Row style={{fontSize:20}}>
                      {think.contents.slice(0, 30)}
                    </Row>
                    {/*내용이 30자 이상이면 */}
                    {
                      think.contents.length>30?
                        <MoreVertIcon style={{ marginLeft: 10, marginTop:5 }}/>
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
                image="/static/images/default.png"
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
                <IconButton aria-label="add to favorites" style={{ outline: 'none' }} onClick={onClickLike}>
                  {think.likes.length===0||
                  !think.likes.map(v => v.user.email).includes(user.email)
                    ?
                    <FavoriteBorderIcon/>
                    :
                    <FavoriteIcon color={'secondary'}/>
                  }
                </IconButton>
                <IconButton aria-label="share" style={{ outline: 'none' }}>
                  <BookMarkIcon color={'primary'}/>
                  33
                  {/*{think.hits}*/}
                </IconButton>
                <IconButton aria-label="comment" style={{ outline: 'none' }}>
                  <ChatBubbleOutlineIcon/>
                  10
                  {/*{think.replies.length}*/}
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
        </Card>
  )
}

export default ThinkCard;
