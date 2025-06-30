'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuBurger } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const [userType, setUserType] = useState('FREE') // FREE, LOGIN

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUserType('LOGIN')
    } else {
      setUserType('FREE')
    }
  }, [])

  const getLinkClass = (path: string) =>
    pathname === path ? ' font-semibold text-yellow-500' : 'no-underline'

  return (
    <div className=" z-50 ">
      <section>
        {/* FREE Navbar */}
        <div
          className="font-semibold    text-white "
          style={{
            backgroundColor: '#12141D',
          }}
        >
          {userType === 'FREE' && (
            <div className="flex justify-between items-center responsive-width py-4">
              <div>
                <Link href="/">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                  </section>
                </Link>
              </div>

              <div className="flex max-md:hidden justify-between items-center gap-20 ">
                <Link href="/" className={getLinkClass('/')}>
                  Home
                </Link>
                <Link
                  href="/market-place"
                  className={getLinkClass('/market-place')}
                >
                  Market Place
                </Link>
              </div>

              <div className="flex gap-5 max-md:hidden">
                <Link
                  href="/sign-in"
                  className="bg-red-600 hover:bg-red-700 px-6 py-1.5 rounded-full"
                >
                  login
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-1.5 rounded-full"
                >
                  Sign Up
                </Link>
              </div>

              <div className="relative max-md:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-all"
                >
                  {isOpen ? <MdClose /> : <CiMenuBurger />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer absolute top-12 right-0 w-40  bg-gray-700 text-white shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className={`p-2  cursor-pointer`}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/market-place"
                          className={` p-2  cursor-pointer`}
                        >
                          Market Place
                        </Link>
                      </li>

                      <li className="flex gap-2 flex-col">
                        <Link
                          href="/sign-in"
                          className={` px-3 rounded-full flex items-center justify-center bg-red-600  hover:bg-red-700 cursor-pointer`}
                        >
                          login
                        </Link>
                        <Link
                          href="/sign-up"
                          className={` px-3 rounded-full flex items-center justify-center bg-gray-900  hover:bg-gray-950 cursor-pointer`}
                        >
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* LOGIN Navbar */}
        <div className="font-semibold bg-[#12141D]   text-white ">
          {userType === 'LOGIN' && (
            <div className="flex justify-between items-center responsive-width py-4">
              <div>
                <Link href="/">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                  </section>
                </Link>
              </div>

              <div className="flex max-md:hidden justify-between items-center gap-20 ">
                <Link href="/" className={getLinkClass('/')}>
                  Home
                </Link>
                <Link
                  href="/market-place"
                  className={getLinkClass('/market-place')}
                >
                  Market Place
                </Link>
                <Link href="/dashboard" className={getLinkClass('/dashboard')}>
                  Dashboard
                </Link>
              </div>

              <div className="relative max-md:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-all"
                >
                  {isOpen ? <MdClose /> : <CiMenuBurger />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer absolute top-12 right-0 w-40  bg-gray-700 text-white shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className={`p-2 cursor-pointer`}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/market-place"
                          className={` p-2  cursor-pointer`}
                        >
                          Market Place
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard"
                          className={` p-2  cursor-pointer`}
                        >
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Navbar
