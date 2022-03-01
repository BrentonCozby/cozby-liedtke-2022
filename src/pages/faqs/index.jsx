import React from 'react'
import './faqs.scss'
import Page from '@components/Page/Page'
import { StaticImage } from 'gatsby-plugin-image'

export default function PageFAQs({ location }) {
  return (
    <Page
      title="FAQs | Liedtke Cozby 2022"
      className="page-faqs"
      location={location}
      footerHeroImage={() => <div className="footer-hero-image" />}
    >
      <section className="lg:mt-32 prose">
        <h1 className="text-4xl lg:text-5xl my-8 font-normal">FAQs</h1>
        <p className="mx-auto mb-20">If you have any other questions, please reach out to our wedding planners (Brenton and Heidi).</p>
      </section>

      <section className="prose prose-h3:mt-16">
        <h3>When do I need to RSVP?</h3>
        <p>Please RSVP by February 28th by calling, texting, or emailing either Heidi or Brenton.</p>

        <h3>What will the weather be like in Northern Wisconsin at the end of May?</h3>
        <p>Unpredictable! Looking back on previous years, weather fluctuates a lot from the high 50s to the mid 70s. Please check out the weather when it gets closer to the date and pack accordingly. The sun sets around 8:40pm by the end of May, so layers are great!</p>

        <h3>How do I get to Eagle River, Wisconsin?</h3>
        <p>We built a dedicated <a href="/travel" target="_blank" rel="noreferrer">travel page</a> for this question.</p>

        <h3>How many people are attending?</h3>
        <p>We expect 20 including Heidi and Brenton. Oh, and Dolly! 🐾</p>

        <h3>What will we be doing during the weekend?</h3>
        <p>In addition to our wedding on Sunday, we planned many fun activities including renting a pontoon boat. Our accommodation also has a basketball court, tennis court, game room, shuffleboard, board games, camp fire, and so much more. Please refer to the schedule page for more information.</p>

        <h3>Do you have a hotel block for guests?</h3>
        <p>Sort of--all guests will be able to stay at the beautiful lake-side mansion Indian Point Manor (see the <a href="/accommodations" target="_blank" rel="noreferrer">accommodations page</a> for more details). Your save-the-date says which room we think will be best for you in the manor.</p>

        <h3>What are the costs associated with the weekend?</h3>
        <p>When thinking about what we wanted in a wedding, we kept coming back to the idea of being able to spend quality time with the people we care about most. It may be a little non-traditional, but a micro-wedding felt more us. The private estate we booked is in lieu of hotels and accommodates up to 40 people. Bedrooms vary, so on your save-the-date we listed the room we are holding for you and the cost associated. This fee is a lump sum that includes food and drink for the weekend (excluding some meals like the wedding dinner, which--of course--is on us). Please send us the payment by check, Venmo, Zelle, or Paypal by March 15.</p>
        <p>Eagle River offers many outdoor activities such as ATV/UTV rentals and trails. If enough people are interested, we can arrange to rent ATV/UTVs for Monday (Memorial day). The cost of the rentals vary around $75-150/person. This is completely optional and will only happen if enough people are interested.</p>
        <p>If you have any questions or concerns, please reach out to Brenton or Heidi as soon as possible.</p>

        <h3>What kind of food and drinks will be served throughout the weekend?</h3>
        <p>A variety! Most of the meals will be prepared at the house, so please let us know if you have any allergies or dietary restrictions.</p>
        <p>The wedding dinner will be a catered sit down meal. We will update the website with the menu options when it gets closer to the date.</p>

        <h3>I am not able to attend the full weekend, is that okay?</h3>
        <p>We hope that you are able to stay from Friday evening to Tuesday morning, but understand if you have a conflict. If you need to arrive late or leave early, please book your flight into Rhinelander-Oneida airport, otherwise you will need to arrange your own transportation to and from the airport.</p>
      </section>

      <section className="prose prose-h3:mt-16">
        <h2 className="text-stone-400">FAQS About the Ceremony</h2>

        <h3 style={{marginTop: '2rem'}}>What should I wear?</h3>
        <p>Our wedding will be a semi-formal affair beginning in the early evening. If you would like to dress according to the theme, our color palette is sage green, forest green, blush pink, gold, and black.</p>
        <StaticImage
          src="../../images/color-palette.png"
          alt="Liedkte Cozby 2022 Color Palette"
          className="rounded-md drop-shadow-lg"
          style={{transform: 'scaleX(-1)'}}
        />
        <p>We are planning to host the ceremony and dinner outdoors, so please dress appropriately for the weather. We will have patio heaters and a fire going during dinner. In case of rain or the cold, we will move the reception inside.</p>

        <h3>Can I bring a date?</h3>
        <p>Given space limitations, we will only be able to accommodate those listed on the invitation and have planned a weekend for only our closest family and friends.</p>

        <h3>Will there be someone to do hair and makeup?</h3>
        <p>Yes! Heidi arranged for a professional stylist to come to the manor on the wedding day. Her prices vary on the service, but are about $55-90 for make up and $50-70 for hair. If you are interested in having your hair and/or makeup done professionally, please confirm with Heidi by February 18th.</p>

        <h3>Where are you registered?</h3>
        <p>We are not! Celebrating our love with all of you is the perfect gift. We recognize that attending a destination wedding in remote Northern Wisconsin may be a big commitment and are so appreciative of those able to join.</p>
      </section>
    </Page>
  )
}
