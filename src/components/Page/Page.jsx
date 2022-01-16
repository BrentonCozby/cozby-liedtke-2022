import React from 'react'
import '@styles/index.scss'
import './page.scss'
import { Helmet } from 'react-helmet'

import HeaderMain from '@components/HeaderMain/HeaderMain'
import Signature from '@components/Signature/Signature'
import FooterMain from '@components/FooterMain/FooterMain'

export default function Page({
  children,
  location,
  title,
}) {
  return (
    <div className="page flex flex-col">
      <Helmet>
        <title>{title || 'Liedtke Cozby 2022'}</title>
      </Helmet>

      <HeaderMain location={location} />

      <main className="grow">
        {children}
        <Signature />
      </main>

      <FooterMain />
    </div>
  )
}
