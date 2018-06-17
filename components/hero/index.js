import injectSheet from 'react-jss'

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
        },
    }
}

const Hero = ({ classes, children }) => (
    <div className={classes.hero}>
        <h1>{children}</h1>
    </div>
)
const StyledHero = injectSheet(styles)(Hero)

export default StyledHero;