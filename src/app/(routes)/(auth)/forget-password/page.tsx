'use client'

import { useForgetPasswordMutation } from '@/redux/authApis'
import { Form, Input, Button, Image } from 'antd'
import { useRouter } from 'next/navigation'

import toast from 'react-hot-toast'

const SignIn = () => {
  const router = useRouter()
  type FormData = {
    email: string
    password: string
  }

  const navigate = useRouter()

  const [postResendOtp, { isLoading }] = useForgetPasswordMutation()

  const [form] = Form.useForm()
  const onFinish = async (values: FormData) => {
    try {
      await postResendOtp({
        email: values.email,
      })
        .unwrap()
        .then((res) => {
          toast.success(res?.message)
          form.resetFields()
          localStorage.removeItem('email')
          localStorage.setItem('email', values.email)
          navigate.push('/check-email-for-the-otp')
        })
    } catch (error: any) {
      toast.error(error?.data?.message)
    }
  }

  return (
    <section className="h-screen">
      <div
        className="flex  items-center flex-row  h-screen"
        style={{
          backgroundImage: 'url("/auth/background_auth.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=" mx-auto  flex flex-col justify-center items-center  p-12 glass-card">
          <div className="flex items-center flex-col max-w-[500px] w-full ">
            <div>
              <Image src={'/logo/logo.svg'} alt="logo" preview={false} />
            </div>
            <h1
              className="font-bold  text-center text-black"
              style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
            >
              Forget Password?
            </h1>
            <p
              className=" mb-8  text-center text-sm text-white  w-full"
              style={{ fontSize: 'clamp(10px, 5vw, 16px)' }}
            >
              Don’t worry. We’ll reset your password and send you a link to
              create a new one.
            </p>
          </div>

          <Form
            requiredMark={false}
            layout="vertical"
            onFinish={onFinish}
            className="w-full max-w-md overflow-y-scroll  scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <Form.Item
              name="email"
              label={
                <span className="text-black font-bold text-xl">Email</span>
              }
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please enter your email!',
                },
              ]}
            >
              <Input
                placeholder="Enter Email"
                className="h-[48px] px-4  border-gray-300 rounded-md"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  padding: '1.25rem',
                }}
                className="w-full bg-red-600  hover:!bg-red-500 h-11 mt-5"
              >
                {isLoading ? 'Loading...' : ' Next'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
