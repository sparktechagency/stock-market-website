'use client'

import { Image } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'

interface Athlete {
  id: number
  name: string
  image: string
  sport: string
  team: string
}

const TopPerformingAthletes = () => {
  const [activeTab, setActiveTab] = useState('Soccer')

  const sportsTabs = [
    'Soccer',
    'NBA',
    'American Football',
    'Horse Racing',
    'Rugby Union',
    'Ice Hockey',
    'Boxing',
    'Cricket',
    'Baseball',
    'Esports',
  ]

  const athletes: Record<string, Athlete[]> = {
    Soccer: [
      {
        id: 1,
        name: 'Udonis Haslem',
        image: '/player/player-1.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
      {
        id: 2,
        name: 'Udonis Haslem',
        image: '/player/player-2.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
      {
        id: 3,
        name: 'Udonis Haslem',
        image: '/player/player-3.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
    ],
    NBA: [
      {
        id: 4,
        name: 'Udonis Haslem',
        image: '/player/player-1.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
      {
        id: 5,
        name: 'Udonis Haslem',
        image: '/player/player-2.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
      {
        id: 5,
        name: 'Udonis Haslem',
        image: '/player/player-3.png',
        sport: 'Soccer',
        team: 'Miami Heat',
      },
    ],
  }

  return (
    <div className="min-h-screen  responsive-width  p-8">
      <div className="mx-auto">
        <div className="flex gap-3 mb-12 items-center justify-center">
          <div>
            <Image
              src="/design.svg"
              alt="design"
              className="mb-4"
              width={30}
              height={30}
            />
          </div>
          <div className="text-5xl font-bold">Top Performing Athletes</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {sportsTabs.map((sport) => (
            <button
              key={sport}
              onClick={() => setActiveTab(sport)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === sport
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {(athletes[activeTab] || athletes.Soccer).map((athlete, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="absolute top-4 left-4 z-10">
                <div className="text-orange-400 text-sm font-medium mb-1">
                  played for the {athlete.team}
                </div>
                <h3 className="text-white text-2xl font-bold">
                  {athlete.name}
                </h3>
              </div>

              <Link
                href={`/market-place/${athlete.id}`}
                className="absolute top-4 right-4 z-10"
              >
                <BsArrowUpRightCircle className="text-3xl text-yellow-400 hover:text-yellow-500" />
              </Link>

              <div className=" relative overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={500}
                  height={500}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopPerformingAthletes
