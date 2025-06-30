import Link from 'next/link'

const ReadyToGetStarted = () => {
  return (
    <div className="!mb-10 space-y-5 bg-[#193050] flex flex-col items-center justify-center px-4 py-20">
      <div className="text-5xl font-bold">Ready to Get Started?</div>
      <div className="text-center w-full text-gray-300">
        The purpose of a FAQ is generally to provide information on frequent
        questions or concerns.
      </div>
      <Link href="/contact-us" className="bg-red-500 px-10 py-3">
        Contact us
      </Link>
    </div>
  )
}

export default ReadyToGetStarted
