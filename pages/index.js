import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero/index'
// import Link from 'next/link'

export default () => (
  <div>
    <Head title="Home" />
    <Hero>
      <div>
        <h1>Eddie Duro</h1>
        <span>Programmer, Sneakerhead, Creative.</span>
      </div>
    </Hero>
    <Nav />
  </div>
)
