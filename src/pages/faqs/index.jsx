import React from 'react'
import Page from '@components/Page/Page'

export default function PageFAQs({ location }) {
  return (
    <Page
      title="FAQs | Liedtke Cozby 2022"
      className="page-faqs"
      location={location}
    >
      <section className="lg:mt-32">
        <h1 className="text-4xl lg:text-5xl my-8">FAQs</h1>
        <p className="prose mx-auto">If you have any other questions, please reach out to our wedding planners (Brenton and Heidi).</p>
      </section>
    </Page>
  )
}
