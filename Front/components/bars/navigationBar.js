import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import Login from '../../container/auth/login';
import SignUp from '../../container/auth/signup';
import Link from 'next/Link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/reducer/user';
import { authNull } from '../../modules/reducer/auth';
/*
    기능 : 전체 메인페이지의 상단 네비게이션바
    loginShow => 로그인 모달창 개폐에 사용되는 key state
    signupShow => 로그인 모달창 개폐에 사용되는 key state
    num => 초기네비게이션바 설정 state
    onLogout => 로그아웃시 발생하는 로직
*/

const NavigationBar = () => {
    const [loginShow, setLoginShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const [num, setNum] = useState(['sub1']);
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();

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

    return (
        <>
            <Navbar
                onSelect={false}
                style={{
                    WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
                    MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
                }}
                bg="light" variant="light" sticky="top">
                <Navbar.Brand>
                    {/*<img*/}
                    {/*    src='/static/images/logo.png'*/}
                    {/*    width="30"*/}
                    {/*    height="30"*/}
                    {/*    className="d-inline-block align-top"*/}
                    {/*    alt=""*/}
                    {/*    style={{color:'red'}}*/}
                    {/*/>*/}
                    <Link href='/'><a style={{
                        textDecoration:'none',
                        fontStyle: 'italic',
                        fontSize: '30px',
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        color: 'red'
                    }}>{'HotThink'}</a></Link>
                </Navbar.Brand>
                <Nav className="mr-auto" style={{ fontSize: '13px' }}>
                    <Nav.Item>
                        <Link href={{
                            pathname: '/think/freeThink/freeThink',
                            query: {
                                sb: 0,
                                sz: 10,
                                pg: 1,
                                category: 'IT서비스',
                                ob: 0
                            }
                        }}><a style={{
                            textDecoration: 'none',
                            marginLeft: '10px',
                            color: 'gray',
                            fontWeight: '600'
                        }}>아이디어공유</a></Link></Nav.Item>
                    {/*홍민석 요청으로 href로 분야 보여주는것 삭제*/}
                    {/*<NavDropdown title="Think게시판" id="basic-nav-dropdown" href='/freeThink'>*/}
                    {/*    <NavDropdown.Item href="/freeThink">FreeThink</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="/hotThink" num={{nu
                  m}}>HotThink</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="/realThink">RealTihnk</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                    {/*<Nav.Item style ={{marginLeft:'5px'}}><Link href="/finished"><a style={{textDecoration:'none', marginLeft:'10px',color:'gray',fontWeight:'600'}}>판매완료</a></Link></Nav.Item>*/}
                </Nav>

                {
                    user
                        ? <div style={{ float: 'right' }}>
                            <Button size={'small'}
                                    style={{
                                        marginTop: '4px',
                                        marginRight: '10px'
                                    }}
                                    shape={'round'}
                                    onClick={onLogout}
                            >
                                <b style={{
                                    marginLeft: '5px',
                                    color: '#13c276'
                                }}>로그아웃</b>
                            </Button>
                        </div>
                        : <>
                            <Button
                                style={{
                                    color: 'black',
                                }}
                                variant="outlined" onClick={() => setLoginShow(true)}>
                                Who are you ?
                            </Button>
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
                    <Login/>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default NavigationBar;