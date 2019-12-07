import React, {useState} from 'react';
import { Col, Row} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Carousel } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor:'#f5f6f7',
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

const TempPanel = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Card className={classes.card} style={{maxWidth:'100%',width:'auto',height:'auto'}}>
      <Row>
        <Col span={10} >
          {/*{document.getElementsByClassName('img').naturalHeight>document.getElementsByClassName('box').naturalHeight*/}
          {/*  ?*/}
          <div className='box' style={{
            height: '50vh',
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
                      src="/static/images/idea.png"
                      alt="First slide"
                  />
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
          <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}
                                src={"/static/images/human7.jpg"}
                        />
                      }
                      title={
                        '핫띵크!'
                      }
                      subheader={
                        '2019-12-05 13:12:11'
                      }
          />
          <CardContent style={{borderTop:'3px solid white', width:'100%' }}>
            <Typography variant="body2" color="textSecondary" component="p">
              유저가 하나의 아이디어가 있다면 커뮤니티와 같은 프리띵크 게시판에 올립니다. 이 후 유저들에게 일정 크기의 좋아요를 받으면 핫띵크로 넘어가게되고 프리띵크 때 댓글로 유저들에게 피드백 받은 내용을 바탕으로 리얼띵크에 기획한 내용을 자세히 기재하여 팔 수 있는 권리를 얻을 수 있습니다.
            </Typography>
          </CardContent>
        </Col>
      </Row>
    </Card>
  );
};
export default TempPanel;
