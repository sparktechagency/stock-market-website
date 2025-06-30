'use client'
import React, { useState } from 'react'
import { Input, Select, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import Image from 'next/image'
import Link from 'next/link'

const { Option } = Select

const priceData = [
  { name: 'Jan', value: 45 },
  { name: 'Feb', value: 52 },
  { name: 'Mar', value: 48 },
  { name: 'Apr', value: 65 },
]

interface PlayerCard {
  id: number
  name: string
  price: number
  marketCap: string
  priceChange: number
  currentPrice: number
  image: string
}

const playerData: PlayerCard[] = [
  {
    id: 1,
    name: 'Asraf',
    price: 80.0,
    marketCap: '$2.5M',
    priceChange: 1000,
    currentPrice: 65.421,
    image: '/player/player-1.png',
  },
  {
    id: 2,
    name: 'Asraf',
    price: 80.0,
    marketCap: '$2.5M',
    priceChange: 1000,
    currentPrice: 65.421,
    image: '/player/player-2.png',
  },
  {
    id: 3,
    name: 'Asraf',
    price: 80.0,
    marketCap: '$2.5M',
    priceChange: 1000,
    currentPrice: 65.421,
    image: '/player/player-3.png',
  },
  {
    id: 4,
    name: 'Asraf',
    price: 80.0,
    marketCap: '$2.5M',
    priceChange: 1000,
    currentPrice: 65.421,
    image: '/player/player-1.png',
  },
]

const PlayerCard: React.FC<{ player: PlayerCard }> = ({ player }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Image
            src={player.image}
            alt={player.name}
            className="w-32 h-32 object-contain rounded-lg"
            width={200}
            height={200}
          />
        </div>

        <div className="flex-1 text-white">
          <div className="text-sm text-gray-400 mb-1">
            Player Name: <span className="text-white">{player.name}</span>
          </div>
          <div className="text-sm text-gray-400 mb-1">
            Price:{' '}
            <span className="text-white">${player.price.toFixed(2)}</span>
          </div>
          <div className="text-sm text-gray-400 mb-1">
            Market Cap: <span className="text-white">{player.marketCap}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-400">Recent Price Change:</span>
            <span className="text-green-500 text-sm flex items-center gap-1">
              <span className="text-green-400">📈</span>
              <span className="text-green-400">+${player.priceChange}</span>
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-400">
            ${player.currentPrice.toFixed(4)}
          </div>
        </div>

        {/* Enhanced Chart Container */}
        <div className="w-40 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs text-gray-400">100</div>
          </div>

          <div className="h-16 mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={priceData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <XAxis dataKey="name" hide domain={['dataMin', 'dataMax']} />
                <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981', strokeWidth: 0, r: 2 }}
                  activeDot={{ r: 4, fill: '#10b981' }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-400">0</div>
            <div className="text-xs text-gray-400">50</div>
          </div>

          <div className="text-xs text-gray-300 text-center mt-2">
            Jan Feb Mar Apr
          </div>
          <div className="text-xs text-gray-400 text-center">&gt;&gt; 2025</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-5">
        <Link
          href={`market-place/${player.id}`}
          className="bg-red-600 hover:!bg-red-700 border-red-600 hover:!border-red-700 !px-6 !py-3 !h-auto font-medium"
        >
          Buy Now
        </Link>
      </div>
    </div>
  )
}

const MarketPlace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <style jsx global>{`
        .dark-select .ant-select-selector {
          background-color: #000000 !important;
          border-color: #374151 !important;
          color: white !important;
        }

        .dark-select .ant-select-selection-item {
          color: white !important;
        }

        .dark-select .ant-select-arrow {
          color: #9ca3af !important;
        }

        .dark-select-dropdown {
          background-color: #000000 !important;
        }

        .dark-select-dropdown .ant-select-item {
          color: white !important;
          background-color: #000000 !important;
        }

        .dark-select-dropdown .ant-select-item:hover {
          background-color: #1f1f1f !important;
        }

        .dark-select-dropdown .ant-select-item-option-selected {
          background-color: #374151 !important;
        }

        .dark-input .ant-input {
          background-color: #1f1f1f !important;
          border-color: #374151 !important;
          color: white !important;
        }

        .dark-input .ant-input::placeholder {
          color: #9ca3af !important;
        }

        .dark-input .ant-input-prefix {
          color: #9ca3af !important;
        }
      `}</style>

      <div className="responsive-width mx-auto">
        <div className="mb-6">
          <Input
            placeholder="Search Here..."
            prefix={<SearchOutlined className="text-gray-200" />}
            className="flex items-center bg-black mx-auto py-3 rounded-full max-w-3xl w-full text-black"
            size="large"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 mb-3">Sorted By:</div>
          <div className="flex flex-wrap gap-4">
            <Select
              defaultValue="League"
              className="dark-select min-w-48"
              size="large"
              dropdownClassName="dark-select-dropdown"
            >
              <Option value="League">League</Option>
              <Option value="Premier">Premier</Option>
              <Option value="Championship">Championship</Option>
            </Select>

            <Select
              defaultValue="Sports"
              className="dark-select min-w-48"
              size="large"
              dropdownClassName="dark-select-dropdown"
            >
              <Option value="Sports">Sports</Option>
              <Option value="Football">Football</Option>
              <Option value="Basketball">Basketball</Option>
            </Select>

            <Select
              defaultValue="Trending"
              className="dark-select min-w-48"
              size="large"
              dropdownClassName="dark-select-dropdown"
            >
              <Option value="Trending">Trending</Option>
              <Option value="Hot">Hot</Option>
              <Option value="Rising">Rising</Option>
            </Select>

            <Select
              defaultValue="Undervalued"
              className="dark-select min-w-48"
              size="large"
              dropdownClassName="dark-select-dropdown"
            >
              <Option value="Undervalued">Undervalued</Option>
              <Option value="Overvalued">Overvalued</Option>
              <Option value="Fair">Fair Value</Option>
            </Select>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {playerData.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
