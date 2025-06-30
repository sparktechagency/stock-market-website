import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-5xl font-bold flex gap-2 items-center text-white mb-12">
        <div>
          <Image
            src="/design.svg"
            alt="design"
            className="mb-4"
            width={30}
            height={30}
          />
        </div>
        <div>How It Works</div>
      </div>

      <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-6xl items-center">
        {/* Card 1 - Sign Up */}
        <div className="bg-[#193050] p-6 rounded-2xl h-80 flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1">
            <div className=" p-4 rounded-xl">
              <Image
                src="/howItWorks/sign-up-img.svg"
                alt="sign-up"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-yellow-400 border rounded-full w-12 h-12 border-yellow-400 flex items-center justify-center font-bold">
              1
            </div>
            <div className="text-yellow-400 text-2xl font-semibold">
              Sign Up
            </div>
            <div className="text-gray-300 text-sm">
              Create Your Free Account In Seconds.
            </div>
          </div>
        </div>

        {/* Card 2 - Invest (Taller with red border) */}
        <div
          className="bg-gray-800 p-6 rounded-2xl h-96 flex flex-col justify-between border-2 border-red-500"
          style={{
            boxShadow: '-10px 36px 219px -20px rgba(235, 31, 31, 0.1)',
            WebkitBoxShadow: '-10px 36px 219px -20px rgba(235, 31, 31, 0.53)',
            MozBoxShadow: '-10px 36px 219px -20px rgba(235, 31, 31, 0.53)',
          }}
        >
          <div className="flex items-center justify-center flex-1">
            <Image
              src="/howItWorks/invest-img.svg"
              alt="invest"
              width={130}
              height={130}
            />
          </div>
          <div className="space-y-3 ">
            <div className="text-yellow-400 border rounded-full w-12 h-12 border-yellow-400 flex items-center justify-center  font-bold">
              2
            </div>
            <div className="text-yellow-400 text-2xl font-semibold">Invest</div>
            <div className="text-gray-300 text-base">
              Buy Shares Of Your Favorite Athletes And Build Your Portfolio
            </div>
          </div>
        </div>

        {/* Card 3 - Track Performance */}
        <div className="bg-[#193050] p-6 rounded-2xl h-80 flex flex-col justify-between">
          <div className="flex items-center justify-center flex-1">
            <div className=" p-4 rounded-xl">
              <Image
                src="/howItWorks/sign-up-img.svg"
                alt="sign-up"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-yellow-400 border rounded-full w-12 h-12 border-yellow-400 flex items-center justify-center font-bold">
              3
            </div>
            <div className="text-yellow-400 text-2xl font-semibold">
              Track Performance
            </div>
            <div className="text-gray-300 text-sm">
              Create Your Free Account In Seconds.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
