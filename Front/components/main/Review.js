import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '20px',
    marginRight: '15%',
    marginLeft: '15%',
  },
  inline: {
    display: 'inline',
  },
  listContainer:{
    marginTop: "3px",
    border: "solid 2px",
    borderColor: "#ced4da",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,

},
  avatarContainer: {
    margin: 10,
    width: '15%',
    height: '150px',

  },
  avatar: {
    opacity: 0.9,
    height: '100%',
    width: '100%',
  },
  textArea: {
    marginLeft: '5%',
    height: '100%',
    width: '100%',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  const listData = [
    {
      img: '/static/images/human1.jpg',
      author: '홍민석',
      job: '노가다꾼',
      contents: '실력 향상에 도움이 되는 핫띵크 프로젝트! 데이터베이스 설계는 정말 어려웡!',
    },
    {
      img: '/static/images/human2.jpg',
      author: '강태구',
      job: '백수',
      contents: '여러분, 저 잠수 탈게요 수고염(찡긋!)',
    },
    {
      img: '/static/images/human3.jpg',
      author: '이문혁',
      job: '노예',
      contents: '자살 각이야',
    },
  ];

  return (
    <List className={classes.root}>
      {
        listData.map(data =>
          <div>
            <ListItem alignItems="flex-start"
                    className={classes.listContainer}
            >
              <ListItemAvatar className={classes.avatarContainer}>
                <Avatar alt={data.author}
                        src={data.img}
                        className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.textArea}
                primary={
                    <Typography
                      style={{
                        padding:"20px"
                      }}
                    >
                      <Box
                        fontSize={24}
                        fontWeight={700}
                        fontFamily={'Noto Sans KR'}
                        className={classes.inline}
                      >{data.author}{'  '}</Box>
                      <Box
                        fontSize={18}
                        color={"#868e96"}
                        fontWeight={700}
                        fontFamily={'Noto Sans KR'}
                        className={classes.inline}
                      >{data.job}
                      </Box>
                    </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      style={{
                        fontWeight:"500",
                        fontFamily:"Noto Sans KR"
                      }}
                      component="span"
                      variant="body3"
                      color="inherit"
                    >
                      {data.contents}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        )
      }
    </List>
  );
}
