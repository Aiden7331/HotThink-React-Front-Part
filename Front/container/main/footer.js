import React from 'react';
import { Grid, Typography, Box, Fab, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#f5f6f7',
    },
  },
  Box: {
    marginTop: '5px',
    fontWeight: '600',
    color: '#868e96',
  },
  td: {
    color: '#495057',
    paddingTop: '20px',
    padding: '10px',
    fontSize: '18px',
  },
  fab: {
    backgroundColor: 'white',
    margin: theme.spacing.unit,
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <Typography component="div" style={{
      borderTop: 'solid 1px',
      borderColor: '#ced4da'
    }}>
      <Grid container style={{ marginLeft: '15%' }}>
        <Grid item>
          <Box className={styles.Box}>
            <table>
              <tr>
                <td className={styles.td}>
                  <Link
                    style={{
                      textDecoration:'none',
                    }}
                    color="inherit"
                        underline='none'
                        href="/usage">
                    이용약관
                  </Link>
                </td>
                <td className={styles.td}>
                  <Link
                    style={{
                      textDecoration:'none',
                    }}
                    color="inherit"
                    underline='none'
                    href="/privacy">
                  개인정보취급방침
                  </Link>
                </td>
                <td className={styles.td}>
                  <Link
                    style={{
                      textDecoration:'none',
                    }}
                    color="inherit"
                    underline='none'
                    href="/membership">
                  멤버십 약관
                  </Link>
                </td>
              </tr>
            </table>
          </Box>
          <Box className={styles.Box}>
            데이터베이스 캡스톤 디자인 프로젝트 · HOTTIHNK
          </Box>
          <Box className={styles.Box}>
            팀원:김영곤,강태구,이문혁,홍민석
          </Box>
          <Box className={styles.Box}>
            깃허브 주소: https://github.com/SKHU-Avengers · 이메일:dudrhs571@gmail.com
          </Box>
          <Box className={styles.Box} style={{ marginBottom: '20px' }}>
            CopyRight ©HOTTHINK. All Rights Reserved
          </Box>

        </Grid>
        <Grid item style={{
          marginTop: '70px',
          marginLeft: '5%',
        }}>
          <Fab className={styles.fab}
               href={'http://www.skhu.ac.kr/main.aspx'}>
            <SchoolIcon/>
          </Fab>
          <Fab className={styles.fab}
               href={'https://github.com/SKHU-Avengers/HotThink-BE'}>
            <GitHubIcon/>
          </Fab>
        </Grid>
      </Grid>

    </Typography>
  );
};

export default Footer;
