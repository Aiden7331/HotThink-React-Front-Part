import React, { useState, useCallback, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/reducer/auth';
import { check } from '../../modules/reducer/user';
import Router from 'next/router';

import styled from 'styled-components';
import { red } from '@material-ui/core/colors';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

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

const SignUp = (props) => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공/실패처리
  useEffect(() => {
    if (authError) {
      console.log(authError);
      //이미 존재하는 이메일 일 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      //이미 존재하는 닉네임 일 때
      if (authError.response.status === 408) {
        setError('이미 존재하는 닉네임입니다.');
        return;
      }
    }
    if (auth==="") {
      //회원가입 성공
      props.snack(true);
      props.loginShow(false);
      props.show(false);
      // dispatch(check());
    }
  }, [auth, authError, dispatch]);

  //user값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      //회원가입 성공시 이벤트
    }
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log('localStorage is not working2');
    }
  }, [user]);

  //선호분야
  const plainOptions = ['게임', '디자인', '마켓팅', '모바일', '사물인터넷', '웹사이트', '컨텐츠', '유틸리티'];
  const [preferenceList, setPreferenceList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const preferenceListChange = (preferenceList) => {
    setPreferenceList(preferenceList);
    setIndeterminate(!!preferenceList.length && preferenceList.length < plainOptions.length);
    setCheckAll(preferenceList.length === plainOptions.length);
  };
  const preferenceListAllChange = (e) => {
    setPreferenceList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [usage, setUsage] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const { email, pw, pwck, name, nickName, tel } = form;
    //하나라도 비어있을 시
    // if ([email, pw, pwck, name, nickName, tel].includes('')) {
    //   setError('빈칸을 모두 입력하세요.');
    //   return;
    // }
    //비번 비번확인 불일치시
    if (pw !== pwck) {
      setError('비밀번호가 일치하지 않습니다.');
      changeField({
        form: 'register',
        key: 'pw',
        value: ''
      });
      changeField({
        form: 'register',
        key: 'pwck',
        value: ''
      });
      return;
    }
    if (preferenceList.length === 0) {
      setError('관심분야를 하나라도 선택 해주세요!');
      return;
    }

    if (!usage) {
      setError('이용약관을 동의해주세요');
      return;
    }

    dispatch(register({
      email,
      pw,
      name,
      nickName,
      tel,
      preferenceList,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}
                style={{ marginTop: '10px' }}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                id="tel"
                label="Tel"
                name="tel"
                autoComplete="tel"
                onChange={onChange}
              />
            </Grid>

            {/*관심분야 추가*/}
            <Grid item xs={12}
                  style={{ borderBottom: '1px solid #E9E9E9' }}
            >
              <div style={{
                marginTop: 20,
                fontFamily: 'Noto Sans KR',
                fontWeight: 700,
              }}>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={preferenceListAllChange}
                    checked={checkAll}
                  >
                    Check all
                  </Checkbox>
                </div>
                <br/>
                <CheckboxGroup
                  options={plainOptions}
                  value={preferenceList}
                  onChange={preferenceListChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Checkbox checked={usage} onChange={() => {
                setUsage(!usage);
              }}/>
              <Link href="/info/usage" variant="body2" style={{ marginRight: '3px' }}>
                이용약관
              </Link>
              및
              <Link href="/info/privacy" variant="body2" style={{
                marginLeft: '3px',
                marginRight: '2px'
              }}>
                개인정보취급방침
              </Link>
              에 동의합니다.
            </Grid>
          </Grid>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
          >
            회원가입
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright/>
      </Box>
    </Container>
  );
};
export default SignUp;
