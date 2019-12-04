import React, { useEffect, useState } from 'react';
import ThinkCard from '../../components/cards/thinkCard';
import {
  Layout,
  Typography,
  Row,
  Col,
  Badge,
  Avatar,
  Button,
  Divider,
  Pagination,
  Icon, Menu
} from 'antd';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { listFreeThinks } from '../../modules/reducer/freeThinks';
import { changeField, closeModal, initialize, openModal } from '../../modules/reducer/freeThink';
import { Modal } from 'react-bootstrap';
import FreeThinkWrite from '../../container/freeThink/freeThinkWrite';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const MyFreeThink = () => {
  const router = useRouter();
  const categories = ['Game', 'Design', 'Marketing', 'Mobile', 'IOT', 'WebSite', 'Contents', 'Utility'];
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };
  const [category, setCategory] = useState(null);
  const [page,setPage] = useState(1);
  const [size,setSize] = useState(5);

  const {freeThinks, isOpen} = useSelector(
    ({freeThinks,loading,user,freeThink})=>({
      freeThinks: freeThinks.freeThinks,
      loading:loading['freeThinks/LIST_FREE_THINKS'],
      user:user.user,
      isOpen:freeThink.isOpen,
    }));
  const dispatch = useDispatch();

  useEffect(() => {
    const {sb,sz,pg,category,ob} = qs.parse(router.query,{
      ignoreQueryPrefix: true,
    });
    setCategory(category);
    dispatch(changeField({key:"category", value:category}))
    dispatch(listFreeThinks({
      sb,
      sz,
      pg,
      category,
      ob,
    }))
  }, [dispatch, router.query, isOpen]);

  const onPageChange = (page,size) => {
    setPage(page);
    window.scrollTo(0,0);
    router.push({
      pathname: '/think/myFreeThink',
      query: { sb:0,sz:size,pg:page,category:category,ob:0 }
    });
  };

  const setIconImage = () => {
    if (category === '게임') {
      return '/static/images/game.jpg';
    } else if (category === '웹사이트') {
      return '/static/images/webpage.jpg';
    } else if (category === '사물인터넷') {
      return '/static/images/IOT.jpg';
    } else if (category === '유틸리티') {
      return '/static/images/program.jpg';
    } else if (category === '컨텐츠') {
      return '/static/images/contents.jpg';
    } else if (category === '모바일') {
      return '/static/images/mobile.jpg';
    } else if (category === '디자인') {
      return '/static/images/design.jpg';
    } else if (category === '마켓팅') return '/static/images/marketing.jpg';
  };

  const setMenuURL = (category) => {
    if (category === 'Game') {
      return '게임';
    } else if (category === 'WebSite') {
      return '웹사이트';
    } else if (category === 'IOT') {
      return '사물인터넷';
    } else if (category === 'Utility') {
      return '유틸리티';
    } else if (category === 'Contents') {
      return '컨텐츠';
    } else if (category === 'Mobile') {
      return '모바일';
    } else if (category === 'Design') {
      return '디자인';
    } else if (category === 'Marketing') return '마켓팅';
  }

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'}>
          <Menu
            style={{
              height: '100%',
              fontFamily: 'Noto Sans KR',
              fontWeight: '700',
              borderColor: '#ced4da',
              borderWidth: '1px',
              borderRightStyle: 'solid'
            }}
            mode="inline"
            theme="light"
            // inlineCollapsed={collapsed}
          >
            <div style={{
              textAlign: 'left',
              width: '100%',
              padding: 16,
            }}>
              <Button type="normal" onClick={toggleCollapsed}>
                <Icon type={collapsed ? 'eye-invisible' : 'eye'}
                      style={{ color: '#64b5f6' }}
                      spin={collapsed}
                />
              </Button>
            </div>

            <SubMenu
              style={{ marginBottom: 10 }}
              key="sub1"
              title={
                <Row>
                  <span>
                  <Icon type='global'
                        style={{
                          fontSize: 25
                        }}
                  />
                  <span style={{
                    fontSize: 17
                  }}>
                    프리 띵크</span>
                </span>
                </Row>

              }
            >
              {
                categories.map(category =>
                  <Menu.Item key={categories.indexOf(category)}
                             onClick={()=>router.push(
                               "/think/myFreeThink?sb=0&sz=5&pg=1&category="+setMenuURL(category)+"&ob=0"
                             )}>
                    {category}
                  </Menu.Item>
                )
              }
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{
          backgroundColor: '#f5f6f7',
          padding: '5%',
        }}
        >

          <Header style={{ backgroundColor: '#f5f6f7' }}>
            <Row>
              <Col span={21}>
                <Badge
                  count={category}
                  style={{ backgroundColor: '#108ee9' }}
                >
                  <Title level={2}>Free Think</Title>
                </Badge>
              </Col>
              <Col span={3}>
                <Fab variant="extended" color='secondary' style={{ outline: 'none' }}
                     onClick={() => dispatch(openModal())}>
                  <span style={{
                    color: 'white',
                    fontFamily: 'Noto Sans KR',
                  }
                  }>글쓰기</span>
                  <EditIcon style={{ color: 'white' }}/>
                </Fab>
              </Col>
            </Row>
            <Divider
              orientation={'right'}>
              <Avatar
                size={'large'}
                src={setIconImage()}/>
            </Divider>
          </Header>

          <Content style={{
            marginTop: '80px',
            backgroundColor: '#f5f6f7',
          }}>
            {
              freeThinks.map(think =>
                <ThinkCard think={think}/>
              )
            }
          </Content>

          <Footer style={{ backgroundColor: '#f5f6f7' }}>
            <Pagination
              style={{textAlign:'center', margin:'30px'}}
              total={20}
              pageSize={size}
              current={page}
              onChange={onPageChange}
            />
          </Footer>
        </Layout>
      </Layout>
      <Modal
        show={isOpen}
        onHide={() => dispatch(closeModal())}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"
                       style={{
                         fontFamily: 'Noto Sans KR',
                         fontWeight: 700,
                       }}>
            당신의 생각!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FreeThinkWrite category={category}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyFreeThink;
