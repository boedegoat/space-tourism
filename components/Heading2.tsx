import { FC } from 'react'

interface IHeading2 {
  number?: number
}

const Heading2: FC<IHeading2> = ({ children, number }) => {
  return (
    <h2 className="text-center font-barlow-condensed tracking-[2.7px] text-white">
      <span className="font-bold opacity-25">0{number}</span> {children}
    </h2>
  )
}

export default Heading2
