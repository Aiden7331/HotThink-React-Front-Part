import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Button, Fab, Typography, Box, Snackbar, SnackbarContent, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'react-bootstrap';
import Login from '../../container/auth/login';
import Link from 'next/Link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/reducer/user';
import { authNull, login } from '../../modules/reducer/auth';
import SVG from '../../components/config/SVG';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import { check } from '../../modules/reducer/user';

/*
    기능 : 전체 메인페이지의 상단 네비게이션바
    loginShow => 로그인 모달창 개폐에 사용되는 key state
    num => 초기네비게이션바 설정 state
    onLogout => 로그아웃시 발생하는 로직
*/

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const MySnackbarContentWrapper = ( props ) =>{
  return (
    <SnackbarContent
      style={{ backgroundColor: green[600]}}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <CheckCircleIcon style={{
            fontSize:20,
            opacity: 0.9,
            marginRight: 5,
          }}/>
          회원가입 성공!
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={props.onClose} style={{outline:'none'}}>
          <CloseIcon style={{fontSize:20 }}/>
        </IconButton>,
      ]}
    />
  );
};

const NavigationBar = () => {
  const classes = useStyles();
  const [loginShow, setLoginShow] = useState(false);
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState(false);
  };

  //로그아웃 발생 이벤트
  const onLogout = () => {
    try {
      dispatch(logout());
      dispatch(authNull());
      localStorage.clear();
    } catch (e) {
      console.log('localStorage is not working1');
    }
  };

  //로그아웃 성공시 이벤트
  useEffect(() => {
    if (!user) {
      try {
        localStorage.clear();
        dispatch(logout());
        dispatch(authNull());
      } catch (e) {
        console.log('localStorage is not working1');
      }
    }
  }, [user, dispatch]);

  const SVGNameInit = (think) => {
    if (think === 'Real') {
      return 'trophy';
    } else if (think === 'Hot') {
      return 'fire';
    } else if (think === 'Think') {
      return 'bird';
    }
  };

  const SVGViewBoxInit = (think) => {
    if (think === 'Real') {
      return '0 0 100 100';
    } else if (think === 'Hot') {
      return '0 0 846.66 900.325';
    } else if (think === 'Think') return '0 0 105 105';
  };

  const thinkColorInit = (think) => {
    if (think === 'Real') {
      return '#ffc400';
    } else if (think === 'Hot') {
      return '#FF0000';
    } else if (think === 'Think') return '#005b8f';
  };

  const thinkURLInit = (think) => {
    if (think === 'Real') {
      return {
        pathname: '/think/realThink/realThink',
        query: {
          sb: 0,
          sz: 10,
          pg: 1,
          category: '웹사이트',
          ob: 0
        }
      };
    } else if (think === 'Hot') {
      return '/think/myHotThink';
    } else if (think === 'Think') return {
    // '/think/myFreeThink?sb=0&sz=5&pg=1&category=웹사이트&ob=0';
      pathname: '/think/myFreeThink',
      query: {
        sb: 0,
        sz: 5,
        pg: 1,
        category: '웹사이트',
        ob: 0
      }
    };
  };
  return (
    <>
      <Navbar
        onSelect={false}
        style={{
          minWidth:1000,
          WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
          MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
        }}
        bg="light" variant="light" sticky="top">
        <Navbar.Brand>
          <Link href='/'><a style={{
            textDecoration: 'none',
            fontStyle: 'italic',
            fontSize: '30px',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            color: 'red'
          }}>{'HotThink'}</a></Link>
        </Navbar.Brand>
        <Nav style={{
          fontSize: '13px',
          width: '30%'
        }}>
          {/*{*/}
          {/*  ['Real', 'Hot', 'Think'].map(think =>*/}
          {/*      <Link href={user&&think==='Think' ? thinkURLInit(think) : ''} key={think}>*/}
          {/*      /!*  <Link href={user ? '/think/myFreeThink?sb=0&sz=5&pg=1&category=웹사이트&ob=0' : ''}>*!/*/}

          {/*        <a style={{textDecoration:'none', marginLeft: '5%'}}>*/}
          {/*        <Button*/}
          {/*          onClick={user ? think==='Think'? null : alert("구독권을 구매하세요!") : () => setLoginShow(true)}*/}
          {/*          style={{*/}
          {/*            outline: 'none',*/}
          {/*            marginLeft: '5%',*/}
          {/*          }}*/}
          {/*        >*/}
          {/*          <li>*/}
          {/*            <SVG name={SVGNameInit(think)}*/}
          {/*                 width={36} height={36} color={thinkColorInit(think)}*/}
          {/*                 viewBox={SVGViewBoxInit(think)}/>*/}
          {/*            <div style={{*/}
          {/*              color: thinkColorInit(think),*/}
          {/*              fontWeight: 900,*/}
          {/*              fontFamily: 'Noto Sans KR',*/}
          {/*            }}>*/}
          {/*              {think}*/}
          {/*            </div>*/}
          {/*          </li>*/}
          {/*        </Button>*/}
          {/*        </a>*/}
          {/*      </Link>*/}
          {/*  )*/}
          {/*}*/}

              <Button
                onClick={user ? ()=>alert("구독권을 구매하세요!") : () => setLoginShow(true)}
                style={{
                  outline: 'none',
                  marginLeft: '5%',
                }}
              >
                <li>
                  <SVG name={SVGNameInit('Real')}
                       width={36} height={36} color={thinkColorInit('Real')}
                       viewBox={SVGViewBoxInit('Real')}/>
                  <div style={{
                    color: thinkColorInit('Real'),
                    fontWeight: 900,
                    fontFamily: 'Noto Sans KR',
                  }}>
                    Real
                  </div>
                </li>
              </Button>

          <a style={{textDecoration:'none', marginLeft: '5%'}}>
            <Button
              onClick={user ? ()=>alert("구독권을 구매하세요!") : () => setLoginShow(true)}
              style={{
                outline: 'none',
                marginLeft: '5%',
              }}
            >
              <li>
                <SVG name={SVGNameInit('Hot')}
                     width={36} height={36} color={thinkColorInit('Hot')}
                     viewBox={SVGViewBoxInit('Hot')}/>
                <div style={{
                  color: thinkColorInit('Hot'),
                  fontWeight: 900,
                  fontFamily: 'Noto Sans KR',
                }}>
                  Hot
                </div>
              </li>
            </Button>
          </a>
        <Link href={user ? thinkURLInit('Think') : ''}>
          <a style={{textDecoration:'none', marginLeft: '5%'}}>
            <Button
              onClick={user ? null : () => setLoginShow(true)}
              style={{
                outline: 'none',
                marginLeft: '5%',
              }}
            >
              <li>
                <SVG name={SVGNameInit('Think')}
                     width={36} height={36} color={thinkColorInit('Think')}
                     viewBox={SVGViewBoxInit('Think')}/>
                <div style={{
                  color: thinkColorInit('Think'),
                  fontWeight: 900,
                  fontFamily: 'Noto Sans KR',
                }}>
                  Think
                </div>
              </li>
            </Button>
          </a>
        </Link>


          {/*<Nav.Item>*/}
          {/*  <Link href={{*/}
          {/*    pathname: 'user',*/}
          {/*    query: {*/}
          {/*      nickName:'10'*/}
          {/*    },*/}
          {/*  }}><a style={{*/}
          {/*    textDecoration: 'none',*/}
          {/*    marginLeft: '10px',*/}
          {/*    color: 'gray',*/}
          {/*    fontWeight: '600'*/}
          {/*  }}>유저</a></Link></Nav.Item>*/}
        </Nav>

        <Nav className="justify-content-center" style={{ width: '30%' }}>
          {
            user
              ?
              <>
                <a href='/mypage'>
                  <Fab color="primary" variant="round" aria-label="like" className={classes.fab}
                       onClick={()=>{dispatch(check())}}
                       style={{
                         marginRight: '29%',
                         outline: 'none'
                       }}
                  >
                    <AccountBoxIcon fontSize={'large'}/>
                  </Fab>
                </a>
              </>
              :
              <>
              </>
          }
        </Nav>

        {user ?
          <>
            <Nav className="justify-content-end" style={{ width: '30%' }}>
                <span style={{
                  fontSize: 20,
                  fontWeight: 900,
                  fontFamily: 'Noto Sans KR',
                }}>{user.nickName}</span>
              <div style={{
                fontSize: 15,
                fontWeight: 500,
                paddingTop:5,
                marginRight: '5%',
                fontFamily: 'Noto Sans KR',
              }}>&nbsp;&nbsp;님 반가워요!
              </div>
              <Link href={'/'}>
                <Button variant="outlined"
                        style={{
                          outline: 'none',
                          color: 'black'
                        }}
                        onClick={onLogout}
                        startIcon={<ExitToAppIcon/>}
                >
                  Quit
                </Button>
              </Link>
            </Nav>
          </>
          :
          <>
            <Nav className="justify-content-end" style={{
              width:'30%',
              float:'right'}}>
                <Button
                  style={{
                    outline: 'none',
                    color: 'black',
                  }}
                  variant="outlined" onClick={() => setLoginShow(true)}>
                  Who are you ?
                </Button>
            </Nav>
          </>

        }
      </Navbar>
      <Modal
        show={loginShow}
        onHide={() => setLoginShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Login show={setLoginShow} snack={setState}/>
        </Modal.Body>
      </Modal>
      <Snackbar open={state}
                anchorOrigin={{ horizontal:'center', vertical: 'top'}}
                autoHideDuration={1000}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
        />
      </Snackbar>

    </>

  );
};

export default NavigationBar;
