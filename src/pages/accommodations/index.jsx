import React from 'react'
import Page from '@components/Page/Page'
import './accommodations.scss'
import { StaticImage } from 'gatsby-plugin-image'

export default function PageAccommodations({ location }) {
  return (
    <Page
      title="Accommodations | Liedtke Cozby 2022"
      className="page-accommodations"
      location={location}
      footerHeroImage={() => <div className="footer-hero-image" />}
    >
      <section className="lg:mt-32 prose">
        <h1 className="text-4xl lg:text-5xl mt-8 font-normal">Accommodations</h1>
        <p>When thinking about what we wanted in a wedding, we kept coming back to the idea of being able to spend quality time with the people we care about most. It may be a little non-traditional, but a micro-wedding felt more us. The estate we booked is in lieu of hotels. Bedrooms vary, so on your save-the-date, we listed the room we are holding for you and the cost associated.</p>
        <p>We've reserved <a href="https://www.indianpointmanor.com/" target="_blank" rel="noreferrer">Indian Point Manor</a> from May 27 to May 31, which can accommodate everyone.</p>
      </section>

      <section className="prose">
        <StaticImage
          src="../../images/ipm-main-house-exterior.jpeg"
          alt="Indian Point Manor Main House Exterior"
          className="prose-img:rounded-md"
        />
        <p>Located in Wisconsin's Northwoods on Catfish Lake, Indian Point Manor is a 7,500 square foot historic home built in 1926 by Former Chicago Mayor Edward Kelly. In an era of mobsters and corruption, Kelly might have had some illegal help in building his mansion by siphoning Chicago public resources.</p>
        <p>With his new mansion, Mayor Kelly became neighbors to Mont Tennes, Chicago's King of Gamblers. The two friends turned the boathouse of Indian Point Manor into a small casino and chapel (ironic or convenient?).</p>
        <StaticImage
          src="../../images/ipm-sunroom.jpeg"
          alt="Indian Point Manor Main House Sunroom"
          className="prose-img:rounded-md"
        />
        <p>In 2019, the manor was purchased and completely renovated by the new owners. Today, the manor features the main house, a carriage house, and a cottage house with 9 bedrooms, 7 bathrooms, and 2 half baths. Other features include a boat house game room, a tennis/basketball court, a shuffleboard, a bar, a hot tub, a fire pit, and a grand piano.</p>
        <p>The manor is located on the ancestral land of the Chippewa, Potawatomi, Anishinaabe, and Menominee people who have inhabited the region for over 4600 years.</p>
        <StaticImage
          src="../../images/ipm-estate-arial.jpeg"
          alt="Indian Point Manor Arial View"
          className="prose-img:rounded-md"
        />
      </section>

      <section className="section-gallery">
        <h3 className="text-2xl">Gallery</h3>
        <StaticImage
          src="../../images/ipm-great-room-fireplace.jpeg"
          alt="Indian Point Manor Great Room"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-main-house-bar.jpeg"
          alt="Indian Point Manor Main House Bar"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-boathouse-exterior.jpeg"
          alt="Indian Point Manor Boathouse Exterior"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-boathouse-porch.jpeg"
          alt="Indian Point Manor Boathouse Porch"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-beach-chairs.jpeg"
          alt="Indian Point Manor Beach Chairs"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-sunroom-2.jpeg"
          alt="Indian Point Manor Sunroom 2"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
        <StaticImage
          src="../../images/ipm-piano.jpeg"
          alt="Indian Point Manor Grand Piano"
          className="prose-img:rounded-md my-4 lg:m-4"
        />
      </section>
    </Page>
  )
}
