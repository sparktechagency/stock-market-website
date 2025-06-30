'use client'

import { Form, Input, Button, Image } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useResetPasswordMutation } from '@/redux/authApis'

const SetNewPassword = () => {
  const router = useRouter()

  type FormData = {
    email: string
    password: string
    confirm_password: string
  }
  const [postResetPassword, { isLoading }] = useResetPasswordMutation()
  const [form] = Form.useForm()
  const onFinish = async (values: FormData) => {
    try {
      const email = localStorage.getItem('email') || ''

      await postResetPassword({
        email: email,
        password: values.password,
        confirmPassword: values.confirm_password,
      })
        .unwrap()
        .then((res) => {
          console.log(res)
          toast.success(res?.message)
          form.resetFields()
          localStorage.removeItem('email')
          localStorage.removeItem('token')
          router.push('/sign-in')
        })
    } catch (error: any) {
      toast.error(error?.data?.message)
    }
  }
  return (
    <section className="h-screen ">
      <div
        className="flex  items-center flex-row   h-screen"
        style={{
          backgroundImage: 'url("/auth/background_auth.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=" mx-auto  flex flex-col justify-center items-center  p-12 glass-card max-w-[700px] w-full">
          <div className="flex items-center flex-col  ">
            <div>
              <Image src={'/logo/logo.svg'} alt="logo" preview={false} />
            </div>
            <h1
              className="font-bold  text-center text-black"
              style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
            >
              New Password
            </h1>
            <p
              className=" mb-8  text-center text-sm text-white"
              style={{ fontSize: 'clamp(10px, 5vw, 16px)' }}
            >
              Please enter your new password.
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

            <Form.Item
              name="confirm_password"
              dependencies={['password']}
              label={
                <span className="text-black font-bold text-xl">
                  Confirm Password
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please enter your confirm password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }

                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Enter confirm password"
                className="custom-password-input h-[48px] px-4 border-gray-300 rounded-md"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
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
                {isLoading ? 'Loading...' : ' Set New Password'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default SetNewPassword
