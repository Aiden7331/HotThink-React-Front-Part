import React,{useState,useCallback,useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm,register} from "../modules/reducer/auth";
import {check} from '../modules/reducer/user'
import Router from 'next/router';
import styled from "styled-components";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Hot Think
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const SignUp = () => {
    const classes = useStyles();
    const [error,setError] = useState(null);
    const dispatch = useDispatch();

    const {form,auth, authError,user} = useSelector(({auth,user})=>({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e =>{
        const {value,name} = e.target;
        dispatch(
            changeField({
                form:'register',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {id,pw,pwck} = form;
        //하나라도 비어있을 시
        if([id,pw,pwck].includes('')){
            setError('빈칸을 모두 입력하세요.');
            return;
        }
        //비번 비번확인 불일치시
        if(pw!==pwck){
            setError('비밀번호가 일치하지 않습니다.');
            changeField({form:'register',key:'pw',value:''});
            changeField({form:'register',key:'pwck',value:''});
            return;
        }
        dispatch(register({id,pw}));
    };

    useEffect(()=>{
        dispatch(initializeForm('register'));
    },[dispatch]);

    //회원가입 성공/실패처리
    useEffect(()=>{
        if(authError){
            //이미 존재하는 이메일 일 때
            if(authError.response.status===409){
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            //이미 존재하는 닉네임 일 때
            if(authError.response.status===408){
                setError('이미 존재하는 닉네임입니다.');
                return;
            }
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    },[auth,authError,dispatch]);

    //user값이 잘 설정되었는지 확인
    useEffect(()=>{
        if(user){
            console.log('checkAPI성공');
            console.log('user');
            //회원가입 성공시 이벤트
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
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="Email Address"
                                name="id"
                                autoComplete="email"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="nickName"
                                label="Nick Name"
                                name="nickName"
                                autoComplete="Nname"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="pw"
                                label="Password"
                                type="password"
                                id="pw"
                                autoComplete="current-password"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="pwck"
                                label="Password Check"
                                type="password"
                                id="pwck"
                                autoComplete="current-password-check"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowTerms" color="primary" />}
                                label="가입시 약관에 동의합니다."
                            />
                        </Grid>
                    </Grid>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        회원가입
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                가입약관
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};
export default SignUp;