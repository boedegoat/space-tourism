import Head from 'next/head'
import { FC } from 'react'
import NavBar from './NavBar'

interface IContainer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const Container: FC<IContainer> = ({ children, ...props }) => {
  return (
    <div className="bg-home-mobile min-h-screen font-barlow">
      <Head>
        <title>Space Tourism</title>
      </Head>
      <NavBar />
      <main {...props}>{children}</main>
    </div>
  )
}

export default Container
