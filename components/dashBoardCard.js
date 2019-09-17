import React,{useState} from 'react';
import {Card,Typography,CardContent,CardActions,Button,makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin:10,
        width:'45%',
        display:'inline-block',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const DashBoardCard = ({title}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DashBoardCard;