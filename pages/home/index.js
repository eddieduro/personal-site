import React, {Component} from 'react'
import posed from "react-pose"

import Head from '../../components/head'
import Nav from '../../components/nav'
import Hero from '../../components/hero/index'
// import Link from 'next/link'
const config = {
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'easeIn', duration: 500 }
    }
  },
  hidden: {
    opacity: 0,
    scaleY: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'easeIn', duration: 500 }
    }
  }
};
const Title = posed.div(config)

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({isVisible: !this.state.isVisible})
    }, 100);
  }
  render () {
    const {isVisible} = this.state;
    return(
     <div>
       <Head title="Home" />
       <Hero>
          <Title
              data-testid="Hero__title"
              key="title"
              pose={isVisible ? "visible" : "hidden"}
            >
            <h1 className="hero__header">Eddie Duro</h1>
            <span className="hero__subheader">Programmer, Sneakerhead, Creative.</span>
          </Title>
       </Hero>
       <Nav />
     </div>
    )
  }
}