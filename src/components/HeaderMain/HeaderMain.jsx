import React, { useEffect, useState } from 'react'
import './header-main.scss'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import useWindowSize from '@utils/useWindowSize'

export default function HeaderMain({ location }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { ref: intersectionRef, inView: isSentinelInView } = useInView({ threshold: 0 });
  const menuOnly = !isSentinelInView;
  const windowSize = useWindowSize()
  const [headerHeight, setHeaderHeight] = useState('3rem') // --header-main-mobile-height

  useEffect(() => {
    let newHeight = '3rem'

    if (windowSize.width >= 1024) {
      newHeight = menuOnly ? '3rem' : '6rem'
    }

    setHeaderHeight(newHeight)
  }, [windowSize.width, menuOnly])

  function onMenuBtnClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  function MenuItem({ to, children, ...props }) {
    function onClick() {
      if (location?.pathname === to) {
        setIsMenuOpen(false)
      }

      if (props.onClick) {
        props.onClick(arguments)
      }
    }

    return (
      <li>
        <Link
          to={to}
          activeClassName="is-active"
          partiallyActive={true}
          className="block text-lg p-4 uppercase lg:p-0 lg:mx-4 lg:text-xs"
          {...props}
          onClick={onClick}
        >
          {children}
        </Link>
      </li>
    )
  }

  return (
    <React.Fragment>
      <div className="sticky-sentinel" ref={intersectionRef} />
      <header
        className={classNames('header-main shrink-0 fixed z-50 flex justify-center items-center drop-shadow')}
        style={{height: headerHeight}}
      >
        <button
          className={classNames(
            'header-main__menu-button',
            'z-20',
            {
              'is-open': isMenuOpen,
            },
          )}
          onClick={onMenuBtnClick}
        >
          <span className="header-main__menu-button__bar bar-top"></span>
          <span className="header-main__menu-button__bar bar-middle"></span>
          <span className="header-main__menu-button__bar bar-bottom"></span>
        </button>

        <span className="hidden lg:inline absolute font-bold left-6 top-4 text-xs tracking-wider">
          May 29, 2022
        </span>

        <span className="hidden lg:inline absolute font-bold right-6 top-4 text-xs tracking-wider">
          Eagle River, WI
        </span>

        <Link
          to="/"
          className={classNames(
            'names text-2xl lg:text-4xl m-0 lg:mt-[-1rem]',
            {
              'hidden': windowSize.width >= 1024 && menuOnly,
            },
          )}
        >
          Heidi &amp; Brenton
        </Link>

        <nav
          className={classNames(
            'header-main__menu',
            'absolute z-10 m-0 py-20 px-10 w-full top-0 text-center',
            'lg:z-0 lg:p-0 lg:bottom-1 lg:top-[unset]',
            {
              'is-open': isMenuOpen,
              'lg:bottom-[initial]': windowSize.width >= 1024 && menuOnly,
            },
          )}
        >
          <ul className="w-full divide-y divide-gray-400 lg:flex lg:justify-center lg:divide-none">
            <MenuItem to="/" partiallyActive={false}>Home</MenuItem>
            <MenuItem to="/schedule">Schedule</MenuItem>
            <MenuItem to="/travel">Travel</MenuItem>
            <MenuItem to="/accommodations">Accommodations</MenuItem>
            <MenuItem to="/faqs">FAQS</MenuItem>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )
}
