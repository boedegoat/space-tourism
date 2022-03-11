import Head from 'next/head'
import { FC } from 'react'
import { cn } from '../lib/utils'
import NavBar from './NavBar'

interface IContainer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  screenClassName?: string
}

const Container: FC<IContainer> = ({ children, screenClassName, ...props }) => {
  return (
    <div className={cn('min-h-screen font-barlow', screenClassName)}>
      <Head>
        <title>Space Tourism</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
      </Head>
      <NavBar />
      <main {...props}>{children}</main>
    </div>
  )
}

export default Container
