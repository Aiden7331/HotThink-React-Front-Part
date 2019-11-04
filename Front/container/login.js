import React, {useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm,login} from "../modules/reducer/auth";
import {check} from '../modules/reducer/user'
import Router from 'next/router';
import styled from 'styled-components';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const[error, setError] =  useState(null);

    const dispatch = useDispatch();
    const classes = useStyles();

    const {form, auth, authError, user} = useSelector(({auth,user})=>({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = e =>{
        const {value,name} = e.target;
        dispatch(
            changeField({
                form:'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {email, pw} = form;
        dispatch(login({email, pw}));
    };

    useEffect(()=>{
        dispatch(initializeForm('login'));
    },[dispatch]);

    useEffect(()=>{
        if(authError){
            setError('로그인 실패');
            return;
        }
        if(auth){
            console.log('로그인 성공');
            localStorage.setItem('token',auth.token);
            console.log(localStorage.getItem('token'));
            dispatch(check());
            console.log('check success');
        }
    },[auth,authError,dispatch]);

    useEffect(()=>{
        if(user){
            //로그인 성공시 이벤트
            console.log('로그인 성공시 이벤트');
            try{
                localStorage.setItem('user',JSON.stringify(user));
            } catch(e) {
                console.log('localStorage is not working1');
            }
        }
    },[user]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="pw"
                        label="Password"
                        type="password"
                        id="pw"
                        autoComplete="current-password"
                        onChange={onChange}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="로그인 상태 유지"
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {'회원가입'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Login;

