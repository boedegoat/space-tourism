import { GetServerSideProps, NextPage } from 'next'
import { FC } from 'react'
import Container from '../components/Container'
import Heading2 from '../components/Heading2'
import Link from '../components/Link'
import SpaceData from '../data.json'
import { cn, formatPath, getNameSlug } from '../lib/utils'
const { technology } = SpaceData

interface Itechnology {
  technologyTab: string
}

const Technology: NextPage<Itechnology> = ({ technologyTab }) => {
  return (
    <Container
      screenClassName="bg-technology-mobile tablet:bg-technology-tablet desktop:bg-technology-desktop"
      className="desktop:wrapper"
    >
      <Heading2 number={3}>SPACE LAUNCH 101</Heading2>
      <Tech technologyTab={technologyTab} />
    </Container>
  )
}

interface ITech extends Itechnology {}

const Tech: FC<ITech> = ({ technologyTab }) => {
  const technologyData = technology.find(
    (tech) => getNameSlug(tech.name) == technologyTab
  )!
  const technologyNames = technology.map((tech) => getNameSlug(tech.name))

  return technologyData ? (
    <div className="mt-8 tablet:mt-[60px] desktop:flex desktop:items-center">
      {/* mobile - tablet image */}
      <img
        src={formatPath(technologyData.images.landscape)}
        alt={technologyData.name}
        className="h-[170px] w-full object-cover tablet:h-[310px] desktop:hidden"
      />
      <div className="mt-[34px] tablet:mt-[56px] desktop:flex desktop:space-x-20">
        {/* tabs */}
        <div className="flex justify-center space-x-4 desktop:flex-col desktop:space-x-0 desktop:space-y-8">
          {technologyNames.map((techName, index) => (
            <Link
              key={techName}
              href={{ query: { technologyTab: techName } }}
              scroll={false}
              className={cn(
                'inline-flex h-[40px] w-[40px] items-center justify-center rounded-full font-bellefair transition-all hover:border-white tablet:h-[60px] tablet:w-[60px] tablet:text-2xl desktop:h-[80px] desktop:w-[80px]',
                technologyTab == techName
                  ? 'bg-white text-blue-800'
                  : 'border border-white/25 text-white'
              )}
            >
              {index + 1}
            </Link>
          ))}
        </div>
        <div className="wrapper mt-[26px] pb-[26px] text-center tablet:mt-[44px] desktop:text-left">
          <h3 className="font-barlow-condensed text-sm tracking-[2.36px] text-blue-100 tablet:text-base tablet:tracking-[2.7px]">
            THE TERMINOLOGY…
          </h3>
          <h1 className="mt-[9px] font-bellefair text-2xl uppercase text-white tablet:mt-4 tablet:text-[40px] desktop:text-[56px] desktop:leading-normal">
            {technologyData.name}
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] text-blue-100 tablet:text-base tablet:leading-[28px] desktop:text-lg desktop:leading-[32px]">
            {technologyData.description}
          </p>
        </div>
      </div>
      {/* desktop image */}
      <img
        src={formatPath(technologyData.images.portrait)}
        alt={technologyData.name}
        className="ml-12 hidden desktop:inline-block"
      />
    </div>
  ) : null
}

export default Technology

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.technologyTab) {
    return {
      redirect: {
        permanent: false,
        destination: '/technology?technologyTab=launch-vehicle',
      },
    }
  }
  return {
    props: {
      technologyTab: query.technologyTab,
    },
  }
}
