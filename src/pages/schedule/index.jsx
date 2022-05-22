import React from 'react'
import Page from '@components/Page/Page'
import './schedule.scss'

export default function PageSchedule({ location }) {
  return (
    <Page
      title="Schedule | Liedtke Cozby 2022"
      className="page-schedule"
      location={location}
      footerHeroImage={() => <div className="footer-hero-image" />}
    >
      <section className="lg:mt-32">
        <h1 className="text-4xl lg:text-5xl my-8">Schedule</h1>
        <p className="prose mx-auto mb-16">This is going to be fun. For the full schedule, <a href="https://docs.google.com/spreadsheets/d/1vpGumMfxQARb1mg4cozGiCvbwKp7GT4GVTFJL_PZti0" target="_blank" rel="noreferrer">click here</a>.</p>
      </section>

      <section className="prose">
        <h2 className="mb-12 uppercase tracking-wider text-2xl">
          Friday, May 27<sup className="lowercase">th</sup>
        </h2>
        <p>Arrival Day.</p>
        <p>Everyone will be arriving at Indian Point Manor, our accommodation for the weekend. We'll have a pizza dinner and then roast s'mores by the fire.</p>
      </section>

      <hr className="w-3/4 mx-auto" />

      <section className="prose">
        <h2 className="mb-12 uppercase tracking-widest text-2xl">
          Saturday, May 28<sup className="lowercase">th</sup>
        </h2>
        <p>Fun &amp; Boating.</p>
        <p>Today is a day to have fun and get to know each other. We'll have several activities available, such as taking the boat out on the lake, hanging out at the boathouse, and a Wedding Olympics.</p>
        <p>The rehearsal dinner will take place in the evening at the <a href="https://www.blackforest3lakes.com/" target="_blank" rel="noreferrer">Black Forrest Pub & Grill</a>.</p>
      </section>

      <hr className="w-3/4 mx-auto" />

      <section className="prose">
        <h2 className="mb-12 uppercase tracking-widest text-2xl">
          Sunday, May 29<sup className="lowercase">th</sup>
        </h2>
        <p>Wedding Day!</p>
        <p>After breakfast, we'll begin setting up for the ceremony and then break for lunch. After lunch, everyone can get ready for the ceremony.</p>
        <p>The ceremony will be at 5:00 PM. Photos &amp; cocktails come afterwards until dinner at 7:00 PM. There will be a live acoustic performance during dinner from <a href="https://www.theknot.com/marketplace/maygen-lacey-music-acoustic-duo-minneapolis-mn-1070713" target="_blank" rel="noreferrer">Maygen Lacy</a>.</p>
        <p>After sunset, there will be a small surprise and then we'll go inside to the bartender reception with upbeat music.</p>
      </section>

      <hr className="w-3/4 mx-auto" />

      <section className="prose">
        <h2 className="mb-12 uppercase tracking-widest text-2xl">
          Monday, May 30<sup className="lowercase">th</sup>
        </h2>
        <p>Memorial Day.</p>
        <p>After breakfast, we'll hang out around the estate. Possible activities include fishing, board games, pool/darts at the boathouse, and renting ATVs at a nearby ATV park.</p>
        <p>For lunch, we'll have a traditional Memorial Day barbecue.</p>
        <span className="text-5xl">🇺🇸</span>
      </section>

      <hr className="w-3/4 mx-auto" />

      <section className="prose">
        <h2 className="mb-12 uppercase tracking-widest text-2xl">
          Tuesday, May 31<sup className="lowercase">th</sup>
        </h2>
        <p>Checkout Day.</p>
        <p>8:00 AM checkout.</p>
      </section>
    </Page>
  )
}
