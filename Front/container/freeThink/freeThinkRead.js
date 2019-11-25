import React, {useCallback, useEffect} from 'react';
import {Button, Col, Row} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentModal from "../../components/commentModal";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextareaAutosize from "react-textarea-autosize";
import {useDispatch, useSelector} from "react-redux";
import {
    changeField,
    initialize,
    like,
    unlike,
    writeComment
} from "../../modules/reducer/freeThink";
import {Form} from "antd";
import {useRouter} from "next/router";
import qs from "qs";
import {listFreeThinks} from "../../modules/reducer/freeThinks";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        height:'80%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    avatar: {
        backgroundColor: red[500],
    },
}));

const FreeThinkRead = ({think}) => {
    const router = useRouter();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);

    const img = <img src="/static/images/image1.jpg"/>;
    const {title,contents,comment,image,post,error,category,isOpen,id,user,likes,replies} = useSelector(({freeThinks,freeThink,user})=>({
        title:freeThink.title,
        contents:freeThink.contents,
        image:freeThink.image,
        post:freeThink.freeThink,
        error:freeThink.freeThinkError,
        category:freeThink.category,
        isOpen:freeThink.isOpen,
        comment:freeThink.comment,
        id:freeThink.originalPostId,
        user:user.user,
        likes:freeThink.likes,
        replies:freeThink.replies,
    }));

    useEffect(() => {
        const {sb,sz,pg,category,ob} = qs.parse(router.query,{
            ignoreQueryPrefix: true,
        });
        dispatch(listFreeThinks({
            sb,
            sz,
            pg,
            category,
            ob,
        }));
    }, [dispatch,router.query,isOpen,replies]);


    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (!comment || !comment.trim()) {
            return alert('댓글을 작성하세요');
        }
        dispatch(
            writeComment({
                comment,
                id,
            }),
        );
    },[dispatch,comment,id]);

    const onClickLike = useCallback((e)=>{
        e.preventDefault();
        const isLiked = likes.map(v => v.user.email).includes(user.email);
        if(isLiked) {
            dispatch(unlike({id}));
        }else{
            dispatch(like({id}));
        }
        const {sb,sz,pg,category,ob} = qs.parse(router.query,{
            ignoreQueryPrefix: true,
        });
        dispatch(listFreeThinks({
            sb,
            sz,
            pg,
            category,
            ob,
        }))
    },[dispatch,id,likes,router.query]);

    //언마운트될때 초기화
    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        };
    },[dispatch]);

    const onChangeField = useCallback(payload=>dispatch(changeField(payload)),[
        dispatch
    ]);

    const onChangeComment = e =>{
        onChangeField({key:'comment',value:e.target.value});
    };

    return (
        <Card className={classes.card} style={{maxWidth:'100%',height:'auto'}}>
            <Row>
                <Col span={12}>
                    {document.getElementsByClassName('img').naturalHeight>document.getElementsByClassName('box').naturalHeight
                        ?
                        <div className='box' style={{margin:'5px', width:'100%', float:"left", height:'90vh', background:'#F2F2F2', textAlign:'center'}}>
                            <img className='img' src={`/static/images/image1.jpg`} style={{
                                width: 'auto',
                                height: '100%',
                            }}/>
                        </div>
                        :
                        <div className='box' style={{ height:"90vh", width:'100%', background:'#000000', display:'table'}}>
                        <div style={{ display:'table-cell', width:'100%', verticalAlign:'middle'}}>
                        <img className='img' src={`/static/images/image1.jpg`}
                        style={{
                        width: '100%',
                        height: 'auto',
                        margin:'0 auto'
                    }}
                        />
                        </div>
                        </div>
                    }
                </Col>
                <Col span={12}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={think.title}
                        subheader={think.createAt}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {think.contents}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton onClick={onClickLike} aria-label="add to favorites">
                            {likes==null||!likes.map(v => v.user.email).includes(user.email)
                                ?
                                <FavoriteIcon />
                                :
                                <FavoriteIcon color='secondary'/>
                            }
                            {likes.length}
                        </IconButton>
                        <IconButton aria-label="share">
                            <CheckIcon/>{think.hits}
                        </IconButton>
                        <IconButton aria-label="comment">
                            <ChatBubbleOutlineIcon/>{replies.length+replies.map(v=>v.subReplies).length}
                        </IconButton>
                    </CardActions>
                    <CardContent>
                        <CommentModal replies={replies}/>
                    </CardContent>
                    <div style={{position:'fixed', bottom:'40px',width:'40.5%', overflow:'hidden'}}>
                        <Form onSubmit={onSubmitForm}>
                            <TextareaAutosize
                                style={{
                                    margin: '5px',
                                    resize: 'none',
                                    lineHeight: '20px',
                                    overflowY: 'hidden',
                                    width: '98.5%',
                                    minHeight: '80px',
                                    height: 'auto',
                                    display: 'inline-block'
                                }}
                                placeholder="댓글을 작성해주세요!"
                                value={comment}
                                id="comment"
                                onChange={onChangeComment}
                                autoFocus={true}
                            />
                            <Button style={{float: 'right'}} htmlType="submit">작성</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};
export default FreeThinkRead;