import type { GetServerSideProps, NextPage } from 'next'
import { FC } from 'react'
import Container from '../components/Container'
import Heading2 from '../components/Heading2'
import Link from '../components/Link'
import SpaceData from '../data.json'
import { cn, formatPath } from '../lib/utils'
const { destinations } = SpaceData

interface IDestination {
  destination: {
    tab: string
    names: string[]
    data: {
      name: string
      images: {
        png: string
        webp: string
      }
      description: string
      distance: string
      travel: string
    }
  }
}

const Destination: NextPage<IDestination> = ({ destination }) => {
  return (
    <Container
      screenClassName="bg-destination-mobile tablet:bg-destination-tablet desktop:bg-destination-desktop"
      className="desktop:wrapper"
    >
      <Heading2 number={1}>PICK YOUR DESTINATION</Heading2>
      <Planet destination={destination} />
    </Container>
  )
}

export default Destination

const Planet: FC<IDestination> = ({ destination }) => {
  return (
    <div className="wrapper mt-8 pb-8 tablet:mt-[60px] tablet:pb-[62px] desktop:mt-[64px] desktop:flex desktop:items-end desktop:space-x-[157px]">
      <img
        src={formatPath(destination.data.images.webp)}
        alt={destination.data.name}
        className="mx-auto h-[170px] w-[170] tablet:h-[300px] tablet:w-[300px] desktop:h-[445px] desktop:w-[445px]"
      />
      <div className="mt-[26px] flex flex-col items-center tablet:mt-[53px] desktop:items-start desktop:text-left">
        {/* tabs */}
        <div className="flex space-x-[26px]">
          {destination.names.map((destinationName) => (
            <Link
              href={{ query: { destinationTab: destinationName } }}
              scroll={false}
              key={destinationName}
              className={cn(
                'border-white pb-2 font-barlow-condensed text-sm uppercase tracking-[2.36px] hover:border-b-[3px] hover:border-white/50 tablet:text-base tablet:tracking-[2.7px]',
                destination.tab == destinationName
                  ? 'border-b-[3px] text-white'
                  : 'text-blue-100'
              )}
            >
              {destinationName}
            </Link>
          ))}
        </div>
        <h1 className="mt-5 font-bellefair text-[56px] uppercase text-white tablet:mt-8 tablet:text-[80px] desktop:text-[100px]">
          {destination.data.name}
        </h1>
        <p className="text-center text-[15px] text-blue-100 tablet:mt-2 desktop:text-left desktop:text-lg desktop:leading-[32px]">
          {destination.data.description}
        </p>
        <hr className="my-8 w-full border-gray tablet:mt-[49px]" />
        <div className="space-y-8 tablet:flex tablet:space-y-0 tablet:space-x-16">
          <div className="planet-detail">
            <h3>AVG. DISTANCE</h3>
            <h2>{destination.data.distance}</h2>
          </div>
          <div className="planet-detail">
            <h3>EST. TRAVEL TIME</h3>
            <h2>{destination.data.travel}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const destinationTab = query.destinationTab as string
  if (!destinationTab) {
    return {
      redirect: {
        permanent: false,
        destination: '/destination?destinationTab=moon',
      },
    }
  }

  const destinationNames = destinations.map((destination) =>
    destination.name.toLowerCase()
  )

  if (!destinationNames.includes(destinationTab)) {
    return {
      notFound: true,
    }
  }

  const destinationData = destinations.find(
    (destination) => destination.name.toLowerCase() == destinationTab
  )

  const destination = {
    tab: destinationTab,
    names: destinationNames,
    data: destinationData,
  }

  return {
    props: {
      destination,
    },
  }
}
