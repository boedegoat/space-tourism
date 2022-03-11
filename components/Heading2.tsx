import { FC } from 'react'

interface IHeading2 {
  number?: number
}

const Heading2: FC<IHeading2> = ({ children, number }) => {
  return (
    <h2 className="text-center font-barlow-condensed tracking-[2.7px] text-white tablet:mt-10 tablet:pl-[39px] tablet:text-left tablet:text-xl tablet:tracking-[3.38px] desktop:mt-[76px] desktop:pl-0 desktop:text-[28px] desktop:tracking-[4.72px]">
      <span className="font-bold opacity-25">0{number}</span> {children}
    </h2>
  )
}

export default Heading2
