import React, { useEffect, useState } from 'react';
import Link from 'next/Link';
import { Row, Col, Icon, Pagination, Descriptions, Badge, Menu, Button, Layout } from 'antd';
import RealThinkCard from '../../../components/cards/realThinkCard';
import ThinkBar from '../../../components/bars/thinkBar';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { listRealThinks } from '../../../modules/reducer/realThinks';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const RealThink = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };
  const [category, setCategory] = useState(null);
  const categories = ['Game', 'Design', 'Marketing', 'Mobile', 'IOT', 'WebSite', 'Contents', 'Utility'];

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { realThinks } = useSelector(({ realThinks, loading, user, realThink }) => ({
    realThinks: realThinks.realThinks,
    error: realThinks.error,
    loading: loading['realThinks/LIST_REAL_THINKS'],
    user: user.user,
  }));

  useEffect(() => {
    const { sb, sz, pg, category, ob } = qs.parse(router.query, {
      ignoreQueryPrefix: true,
    });
    dispatch(listRealThinks({
      sb,
      sz,
      pg,
      category,
      ob,
    }));
  }, [dispatch, router.query]);

  const onPageChange = (page, size) => {
    setPage(page);
    window.scrollTo(0, 0);
    Router.push({
      pathname: '/think/realThink/realThink',
      query: {
        sb: 0,
        sz: size,
        pg: page,
        category: '웹사이트',
        ob: 0
      }
    });
  };

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
                  <Icon type='trophy'
                        style={{
                          color: 'gold',
                          fontSize: 25,
                        }}
                  />
                  <span style={{
                    color: 'gold',
                    fontSize: 17
                  }}>
                    리얼 띵크</span>
                </span>
                </Row>

              }
            >
              {
                categories.map(category =>
                  <Menu.Item key={categories.indexOf(category)}
                             onClick={() => router.push(
                               '/think/myFreeThink?sb=0&sz=5&pg=1&category=' + setMenuURL(category) + '&ob=0'
                             )}>
                    {category}
                  </Menu.Item>
                )
              }
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
            <Row>
                <Col span={18}>
                    <h3>리얼띵크 > 웹사이트 <Link><a href='/think/realThink/realThinkWrite'><Icon style={{
                        float: 'right',
                        marginTop: '10px',
                        marginRight: '10px'
                    }} type="form"/></a></Link></h3>
                    {realThinks.map((v) => {
                        return (
                          <>
                              <RealThinkCard data={v}/>
                          </>
                        );
                    })}
                    <RealThinkCard/>
                    <Pagination style={{
                        textAlign: 'center',
                        margin: '30px'
                    }} defaultCurrent={1} total={500}/>
                </Col>
            </Row>
        </Layout>
      </Layout>
    </>
  );
};

export default RealThink;
