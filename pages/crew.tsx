import { GetServerSideProps, NextPage } from 'next'
import Container from '../components/Container'
import Heading2 from '../components/Heading2'
import Link from '../components/Link'
import SpaceData from '../data.json'
import { cn, formatPath, getNameSlug } from '../lib/utils'
const { crew: crews } = SpaceData

interface ICrew {
  crewTab: string
}

const Crew: NextPage<ICrew> = ({ crewTab }) => {
  const crewData = crews.find((crew) => getNameSlug(crew.name) == crewTab)!
  const crewNames = crews.map((crew) => getNameSlug(crew.name))
  console.log(crewData)

  return (
    <Container
      screenClassName="bg-crew-mobile tablet:bg-crew-tablet desktop:bg-crew-desktop flex flex-col"
      className="desktop:wrapper desktop:flex desktop:flex-grow desktop:flex-col"
    >
      <Heading2 number={2}>MEET YOUR CREW</Heading2>
      <div className="wrapper mt-8 flex flex-grow flex-col space-y-8 pb-8 tablet:px-14 tablet:pb-0 desktop:mt-0 desktop:flex-row desktop:items-stretch desktop:px-0">
        {/* slider */}
        <img
          src={formatPath(crewData.images.webp)}
          alt={crewData.name}
          className="mx-auto h-[223px] w-[327px] border-b-2 border-gray object-contain tablet:order-2 tablet:h-[532px] tablet:w-full tablet:border-b-0 desktop:h-auto"
        />
        <div className="mt-8 flex justify-center space-x-4 tablet:hidden">
          {crewNames.map((crewName, index) => (
            <Link
              href={{ query: { crewTab: crewName } }}
              key={index}
              scroll={false}
              className={cn(
                'inline-block h-[10px] w-[10px] rounded-full bg-white transition-opacity hover:opacity-50',
                crewTab == crewName ? 'opacity-1' : 'opacity-[17.44%]'
              )}
            ></Link>
          ))}
        </div>
        <div className="text-center tablet:order-1 desktop:self-center desktop:text-left">
          <h3 className="font-bellefair uppercase text-white opacity-[49.51%] tablet:text-2xl desktop:text-[32px]">
            {crewData.role}
          </h3>
          <h1 className="mt-2 font-bellefair text-2xl uppercase leading-normal text-white tablet:mt-3 tablet:text-[40px] desktop:text-[56px]">
            {crewData.name}
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] text-blue-100 tablet:text-base tablet:leading-[28px] desktop:text-lg desktop:leading-[32px]">
            {crewData.bio}
          </p>
          <div className="my-10 hidden justify-center space-x-4 tablet:flex desktop:mt-[120px] desktop:justify-start">
            {crewNames.map((crewName, index) => (
              <Link
                href={{ query: { crewTab: crewName } }}
                key={index}
                scroll={false}
                className={cn(
                  'inline-block h-[10px] w-[10px] rounded-full bg-white transition-opacity hover:opacity-50 desktop:h-[15px] desktop:w-[15px]',
                  crewTab == crewName ? 'opacity-1' : 'opacity-[17.44%]'
                )}
              ></Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Crew

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.crewTab) {
    return {
      redirect: {
        permanent: false,
        destination: '/crew?crewTab=douglas-hurley',
      },
    }
  }

  return {
    props: {
      crewTab: query.crewTab,
    },
  }
}
