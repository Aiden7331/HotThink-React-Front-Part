import React from 'react';
import {Col, Row} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

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


  return (
    <Card className={classes.card} style={{maxWidth:'100%',width:'auto',height:'auto'}}>
      <Row>
        <Col span={10} >
          {document.getElementsByClassName('img').naturalHeight>document.getElementsByClassName('box').naturalHeight
            ?
            <div className='box' style={{margin:'5px', width:'100%', float:"left", height:'90vh', background:'#F2F2F2', textAlign:'center'}}>
              <img className='img' src={`/static/images/image3.jpg`} style={{
                width: 'auto',
                height: '100%',

              }}/>
            </div>
            :
            <div className='box' style={{ height:"50vh", width:'100%', background:'#000000', display:'table'}}>
              <div style={{ display:'table-cell', width:'100%', verticalAlign:'middle'}}>
                <img className='img' src={`/static/images/human2.jpg`}
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
        <Col span={14}>
          <CardHeader style={{}}
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          H
                        </Avatar>
                      }
                      title={
                        'CEO가되는법'
                      }
                      subheader={
                        '2019.11.26 PM 10:55'
                      }

          />
          <CardContent style={{borderTop:'3px solid white',borderBottom:'3px solid white', width:'100%' }}>
            <Typography variant="body2" color="textSecondary" component="p">

              //내용을 입력<br/>
              작성자: 강태구<br/>
              김영곤은 영원히 곤드레만드레~
              다시 돌아와 주라 너 다시 돌아 와주라~~~~~~~~
              6202 수업중일 떄 조용히 해주세요.
              웃고 이야기 하는 소리 너무 크게 들려요..
              ㅜㅜㅜㅜ  다시 돌아와 주라 너 다시 돌아 와주라~~~~~~~~

            </Typography>
          </CardContent>
          <CardContent style={{height:'100%', width:'100%'}}>

            -------------->프리띵크에서 작성한 댓글 포함여부 6202 수업중일 떄 조용히 해주세요.
            웃고 이야기 하는 소리 너무 크게 들려요.. 6202 수업중일 떄 조용히 해주세요.
            다시 돌아와 주라 너 다시 돌아 와주라~~~~~~~~


          </CardContent>
        </Col>
      </Row>
    </Card>
  );
};
export default TempPanel;
