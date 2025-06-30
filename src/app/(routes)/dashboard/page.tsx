import PerformanceGraph from "@/components/dashboard/PerformanceGraph"
import PlayerBuyAndSell from "@/components/dashboard/PlayerBuyAndSell"
import Profile from "@/components/dashboard/Profile"
import TransactionHistory from "@/components/dashboard/TransactionHistory"

const Dashboard = () => {
  return (
    <div className="responsive-width">
      <div className="flex max-xl:flex-col gap-6 pt-5 items-start justify-start">
        <Profile />
        <PerformanceGraph />
      </div>
       <PlayerBuyAndSell />
      <TransactionHistory />
    </div>
  )
}

export default Dashboard
