import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div>
      <Trending />
      <CoinSearch coins={coins} />
    </div>
  )
}

export default Home