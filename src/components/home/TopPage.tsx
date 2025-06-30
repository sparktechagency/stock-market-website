import Link from "next/link"

const TopPage = () => {
  return (
    <div>
      <video
        src="/home/home_page_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full object-cover opacity-40 h-full object-center absolute top-0 left-0 z-[-1]"
      ></video>

      <section className="flex flex-col items-center justify-center h-[85vh]">
        <div className="text-5xl max-xl:text-4xl max-md:text-3xl  font-bold max-w-[1000px] w-full flex items-center flex-col   text-white mb-5 leading-normal">
          <div>
            Buy, Sell, and{' '}
            <span className="text-yellow-400 underline">Trade Athlete</span>{' '}
            Stocks
          </div>
          <div>Based on Real Performance. </div>
        </div>

        <div className="max-w-[800px] text-gray-300 leading-relaxed  text-center">
          Welcome to the world&apos;s first athletics stock market — a platform
          where fans become stakeholders. Discover rising stars, trade athlete
          shares, and build your portfolio based on real-world performance.
          Whether you&apos;re a sports lover or a savvy investor, it&apos;s time
          to own a piece of the game.
        </div>
        <Link href="/market-place" className="mt-10 bg-red-700 px-10 py-3 cursor-pointer rounded-md">
          Explore Players
        </Link>
      </section>
    </div>
  )
}

export default TopPage
