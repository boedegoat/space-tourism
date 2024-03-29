import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from './Link'
import { cn, getCurrentPath } from '../lib/utils'

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'destination', path: '/destination', slug: '/moon' },
  { name: 'crew', path: '/crew', slug: '/douglas-hurley' },
  { name: 'technology', path: '/technology', slug: '/launch-vehicle' },
]

const NavBar = () => {
  const router = useRouter()
  const [openMobileNav, setOpenMobileNav] = useState(false)

  useEffect(() => {
    const bodyClass = document.body.classList
    if (openMobileNav) bodyClass.add('overflow-hidden')
    else bodyClass.remove('overflow-hidden')
  }, [openMobileNav])

  const slideMobileNav = () => setOpenMobileNav(true)
  const closeMobileNav = () => setOpenMobileNav(false)

  return (
    <nav className="relative z-40 font-barlow-condensed desktop:pt-10">
      <div className="nav-wrapper flex items-center justify-between py-6 tablet:py-0">
        <Link href="/" className="my-6">
          <img
            src="/shared/logo.svg"
            alt="space logo"
            className="h-10 w-10 tablet:h-12 tablet:w-12"
          />
        </Link>
        <div className="absolute left-40 z-10 hidden h-[1px] w-[32%] bg-white/25 desktop:block"></div>
        {/* desktopNav */}
        <div className="hidden w-[61%] space-x-[37px] self-stretch bg-white/[4%] px-12 tablet:flex desktop:space-x-12 desktop:px-[123px] desktop:backdrop-blur-[81.55px]">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={link.path}
                href={link.path + (link.slug || '')}
                className={cn(
                  'flex items-center border-b-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] text-white hover:border-white/50 desktop:text-base desktop:tracking-[2.7px]',
                  getCurrentPath(router) == link.path
                    ? 'border-white'
                    : 'border-transparent'
                )}
              >
                <span className="mr-[11px] hidden font-bold desktop:inline-block">
                  0{index}
                </span>
                {link.name}
              </Link>
            )
          })}
        </div>
        <button className="tablet:hidden" onClick={slideMobileNav}>
          <img src="/shared/icon-hamburger.svg" alt="hamburger icon" />
        </button>
        <MobileNav {...{ closeMobileNav, openMobileNav, navLinks }} />
      </div>
    </nav>
  )
}

interface IMobileNav {
  openMobileNav: boolean
  closeMobileNav: () => void
}

const MobileNav = ({ openMobileNav, closeMobileNav }: IMobileNav) => {
  const router = useRouter()

  return (
    <>
      <div
        className={cn('fixed', openMobileNav ? 'inset-0' : '')}
        onClick={closeMobileNav}
      />
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[67%] backdrop-blur-[81.55px] transition-all duration-300 ease-out',
          openMobileNav ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="m-6 flex h-10 items-center justify-end">
          <button onClick={closeMobileNav}>
            <img src="/shared/icon-close.svg" alt="close icon" />
          </button>
        </div>
        <div className="mt-[64.95px] flex flex-col space-y-8 p-6 pr-0">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={link.name}
                href={link.path + (link.slug || '')}
                className={cn(
                  'flex h-[31px] items-center border-white uppercase tracking-[2.7px] text-white',
                  getCurrentPath(router) == link.path ? 'border-r-4' : ''
                )}
              >
                <span className="mr-[11px] font-bold">0{index}</span>
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default NavBar
