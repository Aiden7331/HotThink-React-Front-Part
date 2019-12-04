import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/core/SvgIcon/SvgIcon';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Collapse from '@material-ui/core/Collapse';
import HotThinkModal from './hotThinkModal';


const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    maxWidth: 345,
    maxHeight: '40%',
    marginRight:'1%'
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

const HotThinkCard =()=>{

  const cardStyles = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Card className={cardStyles.card}
          style={{display: 'inline-block',margin:'2%'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={cardStyles.avatar}>
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title="나는 노예다"
        subheader='작성날짜'
      />
      <CardMedia
        className={cardStyles.media}
        image="/static/images/human3.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          노예 판매합니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing
                   style={{outline:"none"}}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <div style={{marginRight:0, marginLeft:180}}>
          <IconButton aria-label="zoomIn" >
            <HotThinkModal/>
          </IconButton>

        </div>

      </CardActions>

    </Card>
  )
};

export default HotThinkCard;
