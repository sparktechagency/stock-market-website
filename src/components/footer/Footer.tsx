import { Image } from 'antd'
import Link from 'next/link'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import ReadyToGetStarted from '../readyToGetStarted/ReadyToGetStarted'

const Footer = () => {
  return (
    <footer className="bg-[#12141D]  text-white pb-8 poppins  ">
      <ReadyToGetStarted />
      <div className=" mx-auto flex flex-col lg:flex-row justify-between responsive-width">
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-blue-700 viga">
            <Image src="/logo/logo.svg" alt="logo" preview={false} />
          </h2>
          <p className="mt-2  poppins max-w-[600px] w-full">
            A platform for people to buy and sell stocks, view market trends and
            make informed investment decisions.
          </p>
          <section>
            <p className="font-semibold text-yellow-400 mt-5 poppins">
              Follow Us
            </p>
            <div className="flex mt-4 space-x-4 text-3xl items-center ">
              <Link href="/" target="_blank">
                <FaFacebook className="cursor-pointer " />
              </Link>

              <Link href="/" target="_blank">
                <FaLinkedin className="cursor-pointer  " />
              </Link>

              <Link href="/" target="_blank">
                <FaInstagramSquare className="cursor-pointer  " />
              </Link>
            </div>
          </section>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-yellow-400 text-xl">Help</h3>
          <ul className="mt-5 flex flex-col gap-5 ">
            <li>
              <Link href="/contact-us" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-yellow-400 text-xl">Company</h3>
          <ul className="mt-5 flex flex-col gap-5 ">
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-yellow-400"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-and-policy"
                className="hover:text-yellow-400"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/about-us" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm">
        <p>
          &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by{' '}
          <Link href="/" className="text-yellow-400 hover:underline">
            Strato
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
