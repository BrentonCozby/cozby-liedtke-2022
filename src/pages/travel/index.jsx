import React from 'react'
import Page from '@components/Page/Page'

export default function PageTravel({ location }) {
  return (
    <Page
      title="Travel | Liedtke Cozby 2022"
      className="page-travel"
      location={location}
    >
      <section className="lg:mt-32">
        <h1 className="text-4xl lg:text-5xl my-8">Travel</h1>
        <p className="prose mx-auto">Recommendations for getting to Eagle River, Wisconsin.</p>
      </section>
    </Page>
  )
}
