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
    const dummy1 = [//게임
        {
            nickName: '판매왕',
            title: '새로운 방식의 디자인 유틸리티',
            contents: '지금까지의 방식과는 전혀 다른 새로운 방식의 디자인 유틸리티입니다. 예를 들자면 현재 UNITY UNREAL ENGINE과 같이 물리엔진 2대장을 역임하고 있는 녀석들과' +
                '비교를 해봅시다. 이 Three.JS 라는 라이브러리는 정말 간단하고 가벼...',
            src: '/static/images/dummy2.jpg',
            avatar:'/static/images/human1.jpg'
        },
        {
            nickName: '발명왕',
            title: '어느곳에서도 찾지 못했던 판타지 MMORPG',
            contents: '지금까지 생각했던 RPG 게임은 잊어버리십시오. 우리는 어렸을적 모두 하늘을 날아다니고 오크를 베어넘기던 한 명의 영웅이었습니다. 지금 당장 그 꿈을 현실로 바꿀 때입니다. 다시 한번 그 때로 돌아가 길드원들과 세상을 다스려보세요...',
            src: '/static/images/dummy1.jpg',
            avatar:'/static/images/human2.jpg'
        },
        {
            nickName: '게임왕',
            title: '흔한 레벨업 디자인은 이제 버릴때가 왔습니다.',
            contents: '지금까지 레벨을 어떻게 디자인하셨습니까? 하나하나 머릿속에서 전부다 직접 구현하셨나요? 이제는 그럴 필요가 없습니다. 생각해둔 카테고리와 게임 장르만 선택한다면 모든것을 알아서 정해주는 자동 레벨디자인 시스템! 이제는 정말 생...',
            src: '/static/images/dummy3.jpg',
            avatar:'/static/images/human3.jpg'
        }
    ];
    const dummy2 = [//디자인
        {
            nickName: '디자인왕',
            title: '디자인이란 것이 결국 무엇이겠습니까? 이 방법을 제안합니다.',
            contents: '산업 디자인은 대량 생산의 기술을 통해 제작될 제품에 적용되는 디자인의 과정이다. 산업디자인의 핵심적인 특징은 디자인은 제조와 분리된다는 것이다. 제품의 형태를 결정하고 규정하는 창조적 행동은 제품을 만드는 물리적 행동에 선행...',
            src: '/static/images/dummy4.jpg',
            avatar:'/static/images/human4.jpg'
        },
        {
            nickName: '포토샵왕',
            title: '포토샵과 비슷한 툴을 무료로 이용해보는것은 어떤가요?',
            contents: '포토샵은 디자인 관련 직업을 가지신 분들이 ㅁ많이 사용하고있는 프로그램이지만, 해당 직종에 일을 하지 않아도 포토샵이라는 이름은 굉장히 익숙할거라 생각됩니다. 일반적으로 개인적인 사진을 보정하기위해 포토샵을 사용하는 분들도 ...',
            src: '/static/images/dummy5.jpg',
            avatar:'/static/images/human5.jpg'
        },
        {
            nickName: '디자인왕',
            title: '디자인 스케치를 위한 혁신적인 도구',
            contents: '지금까지 여러분은 어떻게 기본적인 디자인을 스케치 하셨습니까? 연필로? 펜으로? 아니면 다양한 아날로그적인 도구들을 사용해서? 지금부터는 더이상 물건을 여러가지 들고다니지 않아도 됩니다. 오로지 이 디자인 패드 하나면 처음부터 ...',
            src: '/static/images/dummy6.jpg',
            avatar:'/static/images/human4.jpg'
        }
    ];
    const dummy3 = [//마케팅
        {
            nickName: '마케팅 갓',
            title: '제발 이렇게 마케팅 해주세요',
            contents: '최근의 마케팅 연구는 생산관리와 서비스관리를 적극적으로 흡수하고 있다. 이는 마케팅과 운영관리의 공통분모때문인데, 생산/서비스 관점에서 마케팅을 정의하자면 누가 어디에서 무엇을 필요로 하는지를 알아내는 것이고, 생산관리와 서...',
            src: '/static/images/dummy7.jpg',
            avatar:'/static/images/human6.jpg'
        },
        {
            nickName: '마케팅 지존',
            title: 'SNS마케팅 방법에 한 획을 긋다.',
            contents: '단순히 프로필을 만들고 제품에 관한 정보를 올리는 것만으로는 충분하지 않습니다. 커뮤니티와 적극적으로 소통하는 것이 필수적입니다. 전략과 목표가 없다면 목표를 이뤄내고 있는지도 알 수 없습니다. 종종 KPI도 나중에 고려해보지만...',
            src: '/static/images/dummy8.jpg',
            avatar:'/static/images/human7.jpg'
        },
        {
            nickName: '마케팅 황제',
            title: '여러분은 크나큰 착각을 하고있습니다. 그건 마케팅이 아닙니다.',
            contents: '학계는 물론 실무에서도 마케팅혁신에 대한 관심은 점점 고조되고 있다. 그럼에도 불구하고 마케팅에서의 혁신 연구는 신 제품개발이나 소비자의 혁신제품채택이라는 분야에 제한되어있어 마케팅혁신의 여러 차원을 설명하기에 부족하였다...',
            src: '/static/images/dummy9.jpg',
            avatar:'/static/images/human8.jpg'
        }
        ];

  const router = useRouter();
  const [dummy,setDummy] = useState(dummy1);
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

  const setMenuURL = (e) => {
      setCategory(e);
      console.log(e);
  };

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
        category: '게임',
        ob: 0
      }
    });
  };

    const dum = [
        dummy1,
        dummy2,
        dummy3
    ];

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
                             onClick={(e) => {
                                 setMenuURL(category);
                                 setDummy(dum[e.key]);
                                 router.push(
                               `/think/myFreeThink?sb=0&sz=5&pg=1&category=${category}&ob=0`
                             )}}>
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
                    <h3 style={{margin:'10px'}}>리얼띵크 > {category?category:'Game'} <Link><a href='/think/realThink/realThinkWrite'><Icon style={{
                        float: 'right',
                        marginTop: '10px',
                        marginRight: '10px'
                    }} type="form"/></a></Link></h3>
                    {dummy.map((v) => {
                        return (
                          <>
                              <RealThinkCard data={v}/>
                          </>
                        );
                    })}
                    <Pagination style={{
                        textAlign: 'center',
                        margin: '30px'
                    }} defaultCurrent={1} total={10}/>
                </Col>
            </Row>
        </Layout>
      </Layout>
    </>
  );
};

export default RealThink;
