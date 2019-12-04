import React, { useEffect, useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ReplyItem from './replyItem';
import { deleteComment } from '../modules/api/think';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    height: 300,
  },
}));

const ReplyComp = ({ replies, user, category }) => {
  const classes = useStyles();

  const [state, setState] = useState(replies);

  useEffect(() => {
    if (state.length !== replies.length) {
      setState(replies);
    }
  }, [replies]);

  return (
    !replies || replies.length === 0 ?
      <Box style={{
        height: 300,
        padding: 20,
        textAlign: 'center'
      }}>
        <Typography variant="h4" component="h2"
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontWeight: 700,
                      fontStyle: 'italic',
                    }}>
          앗 댓글이 없네요!
        </Typography>
      </Box>
      :
      <List className={classes.root} subheader={<li/>}>
        {
          !replies || replies.map(item =>
            <ReplyItem item={item} user={user} category={category}/>
          )
        }
      </List>
  );
};

export default ReplyComp;
