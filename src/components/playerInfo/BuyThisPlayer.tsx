'use client'
import React from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'

const { Title } = Typography

const BuyThisPlayer: React.FC = () => {
  return (
    <div className="  flex items-center justify-center mt-20">
      <Card
        className="w-full "
        bodyStyle={{ padding: '32px' }}
        style={{
          backgroundColor: '#0F1724',
          borderColor: '#334155',
          borderRadius: '12px',
        }}
      >
        <div className="space-y-6">
          {/* Header */}
          <Title level={4} className="!text-white m-0">
            Buy/Sell Panel
          </Title>

          {/* Form */}
          <Form layout="vertical" className="space-y-4">
            <Form.Item
              label={
                <span className="text-slate-300 text-sm">Number Of Shares</span>
              }
              className="mb-6"
            >
              <Input
                placeholder="Type Here..."
                className="h-12 text-slate-300"
                style={{
                  backgroundColor: '#334155',
                  borderColor: '#475569',
                  color: '#e2e8f0',
                }}
                styles={{
                  input: {
                    backgroundColor: '#334155',
                    color: '#e2e8f0',
                    fontSize: '14px',
                  },
                }}
              />
            </Form.Item>

            {/* Pricing Row */}
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label={
                  <span className="text-slate-300 text-sm">
                    Pricing Breakdown
                  </span>
                }
                className="mb-0"
              >
                <Input
                  readOnly
                  className="h-12 text-slate-300"
                  style={{
                    backgroundColor: '#334155',
                    borderColor: '#475569',
                    color: '#e2e8f0',
                  }}
                  styles={{
                    input: {
                      backgroundColor: '#334155',
                      color: '#e2e8f0',
                      fontSize: '14px',
                    },
                  }}
                  placeholder="$0.00"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-slate-300 text-sm">Estimated Cost</span>
                }
                className="mb-0"
              >
                <Input
                  readOnly
                  className="h-12 text-slate-300"
                  style={{
                    backgroundColor: '#334155',
                    borderColor: '#475569',
                    color: '#e2e8f0',
                  }}
                  styles={{
                    input: {
                      backgroundColor: '#334155',
                      color: '#e2e8f0',
                      fontSize: '14px',
                    },
                  }}
                  placeholder="$0.00"
                />
              </Form.Item>
            </div>
            <div className="flex items-center justify-end">
              <Button type="primary" className="bg-red-500 hover:!bg-red-600 !px-10 !py-5">
                <div className="text-white text-md font-semibold">Buy</div>
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default BuyThisPlayer
