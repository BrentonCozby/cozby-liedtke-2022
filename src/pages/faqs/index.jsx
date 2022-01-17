import React from 'react'
import './faqs.scss'
import Page from '@components/Page/Page'

export default function PageFAQs({ location }) {
  return (
    <Page
      title="FAQs | Liedtke Cozby 2022"
      className="page-faqs"
      location={location}
      footerHeroImage={() => <div className="footer-hero-image" />}
    >
      <section className="lg:mt-32 prose">
        <h1 className="text-4xl lg:text-5xl my-8 text-normal">FAQs</h1>
        <p className="mx-auto mb-20">If you have any other questions, please reach out to our wedding planners (Brenton and Heidi).</p>
      </section>
    </Page>
  )
}
