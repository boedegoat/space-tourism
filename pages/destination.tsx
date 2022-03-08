import type { GetServerSideProps, NextPage } from 'next'
import { FC } from 'react'
import Container from '../components/Container'
import Heading2 from '../components/Heading2'
import Link from '../components/Link'
import SpaceData from '../data.json'
import { cn, formatPath } from '../lib/utils'
const { destinations } = SpaceData

interface IDestination {
  destinationTab: string
}

const Destination: NextPage<IDestination> = ({ destinationTab }) => {
  return (
    <Container screenClassName="bg-destination-mobile" className="wrapper">
      <Heading2 number={1}>PICK YOUR DESTINATION</Heading2>
      <Planet destinationTab={destinationTab} />
    </Container>
  )
}

export default Destination

interface IPlanet extends IDestination {}

const Planet: FC<IPlanet> = ({ destinationTab }) => {
  const destinationData = destinations.find(
    (destination) => destination.name.toLowerCase() == destinationTab
  )
  const destinationNames = destinations.map((destination) =>
    destination.name.toLowerCase()
  )

  return destinationData ? (
    <div className="mt-8">
      <img
        src={formatPath(destinationData.images.webp)}
        alt={destinationData.name}
        className="mx-auto h-[170px] w-[170]"
      />
      <div className="mt-[26px] flex flex-col items-center">
        {/* tabs */}
        <div className="flex space-x-[26px]">
          {destinationNames.map((destinationName) => (
            <Link
              href={{ query: { destinationTab: destinationName } }}
              scroll={false}
              key={destinationName}
              className={cn(
                'border-white pb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] hover:border-b-[3px] hover:border-white/50',
                destinationTab == destinationName
                  ? 'border-b-[3px] text-white'
                  : 'text-blue-100'
              )}
            >
              {destinationName}
            </Link>
          ))}
        </div>
        <h1 className="mt-5 font-bellefair text-[56px] uppercase text-white">
          {destinationData.name}
        </h1>
        <p className="text-center text-[15px] text-blue-100">
          {destinationData.description}
        </p>
        <hr className="my-8 w-full border-gray" />
        <div className="mb-8 space-y-8">
          <div className="planet-detail">
            <h3>AVG. DISTANCE</h3>
            <h2>{destinationData.distance}</h2>
          </div>
          <div className="planet-detail">
            <h3>EST. TRAVEL TIME</h3>
            <h2>{destinationData.travel}</h2>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.destinationTab) {
    return {
      redirect: {
        permanent: false,
        destination: '/destination?destinationTab=moon',
      },
    }
  }

  return {
    props: {
      destinationTab: query.destinationTab,
    },
  }
}
