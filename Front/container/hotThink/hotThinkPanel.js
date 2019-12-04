import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HotThinkCard from '../../components/hotThink/HotThinkCard';

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
export default function hotThinkPanel() {
  const classesPanel = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <div style={{textAlign:'center', backgroundColor:'#f5f6f7',
      marginInlineStart:'5%', marginInlineEnd:'5%', border:'18px ridge #FF4500', borderRadius:'1%'}}>
      {
        [0,1,2,3,4,5,6,7,8].map(num =>
          <HotThinkCard/>
        )
      }
    </div>
  );
}
