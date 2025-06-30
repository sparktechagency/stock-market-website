'use client'

import { Form, Input, Button, Image } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

import Link from 'next/link'
import toast from 'react-hot-toast'
import { useLoginMutation } from '@/redux/authApis'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  type FormData = {
    email: string
    password: string
  }
  const navigate = useRouter()

  const [form] = Form.useForm()

  const [postSignIn, { isLoading }] = useLoginMutation()

  const onFinish = async (values: FormData) => {
    try {
      await postSignIn({
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then((res) => {
          toast.success(res?.message)
          form.resetFields()
          localStorage.setItem('token', res?.data?.accessToken)
          localStorage.setItem('role', res?.data?.role)
          navigate.push('/')
        })
    } catch (error: any) {
      console.log(error)
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
        <div className=" mx-auto  flex flex-col justify-center items-center max-w-[700px] w-full  p-12 glass-card">
          <div className="flex items-center flex-col  w-full ">
            <div>
              <Image src={'/logo/logo.svg'} alt="logo" preview={false} />
            </div>
            <h1
              className="font-bold  text-center text-black"
              style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
            >
              Welcome back!
            </h1>
            <p
              className=" mb-8  text-center text-sm text-white"
              style={{ fontSize: 'clamp(10px, 5vw, 16px)' }}
            >
              Enter to get unlimited access to data & Information
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

            <Form.Item
              name="password"
              label={
                <span className="text-black font-bold text-xl">Password</span>
              }
              rules={[
                { required: true, message: 'Please enter your password!' },
              ]}
            >
              <Input.Password
                placeholder="Enter password"
                className="custom-password-input h-[48px] px-4 border-gray-300 rounded-md"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <div className="text-end -mt-4">
              <Link
                href={`/forget-password`}
                className=" text-md hover:text-white text-white hover:underline"
              >
                Forget password
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  padding: '1.25rem',
                }}
                className="w-full bg-red-600  hover:!bg-red-500 h-11 mt-5"
              >
                {isLoading ? 'Loading...' : ' Login'}
              </Button>
            </Form.Item>
          </Form>
          <div className="  text-white text-xs">
            Don&apos;t have an account?{' '}
            <Link
              href={`/sign-up`}
              className=" hover:underline text-white font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
