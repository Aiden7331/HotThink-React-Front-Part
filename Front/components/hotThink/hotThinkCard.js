import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/core/SvgIcon/SvgIcon';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Collapse from '@material-ui/core/Collapse';
import HotThinkModal from './hotThinkModal';
import {Tag} from "antd";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Modal from "react-bootstrap/Modal";
import TempPanel from "../../container/hotThink/tempPanel";


const useStyles = makeStyles(theme => ({
    card: {
        textAlign: 'center',
        maxWidth: 345,
        maxHeight: '40%',
        marginRight: '1%'
    },
    media: {
        height: 0,
        width: 345,
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

const HotThinkCard = ({data}) => {

    const cardStyles = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const setMenuURL = (category) => {
        if (category === 'Game') {
            return '게임';
        } else if (category === '웹사이트') {
            return 'green';
        } else if (category === 'IOT') {
            return '사물인터넷';
        } else if (category === '유틸리티') {
            return 'purple';
        } else if (category === '컨텐츠') {
            return 'geekblue';
        } else if (category === '모바일') {
            return 'volcano';
        } else if (category === 'Design') {
            return '디자인';
        } else if (category === 'Marketing') return '마켓팅';
    };
    return (
        <>
            <Card className={cardStyles.card}
                  style={{display: 'inline-block', margin: '2%'}}>
                <CardHeader
                    avatar={
                        <Tag color={setMenuURL(data.cate)}>{data.cate}</Tag>
                    }
                    action={
                        <HotModal/>
                    }
                    title={data.title ? data.title : '제목'}
                    subheader={data.date ? data.date : '날짜'}
                />
                <CardMedia
                    className={cardStyles.media}
                    image={data.src ? data.src : '/static/images/human3.jpg'}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.contents ? data.contents : '내용'}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

export default HotThinkCard;

const HotModal = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [index, setIndex] = useState(0);

    const [direction, setDirection] = useState(null);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <ButtonToolbar>
            <IconButton aria-label="zoomIn" onClick={() => setModalShow(true)}>
                <ZoomInIcon/>
            </IconButton>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
    )
}

function MyVerticallyCenteredModal(props) {
    const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header style={{ backgroundColor: 'red', }}
                          closeButton>
                <Modal.Title style={{
                    color: '#f5f6f7',
                    fontFamily: 'Arial',
                    fontStyle: 'italic',
                    fontWeight: 'bold',

                }}>
                    Hot Think
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TempPanel/>
            </Modal.Body>
        </Modal>
    );
}
