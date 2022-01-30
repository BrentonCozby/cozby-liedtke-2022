import React from 'react'
import './travel.scss'
import Page from '@components/Page/Page'

export default function PageTravel({ location }) {
  return (
    <Page
      title="Travel | Liedtke Cozby 2022"
      className="page-travel"
      location={location}
      footerHeroImage={() => <div className="footer-hero-image" />}
    >
      <section className="lg:mt-32 prose">
        <h1 className="text-4xl lg:text-5xl my-8 font-normal">Travel</h1>
        <p className="mx-auto mb-20">Recommendations for getting to Indian Point Manor in Eagle River, Wisconsin.</p>
      </section>

      <section className="prose">
        <p>Rhinelander-Oneida County airport is the closest airport to Indian Point Manor at about a 45 minute drive. The airport is operated by Delta with service to Minneapolis. Pick up and drop off by someone from Heidi's family can be arranged from Rhinelander-Oneida airport. Drop-off on Tuesday evening is also possible for flights leaving from O'Hare because we will have several people driving back to the Chicago area.</p>
        <p>Other airports in the region are listed below. If you plan on flying into one of these airports, we recommend renting a car and carpooling with other guests.</p>
      </section>

      <section>
        <iframe
          className="map-iframe drop-shadow-lg"
          title="Travel Waypoints"
          loading="lazy"
          src="https://www.google.com/maps/d/embed?mid=1Gjj8ydU7P_Tt0a3sdDfGhb0ZbR7B6J2d&ehbc=2E312F"
        />
      </section>

      <section className="prose">
        <h3>Airport Driving Durations</h3>
        <ul className="text-left max-w-sm m-auto">
          <li>
            <span className="uppercase tracking-widest font-bold">0h:45m</span> - Rhinelander-Oneida County
            <ul>
              <li>serviced by Delta</li>
              <li>pick up &amp; drop off available</li>
            </ul>
          </li>
          <li>
            <span className="uppercase tracking-widest font-bold">1h:48m</span> - Central Wisconsin Airport
            <ul>
              <li>serviced by Delta and American</li>
            </ul>
          </li>
          <li><span className="uppercase tracking-widest font-bold">2h:44m</span> - Green Bay Austin Straubel</li>
          <li><span className="uppercase tracking-widest font-bold">3h:40m</span> - Dane County Regional Airport</li>
          <li><span className="uppercase tracking-widest font-bold">4h:19m</span> - Milwaukee Airport</li>
          <li><span className="uppercase tracking-widest font-bold">4h:19m</span> - Minneapolis - St. Paul</li>
          <li><span className="uppercase tracking-widest font-bold">5h:17m</span> - Chicago O'Hare</li>
        </ul>
      </section>
    </Page>
  )
}
