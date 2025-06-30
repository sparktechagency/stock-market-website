'use client'

import DynamicBreadcrumb from '@/app/DynamicBreadcrumb'
import { useSendContactUsMutation } from '@/redux/contactUsApis'
import { Form, Input, Button, message as antdMessage } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactUs = () => {
  const [form] = Form.useForm()
  const [sendContactUs, { isLoading }] = useSendContactUsMutation()
  const [submitted, setSubmitted] = useState(false)

  type FormData = {
    fullName: string
    email: string
    phone: string
    message: string
  }

  const handleSubmit = async (values: FormData) => {
    try {
      await sendContactUs({
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      }).unwrap()
      form.resetFields()
      setSubmitted(true)
      toast.success('Your message has been sent successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="responsive-width">
      <div className="text-3xl font-bold mb-6">Contact Us</div>
      <DynamicBreadcrumb />

      <div className="flex max-lg:flex-col justify-center items-center max-sm:p-0 p-10 gap-6">
        <section className="max-lg:hidden">
          <Image
            src="/contactUs/contact-us.png"
            alt="contact"
            className="w-full max-w-[600px]"
            width={5000}
            height={500}
          />
        </section>

        <section>
          <div className="min-w-[300px] mx-auto border border-yellow-300 p-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-2 max-lg:text-2xl">
              Get in Touch with us
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Fill up the form and our team will get back to you within 24 hours
            </p>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-4"
              requiredMark={false}
            >
              <Form.Item
                label={
                  <label htmlFor="fullName" className="text-white">
                    Full Name
                  </label>
                }
                name="fullName"
                rules={[
                  { required: true, message: 'Full Name is required.' },
                  {
                    min: 3,
                    message: 'Full Name must be at least 3 characters.',
                  },
                ]}
              >
                <Input
                  id="fullName"
                  placeholder="Like. Petr Bilek"
                  className="h-[48px]"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label htmlFor="phone" className="text-white">
                    Contact
                  </label>
                }
                name="phone"
                rules={[
                  { required: true, message: 'Phone number is required.' },
                ]}
              >
                <Input
                  id="phone"
                  placeholder="Like. +123456789"
                  className="h-[48px]"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label htmlFor="email" className="text-white">
                    Email Address
                  </label>
                }
                name="email"
                rules={[
                  { required: true, message: 'Email is required.' },
                  { type: 'email', message: 'Enter a valid email address.' },
                ]}
              >
                <Input
                  id="email"
                  placeholder="Like. bilekpetr92@gmail.com"
                  className="h-[48px]"
                />
              </Form.Item>

              <Form.Item
                label={
                  <label htmlFor="message" className="text-white">
                    Message
                  </label>
                }
                name="message"
                rules={[
                  { required: true, message: 'Please enter your message.' },
                  {
                    min: 10,
                    message: 'Message must be at least 10 characters.',
                  },
                ]}
              >
                <Input.TextArea
                  id="message"
                  placeholder="Like. What's included in ...."
                  rows={7}
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-900 h-[48px] text-white p-2 rounded-md hover:!bg-blue-800 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send message now'}
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
