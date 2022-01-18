import * as React from 'react'
import '@styles/index.scss'
import { Helmet } from 'react-helmet'

import HeaderMain from '@components/HeaderMain/HeaderMain'
import Signature from '@components/Signature/Signature'
import FooterMain from '@components/FooterMain/FooterMain'

const styles = {
  name: {
    fontSize: '42px',
    lineHeight: '55px',
  },
  and: {
    fontSize: '14px',
    marginTop: '10px',
    marginBottom: '10px',
  },
}

function IndexPage({ location }) {
  return (
    <div className="page">
      <Helmet>
        <title>Liedtke Cozby 2022</title>
      </Helmet>

      <HeaderMain location={location} />

      <main>
        <section className="section-hero my-0 flex justify-center items-end">
          <h1 className="text-white drop-shadow m-0">We're getting married!</h1>
        </section>

        <section className="section-names my-16">
          <p className="ma-0" style={styles.name}>Heidi</p>
          <p className="ma-0" style={styles.name}>Liedtke</p>
          <p className="ma-0 uppercase" style={styles.and}>and</p>
          <p className="ma-0" style={styles.name}>Brenton</p>
          <p className="ma-0" style={styles.name}>Cozby</p>
        </section>

        <section className="section-wedding-info">
          <hr className="hidden lg:block w-3/4 mx-auto" />
          <p className="uppercase mt-14" style={{letterSpacing: '3px'}}>
            Sunday
          </p>
          <p className="uppercase text-4xl my-6" style={{letterSpacing: '5px'}}>
            May 29, 2022
          </p>
          <p className="uppercase mb-14" style={{letterSpacing: '3px'}}>
            Eagle River, WI
          </p>
          <hr className="hidden lg:block w-3/4 mx-auto" />
        </section>

        <section className="section-lets-celebrate mx-auto">
          <h2 className="text-4xl" style={{letterSpacing: '1px'}}>
            Let's Celebrate
          </h2>
          <p className="my-8 text-base" style={{letterSpacing: '3px'}}>
            5.27.2022 - 5.31.2022
          </p>
          <p className="prose my-2 max-w-prose mx-auto">
            Join us for a weekend-long celebration with our closest family and friends. We planned a fun weekend of boating, bonding activities, and enjoying Wisconsin's Northwoods. Oh yeah--and, of course, an intimate wedding ceremony.
          </p>
        </section>

        <Signature />
        <div className="footer-hero-image" />
      </main>

      <FooterMain />
    </div>
  )
}

export default IndexPage
