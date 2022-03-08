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
    <Container screenClassName="bg-technology-mobile">
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
  console.log(technologyData)

  return technologyData ? (
    <div className="mt-8">
      <img
        src={formatPath(technologyData.images.landscape)}
        alt={technologyData.name}
        className="h-[170px] w-full object-cover"
      />
      <div className="mt-[34px]">
        {/* tabs */}
        <div className="flex justify-center space-x-4">
          {technologyNames.map((techName, index) => (
            <Link
              key={techName}
              href={{ query: { technologyTab: techName } }}
              scroll={false}
              className={cn(
                'inline-flex h-[40px] w-[40px] items-center justify-center rounded-full font-bellefair ',
                technologyTab == techName
                  ? 'bg-white text-blue-800'
                  : 'border-2 border-gray text-white'
              )}
            >
              {index + 1}
            </Link>
          ))}
        </div>
        <div className="wrapper mt-[26px] pb-[26px] text-center">
          <h3 className="font-barlow-condensed text-sm tracking-[2.36px] text-blue-100">
            THE TERMINOLOGY…
          </h3>
          <h1 className="mt-[9px] font-bellefair text-2xl uppercase text-white">
            {technologyData.name}
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] text-blue-100">
            {technologyData.description}
          </p>
        </div>
      </div>
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
