import Head from 'next/head'
import { FC } from 'react'
import NavBar from './NavBar'

const Container: FC = ({ children }) => {
  return (
    <div className="bg-home-mobile min-h-screen font-barlow">
      <Head>
        <title>Space Tourism</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Container
