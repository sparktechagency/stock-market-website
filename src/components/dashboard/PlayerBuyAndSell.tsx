/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Image, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

interface Athlete {
  key: string
  name: string
  image: string
  sport: string
  quantity: number
  avg_buy_price: string
  current_value: string
  gain_loss: string
  gain_loss_amount: string
  is_gain: boolean
}

const PlayerBuyAndSell = () => {
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
        key: '1',
        name: 'Lio Hande',
        image: '/player/player-1.png',
        sport: 'Footballer',
        quantity: 10,
        avg_buy_price: '$50',
        current_value: '$60',
        gain_loss: '+$1000',
        gain_loss_amount: '$1000',
        is_gain: true,
      },
      {
        key: '2',
        name: 'Cristiano Ronaldo',
        image: '/player/player-2.png',
        sport: 'Footballer',
        quantity: 5,
        avg_buy_price: '$120',
        current_value: '$80',
        gain_loss: '-$2000',
        gain_loss_amount: '$2000',
        is_gain: false,
      },
      {
        key: '3',
        name: 'Lionel Messi',
        image: '/player/player-3.png',
        sport: 'Footballer',
        quantity: 8,
        avg_buy_price: '$90',
        current_value: '$110',
        gain_loss: '+$1500',
        gain_loss_amount: '$1500',
        is_gain: true,
      },
    ],
    NBA: [
      {
        key: '4',
        name: 'LeBron James',
        image: '/player/player-1.png',
        sport: 'Basketball Player',
        quantity: 12,
        avg_buy_price: '$85',
        current_value: '$95',
        gain_loss: '+$1200',
        gain_loss_amount: '$1200',
        is_gain: true,
      },
      {
        key: '5',
        name: 'Stephen Curry',
        image: '/player/player-2.png',
        sport: 'Basketball Player',
        quantity: 6,
        avg_buy_price: '$110',
        current_value: '$90',
        gain_loss: '-$1200',
        gain_loss_amount: '$1200',
        is_gain: false,
      },
    ],
  }

  const columns: ColumnsType<Athlete> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      render: (name: string, record: Athlete) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
            <Image
              src={record.image}
              alt={name}
              width={48}
              height={48}
              className="object-cover"
              fallback="/api/placeholder/48/48"
            />
          </div>
          <div>
            <div className="text-white font-medium text-lg">{name}</div>
            <div className="text-gray-400 text-sm">{record.sport}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      align: 'center',
      render: (quantity: number) => (
        <span className="text-white font-medium">{quantity}</span>
      ),
    },
    {
      title: 'Avg. Buy Price',
      dataIndex: 'avg_buy_price',
      key: 'avg_buy_price',
      width: 130,
      align: 'center',
      render: (price: string) => (
        <span className="text-white font-medium">{price}</span>
      ),
    },
    {
      title: 'Current Value',
      dataIndex: 'current_value',
      key: 'current_value',
      width: 130,
      align: 'center',
      render: (value: string) => (
        <span className="text-white font-medium">{value}</span>
      ),
    },
    {
      title: 'Gain/Loss',
      dataIndex: 'gain_loss',
      key: 'gain_loss',
      width: 130,
      align: 'center',
      render: (gainLoss: string, record: Athlete) => (
        <div className="flex items-center  gap-2">
          <div
            className={`w-6 h-6 rounded flex items-center justify-center ${
              record.is_gain ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            <span className="text-white text-xs font-bold">
              {record.is_gain ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </div>
          <span
            className={`font-medium ${
              record.is_gain ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {gainLoss}
          </span>
        </div>
      ),
    },
  ]

  return (
    <div className="responsive-width py-32  ">
      <div className="mx-auto">
        {/* <div className="flex gap-3 mb-12 items-center justify-center">
          <div>
            <Image
              src="/design.svg"
              alt="design"
              className="mb-4"
              width={30}
              height={30}
              fallback="/api/placeholder/30/30"
            />
          </div>
          <div className="text-5xl font-bold text-white">
            Top Performing Athletes
          </div>
        </div> */}

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

        <div className="overflow-hidden ">
          {/* <Table
            columns={columns}
            dataSource={athletes[activeTab] || athletes.Soccer}
            pagination={false}
            className="custom-table"
            style={{
              backgroundColor: 'transparent',
            }}
            components={{
              header: {
                cell: (props: any) => (
                  <th
                    {...props}
                    style={{
                      backgroundColor: '#1f2937',
                      color: '#9ca3af',
                      borderBottom: '1px solid #374151',
                      padding: '16px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textAlign: props.align || 'left',
                    }}
                  />
                ),
              },
              body: {
                row: (props: any) => (
                  <tr
                    {...props}
                    style={{
                      backgroundColor: '#1f2937',
                      borderBottom: '1px solid #374151',
                    }}
                    className="hover:bg-gray-700 transition-colors duration-200"
                  />
                ),
                cell: (props: any) => (
                  <td
                    {...props}
                    style={{
                      backgroundColor: 'transparent',
                      borderBottom: 'none',
                      padding: '16px',
                    }}
                  />
                ),
              },
            }}
          /> */}
            <div className="text-center text-white">No Data Available</div>
        </div>
      </div>

      <style jsx global>{`
        .custom-table .ant-table {
          background: transparent !important;
        }

        .custom-table .ant-table-thead > tr > th {
          background: #1f2937 !important;
          color: #9ca3af !important;
          border-bottom: 1px solid #374151 !important;
        }

        .custom-table .ant-table-tbody > tr > td {
          background: transparent !important;
          border-bottom: 1px solid #374151 !important;
        }

        .custom-table .ant-table-tbody > tr:hover > td {
          background: #374151 !important;
        }

        .custom-table .ant-table-container {
          border-radius: 16px;
          overflow: hidden;
        }

        .custom-table .ant-table-content {
          background: #1f2937;
        }
      `}</style>
    </div>
  )
}

export default PlayerBuyAndSell
