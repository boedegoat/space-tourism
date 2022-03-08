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
    <Container screenClassName="bg-crew-mobile" className="wrapper">
      <Heading2 number={2}>MEET YOUR CREW</Heading2>
      <div className="mt-8 space-y-8 pb-8">
        {/* slider */}
        <div>
          <img
            src={formatPath(crewData.images.webp)}
            alt={crewData.name}
            className="h-[223px] w-[327px] border-b-2 border-gray object-contain"
          />
          <div className="mt-8 flex justify-center space-x-4">
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
        </div>
        <div className="text-center">
          <h3 className="font-bellefair uppercase text-white opacity-[49.51%]">
            {crewData.role}
          </h3>
          <h1 className="mt-2 font-bellefair text-2xl uppercase text-white">
            {crewData.name}
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] text-blue-100">
            {crewData.bio}
          </p>
        </div>
        {/* informations */}
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
