import PerformanceGraph from '@/components/playerInfo/PerformanceGraph'
import Profile from '@/components/playerInfo/Profile'
import BuyThisPlayer from '@/components/playerInfo/BuyThisPlayer'

const PlayerInfo = () => {
  return (
    <div className="responsive-width">
      <div className="flex max-xl:flex-col gap-6 pt-5 items-start justify-start">
        <Profile />
        <PerformanceGraph />
      </div>
      <BuyThisPlayer />
    </div>
  )
}

export default PlayerInfo
