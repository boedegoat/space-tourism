import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from './Link'
import { cn } from '../lib/utils'

const NavBar = () => {
  const navLinks = ['home', 'destination', 'crew', 'technology']
  const [openMobileNav, setOpenMobileNav] = useState(false)

  const slideMobileNav = () => setOpenMobileNav(true)
  const closeMobileNav = () => setOpenMobileNav(false)

  return (
    <nav className="sticky top-0 z-40 py-6 font-barlow-condensed">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <img src="/shared/logo.svg" alt="space logo" className="h-10 w-10" />
        </Link>
        <button onClick={slideMobileNav}>
          <img src="/shared/icon-hamburger.svg" alt="hamburger icon" />
        </button>
      </div>
      <MobileNav {...{ closeMobileNav, openMobileNav, navLinks }} />
    </nav>
  )
}

interface IMobileNav {
  openMobileNav: boolean
  closeMobileNav: () => void
  navLinks: string[]
}

const MobileNav = ({ openMobileNav, closeMobileNav, navLinks }: IMobileNav) => {
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
            const path = `/${link == 'home' ? '' : link}`
            return (
              <Link
                key={link}
                href={path}
                className={cn(
                  'flex h-[31px] items-center border-white uppercase tracking-[2.7px] text-white',
                  router.pathname == path ? 'border-r-4' : ''
                )}
              >
                <span className="mr-[11px] font-bold">0{index}</span>
                {link}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default NavBar
