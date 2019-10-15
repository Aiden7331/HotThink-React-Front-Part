import React,{useState} from 'react';
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import Login from "../../container/login";
import SignUp from "../../container/signup";
import Link from 'next/Link';

const NavigationBar = () => {
    const [loginShow,setLoginShow] = useState(false);
    const [signupShow,setSignupShow] = useState(false);
    const [num,setNum] = useState(['sub1']);
  return(
      <>
          <Navbar
              style={{
                  WebkitBoxShadow:'0px 0px 5px 0px rgba(0,0,0,0.15)',
                  MozBoxShadow:'0px 0px 5px 0px rgba(0,0,0,0.15)',
                  boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.15)',
              }}
              bg="light" variant="light" sticky="top">
              <Navbar.Brand>
                  <img
                      src='/Front/static/images/logo.png'
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                  />
                  <Link href='/'><a style={{textDecoration:'none'}}>{'HotThink'}</a></Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link><Link href="/freeThink"><a style={{textDecoration:'none'}}>아이디어 공유</a></Link></Nav.Link>
                  {/*<NavDropdown title="Think게시판" id="basic-nav-dropdown" href='/freeThink'>*/}
                  {/*    <NavDropdown.Item href="/freeThink">FreeThink</NavDropdown.Item>*/}
                  {/*    <NavDropdown.Item href="/hotThink" num={{num}}>HotThink</NavDropdown.Item>*/}
                  {/*    <NavDropdown.Item href="/realThink">RealTihnk</NavDropdown.Item>*/}
                  {/*</NavDropdown>*/}
                  <Nav.Link><Link href="/finished"><a style={{textDecoration:'none'}}>판매완료</a></Link></Nav.Link>
              </Nav>
              <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
              </Form>
              <Nav.Link onClick={()=>setLoginShow(true)}><a style={{textDecoration:'none'}}>로그인</a></Nav.Link>
              <Nav.Link onClick={()=>setSignupShow(true)}><a style={{textDecoration:'none'}}>회원가입</a></Nav.Link>
              <Nav.Link><Link href="/mypage/dashBoard"><a style={{textDecoration:'none'}}>MyPage</a></Link></Nav.Link>
              <Nav.Link><Link href="/mypage/pay"><a style={{textDecoration:'none'}}>결제</a></Link></Nav.Link>
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
          <Modal
              show={signupShow}
              onHide={() => setSignupShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
          >
              <Modal.Body>
                  <SignUp/>
              </Modal.Body>
          </Modal>
      </>

  )
};

export default NavigationBar;