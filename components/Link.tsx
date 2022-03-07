import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'

interface ILink extends React.PropsWithChildren<LinkProps> {
  className: string
}

const Link: FC<ILink> = ({ children, className, ...nextLinkProps }) => {
  return (
    <NextLink {...nextLinkProps}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
