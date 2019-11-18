import React, {useCallback, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Col, Row} from 'antd';
import {Modal} from 'react-bootstrap';
import FreeThinkRead from "../../container/freeThink/freeThinkRead";
import PostOptions from "../postOptions";
import {useDispatch, useSelector} from "react-redux";
import {setOriginalFreeThink, updateFreeThink, writeFreeThink} from "../../modules/reducer/freeThink";
import {writeComment} from "../../modules/api/think";

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
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

const FreeThinkCard = ({think}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [readShow, setReadShow] = React.useState(false);
    const dispatch = useDispatch();

    const openCard = () => {
        setReadShow(true);
        dispatch(setOriginalFreeThink({think}));
    };


    return (
        <>
            <Card className={classes.card} width={1} style={{margin: '10px'}}>
                <Row>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <PostOptions think={think}/>
                        }
                        title={think.title}
                        subheader={think.createAt}
                    />
                    <Col span={18}>
                        <CardContent style={{display: 'block'}}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {think.contents}
                            </Typography>
                            <a onClick={openCard}>자세히보기</a>
                        </CardContent>
                    </Col>
                    <Col span={6}>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/image1.jpg"
                            title="Paella dish"
                        />
                    </Col>
                </Row>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        {think.good!==0
                        ?
                            <FavoriteIcon color='secondary'/>
                        :
                            <FavoriteIcon />
                        }
                        {think.likes.length}
                    </IconButton>
                    <IconButton aria-label="share">
                        <CheckIcon/>{think.hits}
                    </IconButton>
                    <IconButton aria-label="comment">
                        <ChatBubbleOutlineIcon/>{think.replies.length}
                    </IconButton>
                </CardActions>
            </Card>
            <Modal
                show={readShow}
                onHide={() => setReadShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size={'xl'}
            >
                <FreeThinkRead think={think}/>
            </Modal>
        </>
    );
};

export default FreeThinkCard;