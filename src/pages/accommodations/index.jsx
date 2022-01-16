import React from 'react'
import Page from '@components/Page/Page'

export default function PageAccommodations({ location }) {
  return (
    <Page
      title="Accommodations | Liedtke Cozby 2022"
      className="page-accommodations"
      location={location}
    >
      <section className="lg:mt-32">
        <h1 className="text-4xl lg:text-5xl my-8">Accommodations</h1>
        <p className="prose mx-auto">The bedroom &amp; bathroom situation</p>
      </section>

      <section>

      </section>
    </Page>
  )
}
