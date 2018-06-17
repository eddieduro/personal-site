import injectSheet from 'react-jss'

import Head from '../components/head'
import Nav from '../components/nav'
// import Link from 'next/link'

// width: 100vw;
// height: 100vh;
// display: flex;
// justify - content: center;
// align - items: center;
// text - align: center;
// background: url('/static/stjohns.jpg');
// background - size: cover;
// background - position: center center;
// background - repeat: no - repeat;

const styles = {
  hero: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: {
      image: ['url("/static/stjohns.jpg")'],
      size: ['cover'],
      position: ['center', 'center'],
      repeate: ['no-repeat']
    },
    '& h1': {
      color: 'white',
      fontFamily: ['Titillium Web', 'sans-serif'],
      fontSize: '72px',
      fontWeight: '600'
    }
  }
}

const Hero = ({classes, children}) => (
  <div className={classes.hero}>
    <h1>{children}</h1>
  </div>
)

const StyledHero = injectSheet(styles)(Hero)

export default () => (
  <div>
    <Head title="Home" />

    <StyledHero>
      Eddie Duro
    </StyledHero>
    <Nav />
  </div>
)
