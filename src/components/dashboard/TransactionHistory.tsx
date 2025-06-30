/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Image, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'

interface Athlete {
  key: string
  date: string
  athlete: string
  action: string
  shares: number
  price: string
}

const TransactionHistory = () => {
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
        date: '2023-08-01',
        athlete: 'Lio Hande',
        action: 'Buy',
        shares: 10,
        price: '$100',
      },
      {
        key: '2',
        date: '2023-08-01',
        athlete: 'Lio Hande',
        action: 'Buy',
        shares: 10,
        price: '$100',
      },
      {
        key: '3',
        date: '2023-08-01',
        athlete: 'Lio Hande',
        action: 'Buy',
        shares: 10,
        price: '$100',
      },
    ],
    NBA: [
      {
        key: '4',
        date: '2023-08-01',
        athlete: 'Lio Hande',
        action: 'Buy',
        shares: 10,
        price: '$100',
      },
      {
        key: '5',
        date: '2023-08-01',
        athlete: 'Lio Hande',
        action: 'Buy',
        shares: 10,
        price: '$100',
      },
    ],
  }

  const columns: ColumnsType<Athlete> = [
    {
      title: 'Athlete',
      dataIndex: 'athlete',
      key: 'athlete',
      width: 150,
      render: (name: string, record: Athlete) => (
        <div className="flex items-center gap-3">
          <div>
            <div className="text-gray-400 text-sm">{record.athlete}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 100,
      align: 'center',
      render: (date: number) => (
        <span className="text-white font-medium">{date}</span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 130,
      align: 'center',
      render: (action: string) => (
        <span className="text-white font-medium">{action}</span>
      ),
    },
    {
      title: 'Shares',
      dataIndex: 'shares',
      key: 'shares',
      width: 130,
      align: 'center',
      render: (value: string) => (
        <span className="text-white font-medium">{value}</span>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 130,
      align: 'center',
      render: (value: string) => (
        <span className="text-white font-medium">{value}</span>
      ),
    },
  ]

  return (
    <div className="responsive-width py-32  ">
      <div className="mx-auto">
        <div>
          <div className="flex gap-3 mb-4 items-center justify-center">
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
              Transaction History
            </div>
          </div>
          <div className="text-center text-white">No Data Available</div>
        </div>

        {/* <div className="bg-gray-800  overflow-hidden ">
          <Table
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
          />
        </div> */}
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

export default TransactionHistory
