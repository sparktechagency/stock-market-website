import Image from 'next/image'

const KeyFeatureAndBenefits = () => {
  return (
    <div className="  flex flex-col items-center justify-center px-4 pt-32 max-xl:pt-32">
      <div className="text-5xl font-bold flex  gap-2 items-center text-white mb-12">
        <div>
          <Image
            src="/design.svg"
            alt="design"
            className="mb-4"
            width={30}
            height={30}
          />
        </div>
        <div>Key Feature & Benefits</div>
      </div>

      <section className="w-full max-xl:flex-col  flex gap-20 items-center responsive-width pb-20">
        <div className="w-1/2 flex items-start">
          <Image
            src="/keyFeatures/key-features.png"
            alt="key-features"
            width={850}
            height={850}
          />
        </div>

        <section className="grid grid-cols-2 w-1/2 max-md:grid-cols-1  gap-6 max-w-6xl items-center">
          <div
            className="bg-[#193050] p-6 rounded-2xl h-72 flex flex-col justify-between"
            style={{
              boxShadow: '-5px -23px 299px -3px rgba(255,37,37,0.5)',
              WebkitBoxShadow: '-5px -23px 299px -3px rgba(255,37,37,0.5)',
              MozBoxShadow: '-5px -23px 299px -3px rgba(255,37,37,0.5)',
            }}
          >
            <div className="flex items-center flex-col justify-center flex-1">
              <div className=" p-4 rounded-xl">
                <Image
                  src="/keyFeatures/real-trading.svg"
                  alt="sign-up"
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-xl font-bold">Real Time Trading</div>
            </div>
          </div>
          <div className="bg-[#193050] p-6 rounded-2xl h-72 flex flex-col justify-between">
            <div className="flex items-center flex-col justify-center flex-1">
              <div className=" p-4 rounded-xl">
                <Image
                  src="/keyFeatures/performer.svg"
                  alt="sign-up"
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-xl font-bold">Performance Based Bonus</div>
            </div>
          </div>
          <div className="bg-[#193050] p-6 rounded-2xl h-72 flex flex-col justify-between">
            <div className="flex items-center flex-col justify-center flex-1">
              <div className=" p-4 rounded-xl">
                <Image
                  src="/keyFeatures/user-portion.svg"
                  alt="sign-up"
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-xl font-bold text-center">
                User Portfolio Management
              </div>
            </div>
          </div>

          <div
            className="bg-[#193050] p-6 rounded-2xl h-72 flex flex-col justify-between"
            style={{
              boxShadow: '-5px -23px 299px -36px rgba(255,37,37,0.5)',
              WebkitBoxShadow: '-5px -23px 299px -36px rgba(255,37,37,0.5)',
              MozBoxShadow: '-5px -23px 299px -36px rgba(255,37,37,0.5)',
            }}
          >
            <div className="flex items-center flex-col justify-center flex-1">
              <div className=" p-4 rounded-xl">
                <Image
                  src="/keyFeatures/secure.svg"
                  alt="sign-up"
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-xl font-bold text-center">
                Secure & transparent Transaction
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default KeyFeatureAndBenefits
