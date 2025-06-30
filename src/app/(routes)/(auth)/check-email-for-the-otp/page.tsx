'use client'

import {
  useResendOtpMutation,
  useVerifyEmailOtpMutation,
} from '@/redux/authApis'
import { Form, Button, Input } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

const CheckEmailForTheOtp = () => {
  const navigate = useRouter()
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])
  const [form] = Form.useForm()

  const [postVerifyAccount, { isLoading }] = useVerifyEmailOtpMutation()
  const [postResendOtp, { isLoading: resendLoading }] = useResendOtpMutation()

  const updateFormValue = (newOtp: string[]) => {
    const otpString = newOtp.join('')
    form.setFieldsValue({ otp: otpString })
    form.setFields([{ name: 'otp', errors: [] }])
  }

  const handleChange = (value: string, index: number) => {
    const digit = value.replace(/\D/g, '')
    if (!digit) return

    const newOtp = [...otp]
    newOtp[index] = digit[0]
    setOtp(newOtp)
    updateFormValue(newOtp)

    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp]
      if (otp[index]) {
        newOtp[index] = ''
        setOtp(newOtp)
        updateFormValue(newOtp)
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
        newOtp[index - 1] = ''
        setOtp(newOtp)
        updateFormValue(newOtp)
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '')
    const newOtp = Array(6).fill('')

    pastedData
      .slice(0, 6)
      .split('')
      .forEach((char, i) => {
        newOtp[i] = char
      })

    setOtp(newOtp)
    updateFormValue(newOtp)

    const nextIndex = pastedData.length < 6 ? pastedData.length : 5
    inputRefs.current[nextIndex]?.focus()
  }

  const onFinishOtp = async () => {
    const email = localStorage.getItem('email') || ''
    if (!email) {
      navigate.push('/forget-password')
      return
    }

    const otpCode = otp.join('')
    if (otpCode.length !== 6) {
      toast.error('Please enter complete 6-digit OTP')
      return
    }

    try {
      await postVerifyAccount({
        email: email,
        resetCode: Number(otpCode),
      })
        .unwrap()
        .then((res) => {
          toast.success(res?.message)
          form.resetFields()
          localStorage.removeItem('reset-token')
          localStorage.setItem('reset-token', res?.data?.accessToken)
          navigate.push('/set-new-password')
        })
    } catch (error: any) {
      toast.error(error?.data?.message)
    }
  }

  const handleResendOtp = async () => {
    const email = localStorage.getItem('email') || ''

    try {
      await postResendOtp({
        email: email,
      })
        .unwrap()
        .then((res) => {
          toast.success(res?.message)
          const emptyOtp = Array(6).fill('')
          setOtp(emptyOtp)
          updateFormValue(emptyOtp)
          inputRefs.current[0]?.focus()
        })
    } catch (error: any) {
      toast.error(error?.data?.message)
    }
  }

  return (
    <section className="h-screen">
      <div
        className="h-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/auth/background_auth.png")',
        }}
      >
        <div className="glass-card p-12 rounded-lg shadow-xl max-w-[600px] w-full">
          <div className="flex flex-col items-center mb-6">
            <Image src="/logo/logo.svg" alt="logo" width={150} height={50} />
            <h1 className="text-white text-center font-bold text-3xl mt-4">
              Check your email
            </h1>
            <p className="text-white text-sm text-center mt-2">
              Please enter your OTP
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinishOtp}
            requiredMark={false}
          >
            <Form.Item name="otp" style={{ textAlign: 'center' }}>
              <div className="flex justify-center gap-2" onPaste={handlePaste}>
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-11 text-center border rounded text-lg"
                  />
                ))}
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-600 hover:bg-red-500 h-11"
                loading={isLoading}
              >
                Verify
              </Button>
            </Form.Item>
          </Form>

          <div className="text-white text-xs text-center mt-4">
            Didn't receive the email?{' '}
            <span
              onClick={handleResendOtp}
              className="underline cursor-pointer text-yellow-400"
            >
              Resend
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckEmailForTheOtp
