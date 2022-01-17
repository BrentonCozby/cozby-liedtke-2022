import * as React from 'react'
import '@styles/index.scss'
import './page.scss'
import { Helmet } from 'react-helmet'

import HeaderMain from '@components/HeaderMain/HeaderMain'
import Signature from '@components/Signature/Signature'
import FooterMain from '@components/FooterMain/FooterMain'
import classNames from 'classnames'

export default function Page({
  children,
  location,
  className,
  title,
  footerHeroImage = () => null,
}) {
  return (
    <div className={classNames('page flex flex-col', className)}>
      <Helmet>
        <title>{title || 'Liedtke Cozby 2022'}</title>
      </Helmet>

      <HeaderMain location={location} />

      <main className="grow">
        {children}
        <Signature />
        {footerHeroImage()}
      </main>

      <FooterMain />
    </div>
  )
}
