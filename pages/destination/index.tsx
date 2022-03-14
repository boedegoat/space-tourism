export default function Destination() {}

export const getStaticProps = () => {
  return {
    redirect: {
      permanent: false,
      destination: '/destination/moon',
    },
  }
}
