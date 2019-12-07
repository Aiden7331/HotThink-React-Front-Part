import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HotThinkCard from '../../components/hotThink/HotThinkCard';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'center',
    maxWidth: 1000,
    maxHeight: '40%',
    marginRight:'1%'
  },
  media: {
    height: 0,
    width: 345,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function hotThinkPanel() {
  const dummy=[
    {
      title:'종합정보시스템',
      contents:' 모든 정보를 종합하여 검색하는데에 시간을 낭비할 필요 없이 원하는 키워드로 찾을 수 있도록 빅데이터를 활용한 사이트',
      date:'2019-12-05 10:13:44',
      src:'/static/images/종합정보시스템.jpg'
    },
    {
      title:'크몽',
      contents:'프리랜서들의 No.1 사이트, 원하는 상품을 원하는 프리랜서에게 맡겨보세요',
      date:'2019-12-05 13:12:11',
      src:'/static/images/크몽.jpg'
    },
    {
      title:'핫띵크',
      contents:'아이디어를 사고 팔 수 있는 커뮤니티 사이트, 회원들의 평가를 받아보며 자신의 가치를 증명할 수 있습니다.',
      date:'2019-12-05 15:24:41',
      src:'/static/images/hotthink.jpg'
    },
    {
      title:'소리바다',
      contents:'무료 음악 플레이 재생이 가능한 사이트, 자신이 원하는 노래목록을 만들어 간직하시고, 노래방 번호도 확인할 수 있어요!',
      date:'2019-12-05 17:03:11',
      src:'/static/images/소리바다.jpg'
    },
    {
      title:'어카운트킬러',
      contents:'해외에 자신의 명의로 가입한 사이트를 한눈에 알게 해주는 사이트, 까먹고 방치해두었던 내 개인정보를 지켜야 됩니다!',
      date:'2019-12-05 21:22:11',
      src:'/static/images/어카운트킬러.jpg'
    },
    {
      title:'파일론',
      contents:'온라인 웹하드 사이트, 이제부턴 모든 영상을 사고 팔 수 있습니다. 무료 p2p 사이트 많은 회원을 생성할 것입니다.',
      date:'2019-12-06 03:59:39',
      src:'/static/images/파일론.jpg'
    },
    {
      title:'협찬GAGE',
      contents:'당신도 연예인처럼 화장품과 악세사리, 옷까지 협찬 받을 수 있습니다. 다 같이 연에인이 된 기분을 느껴봅시다.',
      date:'2019-12-06 09:03:11',
      src:'/static/images/협찬.jpg'
    },
    {
      title:'아이디어몰',
      contents:' 기발한 아이디어 상품들을 모아서 판매를 해주는 사이트입니다. 새롭고 기발한 아이디어들이 많기 때문에 회원 유치도 쉽고, 경쟁력 또한 있다고 생각하기에 글을 썼습니다.',
      date:'2019-12-06 15:22:48',
      src:'/static/images/아이디어몰.jpg'
    },
    {
      title:'ProTO',
      contents:'불법이 아닌 합법적인 도박입니다. 나라에 하는 사업이기 때문에 뒷통수를 맞을 일 또한 없기에 안심하고 사용할 수 있는 사이트입니다. 또한 커뮤니티 게시판을 추가하여 회원들 간의 정보 공유와 후기 등등을 남길 수 있도록 만들려고 노력할 것입니다.',
      date:'2019-12-07 00:01:59',
      src:'/static/images/프로토.jpg'
    },
  ];
  const classesPanel = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
      <>
      {
        dummy.map(v =>
          <HotThinkCard data={v}/>
        )
      }
    </>
  );
}
